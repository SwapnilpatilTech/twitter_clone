import { useEffect, useState } from "react";

export const TweetComposer = ({ onTweetSubmit }) => {
  const [username, setUsername] = useState(() => {
    try {
      return localStorage.getItem("tc_username") || "";
    } catch {
      return "";
    }
  });

  const [tweet, setTweet] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 280;

  // Save username as user types
  useEffect(() => {
    try {
      if (username.trim()) {
        localStorage.setItem("tc_username", username.trim());
      }
    } catch(e) { 
      console.error("Failed to save username to localStorage", e);
    }
  }, [username]);

  const handleTweetChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setTweet(text);
      setCharCount(text.length);
    }
  };

  const canSubmit = () => {
    return username.trim() !== "" && tweet.trim().length >= 5;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!canSubmit()) return;

    // Send tweet to parent
    onTweetSubmit(username.trim(), tweet.trim());

    // Reset tweet
    setTweet("");
    setCharCount(0);
  };

  return (
    <form onSubmit={handleSubmit} className="border-b border-gray-200 p-4" noValidate>
      <div className="flex gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Username (required)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="What's happening?"
            value={tweet}
            onChange={handleTweetChange}
            className="w-full text-xl resize-none focus:outline-none min-h-[80px] p-2"
          />

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <span className="text-sm text-gray-500">{charCount}/{maxChars}</span>

            <button
              type="submit"
              disabled={!canSubmit()}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TweetComposer;
