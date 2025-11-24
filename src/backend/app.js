import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data_file = path.join(__dirname, "data", "tweets.json");
const log_folder = path.join(__dirname, "logs");
const log_file = path.join(log_folder, "server.log");

// create logs directory if missing
if (!fs.existsSync(log_folder)) {
    fs.mkdirSync(log_folder, { recursive: true });
}

export const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const log_text = `[${timestamp}] ${req.method} ${req.url}\n`;

    fs.appendFile(log_file, log_text, (err) => {
        if (err) console.log("log write error:", err);
    });

    next();
});

function read_data() {
    if (!fs.existsSync(data_file)) return [];
    try {
        const json = fs.readFileSync(data_file, "utf-8");
        return JSON.parse(json);
    } catch {
        return [];
    }
}

function save_data(tweets) {
    fs.writeFileSync(data_file, JSON.stringify(tweets, null, 2));
}

function check_tweet(text) {
    if (!text || text.trim() === "") return "Tweet cannot be empty";
    if (text.trim().length < 5) return "Tweet must be at least 5 characters";
    return null;
}

// ------------------------------------------------------------------
// home route
// ------------------------------------------------------------------
app.get("/", (req, res) => {
    res.send("Twitter API is running ✔️");
});

app.get("/api/tweets", (req, res) => {
    const tweets = read_data();
    res.json(tweets);
});

app.get("/api/tweets/:id", (req, res) => {
    const id = Number(req.params.id);
    const tweets = read_data();

    const found = tweets.find((t) => t.id === id);
    if (!found) {
        return res.status(404).json({ error: "Tweet not found" });
    }

    res.json(found);
});

app.post("/api/tweets", (req, res) => {
    const { username, tweet } = req.body;

    // username required
    if (!username || username.trim() === "") {
        return res.status(400).json({ error: "Username is required" });
    }

    // tweet validation
    const error = check_tweet(tweet);
    if (error) return res.status(400).json({ error });

    const tweets = read_data();

    // avoid duplicate tweet from same user
    const duplicate = tweets.find(
        (t) => t.username === username && t.tweet === tweet
    );
    if (duplicate) {
        return res.status(409).json({ error: "Duplicate tweet for this user" });
    }

    const new_tweet = {
        id: Date.now(),
        username,
        tweet,
        isedited: false,
        createdat: new Date().toISOString(),
    };

    tweets.push(new_tweet);
    save_data(tweets);

    res.status(201).json(new_tweet);
});

app.patch("/api/tweets/:id", (req, res) => {
    const id = Number(req.params.id);
    const { username, tweet } = req.body;

    const tweets = read_data();
    const index = tweets.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Tweet not found" });
    }

    // validate tweet if included
    if (tweet !== undefined) {
        const err = check_tweet(tweet);
        if (err) return res.status(400).json({ error: err });
        tweets[index].tweet = tweet;
    }

    // validate username if included
    if (username !== undefined) {
        if (!username.trim()) {
            return res.status(400).json({ error: "Username cannot be empty" });
        }
        tweets[index].username = username;
    }

    tweets[index].isedited = true;
    tweets[index].updatedat = new Date().toISOString();

    save_data(tweets);

    res.json(tweets[index]);
});

app.delete("/api/tweets/:id", (req, res) => {
    const id = Number(req.params.id);
    let tweets = read_data();

    const exists = tweets.some((t) => t.id === id);
    if (!exists) {
        return res.status(404).json({ error: "Tweet not found" });
    }

    tweets = tweets.filter((t) => t.id !== id);
    save_data(tweets);

    res.json({ message: "Tweet deleted successfully" });
});
