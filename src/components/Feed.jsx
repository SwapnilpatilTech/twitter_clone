import { useEffect, useState } from 'react';
import { TweetComposer } from './TweetComposer';
import { Tweet } from './Tweet';

// Sparkles icon
const SparklesIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M12 3l1.8 5.3L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.7L12 3z" />
    <path d="M5 19l.6 1.7L7 21l-1.4.3L5 23l-.6-1.7L3 21l1.4-.3L5 19z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
  </svg>
);

export const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTweets = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tweets');
      const data = await response.json();
      setTweets(data);
    } catch (error) {
      console.error('Error fetching tweets:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  // CREATE TWEET
  const handleTweetSubmit = async (username, tweet) => {
    try {
      const response = await fetch('http://localhost:3000/api/tweets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, tweet }),
      });

      if (response.ok) {
        const newTweet = await response.json();
        setTweets((prev) => [newTweet, ...prev]);
      }
    } catch (error) {
      console.error('Error creating tweet:', error);
    }
  };

  // UPDATE TWEET (fixed PUT → PATCH)
  const handleEditTweet = async (id, newTweet) => {
    try {
      const response = await fetch(`http://localhost:3000/api/tweets/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tweet: newTweet }),
      });

      if (response.ok) {
        const updatedTweet = await response.json();
        setTweets((prev) =>
          prev.map((t) => (t.id === id ? updatedTweet : t))
        );
      }
    } catch (error) {
      console.error('Error updating tweet:', error);
    }
  };

  // DELETE TWEET
  const handleDeleteTweet = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/tweets/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTweets((prev) => prev.filter((t) => t.id !== id));
      }
    } catch (error) {
      console.error('Error deleting tweet:', error);
    }
  };

  return (
    <div className="flex-1 border-r border-gray-200 max-w-2xl ml-64 mr-80">
      <div className="sticky top-0 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Home</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <SparklesIcon />
          </button>
        </div>
      </div>

      {/* Tweet Composer */}
      <TweetComposer onTweetSubmit={handleTweetSubmit} />

      <div>
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading tweets...</div>
        ) : tweets.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No tweets yet. Be the first to tweet!</div>
        ) : (
          tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              username={tweet.username}
              tweet={tweet.tweet}
              createdAt={tweet.createdAt}
              edited={tweet.isEdited}
              updatedAt={tweet.updatedAt}
              onEdit={handleEditTweet}
              onDelete={handleDeleteTweet}
            />
          ))
        )}
      </div>
    </div>
  );
};
