<h1 align="center">🐦 Mini Twitter – Full-Stack Practical Assignment</h1>

<p align="center">
  A simple full-stack Tweet Posting App built using <b>React + Express</b> with Middleware, Modules, and File-based Database.
</p>

<hr />

<h2>🚀 Project Overview</h2>

  <img src="https://github.com/SwapnilpatilTech/twitter_clone/blob/350840671136dbca304a3af7228e3353b27bc92f/Screenshot%202025-11-24%20222232.png" width="100%">

  
  <img src="https://github.com/SwapnilpatilTech/twitter_clone/blob/7770646802b2039c15fb003b01d6a020eca3f2f3/tweeter%20-%20Made%20with%20Clipchamp.gif" width="100%">


Output video:https://drive.google.com/file/d/15soOJB5mCp2cqiNHBaT4KkOWOmB0qVPn/view?usp=sharing
<p>
  Build a <b>Mini Twitter Home Page</b> where users can:
</p>

<ul>
  <li>✔ Add a Tweet</li>
  <li>✔ Edit a Tweet</li>
  <li>✔ Delete a Tweet</li>
  <li>✔ List All Tweets</li>
</ul>

<p>The UI should look similar to a simple version of Twitter’s Home Timeline.</p>

<hr />

<h2>🎯 Backend (Node + Express) Requirements</h2>

<h3>1. Use Express + Modules</h3>
<p>The backend must use:</p>

<ul>
  <li><code>express</code></li>
  <li><code>fs</code> module (core)</li>
  <li><code>path</code> module (core)</li>
  <li>User-defined modules (<code>tweetService.js</code>)</li>
</ul>

<h3>2. CRUD Routes</h3>

<h4>1️⃣ GET /api/tweets</h4>
<ul>
  <li>Returns all tweets</li>
  <li>Reads data from <code>tweets.json</code></li>
</ul>

<h4>2️⃣ POST /api/tweets</h4>
<ul>
  <li>Add a new tweet</li>
  <li>Stores data in <code>tweets.json</code></li>
</ul>

<p><b>Required fields:</b></p>

<table>
  <tr>
    <th>Field</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>username</td>
    <td>string</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>tweet</td>
    <td>string</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>createdAt</td>
    <td>date</td>
    <td>Auto-generated</td>
  </tr>
</table>

<h4>3️⃣ PUT /api/tweets/:id</h4>
<ul>
  <li>Updates only the <code>tweet</code> field</li>
</ul>

<h4>4️⃣ DELETE /api/tweets/:id</h4>
<ul>
  <li>Deletes a tweet by ID</li>
</ul>

<hr />

<h2>🛡 Middleware Requirements</h2>

<h3>✔ Application-level Middleware</h3>
<p>Logs every request in format:</p>

<pre>
METHOD   URL   TIME
</pre>

Example:
<pre>
POST /api/tweets  10:45:22 AM
</pre>

<h3>✔ Route-level Middleware (POST, PUT)</h3>

<ul>
  <li>❌ Reject if tweet is empty</li>
  <li>❌ Reject if tweet is less than <b>5 characters</b></li>
  <li>✔ Allow valid tweets</li>
</ul>

<hr />

<h2>📁 Required Directory Structure</h2>

<pre>
project/
 ├── app.js
 ├── routes/
 │     └── tweetRoutes.js
 ├── middleware/
 │     ├── logger.js
 │     └── validateTweet.js
 ├── services/
 │     └── tweetService.js
 ├── data/
 │     └── tweets.json
 ├── src/ (React)
 │     ├── App.jsx
 │     ├── main.jsx
 │     ├── components/
 │     └── ...
 ├── index.html
 ├── package.json
 └── vite.config.js
</pre>

<hr />

<h2>🎨 Frontend (React) Requirements</h2>

<h3>UI Features</h3>

<ul>
  <li>Tweet Input Box</li>
  <li>Username (input)</li>
  <li>Tweet text (textarea)</li>
  <li>Submit button</li>
  <li>List of tweets</li>
</ul>

<h3>Each Tweet Must Display:</h3>

<ul>
  <li>Username</li>
  <li>Tweet text</li>
  <li>Created time</li>
  <li>Edit button</li>
  <li>Delete button</li>
</ul>

<h3>Fetching Data</h3>

<p>All API calls use:</p>

<pre><code>fetch("/api/tweets")</code></pre>

<p>No full URL needed because the frontend uses a development proxy.</p>

<hr />

<h2>⭐ Extra Points (Optional)</h2>

<ul>
  <li>✔ Use Bootstrap or TailwindCSS</li>
  <li>✔ Show live character counter (max 280)</li>
  <li>✔ Show “Edited” badge for updated tweets</li>
</ul>

<hr />

<h2>🧪 Final Output Expected</h2>

<ul>
  <li>✔ Fully working React frontend</li>
  <li>✔ Fully working Express backend</li>
  <li>✔ Middl
# Twitter
