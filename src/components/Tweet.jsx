import { useState } from 'react';

const MoreIcon = () => (
  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);

const PencilIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 11.5a8.5 8.5 0 01-12.8 7.3L3 21l2.2-4.7A8.5 8.5 0 1121 11.5z" />
  </svg>
);

const RetweetIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11v-4a2 2 0 012-2h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v4a2 2 0 01-2 2H5" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.8a5.5 5.5 0 000-7.8z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
  </svg>
);

// ----- COMPONENT -----

export const Tweet = ({ id, username, tweet, createdAt, edited, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTweet, setEditedTweet] = useState(tweet);
  const [showMenu, setShowMenu] = useState(false);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "now";
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;

    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const handleSaveEdit = () => {
    if (editedTweet.trim().length >= 5) {
      onEdit(id, editedTweet);
      setIsEditing(false);
      setShowMenu(false);
    }
  };

  const handleDelete = () => {
    onDelete(id);
    setShowMenu(false);
  };

  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors relative">
      <div className="flex gap-3">

        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>

        <div className="flex-1">

          {/* HEADER */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold hover:underline cursor-pointer">{username}</span>
            <span className="text-gray-500">@{username.toLowerCase().replace(/\s/g, "_")}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{formatTime(createdAt)}</span>

            {edited && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Edited</span>
            )}

            <button
              onClick={() => setShowMenu(!showMenu)}
              className="ml-auto p-2 hover:bg-blue-50 rounded-full"
            >
              <MoreIcon />
            </button>
          </div>

          {/* MENU */}
          {showMenu && (
            <div className="absolute right-4 top-12 bg-white shadow-lg rounded-lg border z-10 w-48">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-left"
              >
                <PencilIcon />
                <span>Edit</span>
              </button>

              <button
                onClick={handleDelete}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 text-left"
              >
                <TrashIcon />
                <span>Delete</span>
              </button>
            </div>
          )}

          {/* EDIT MODE */}
          {isEditing ? (
            <div>
              <textarea
                value={editedTweet}
                onChange={(e) => setEditedTweet(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={3}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleSaveEdit}
                  className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-blue-500"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditedTweet(tweet);
                  }}
                  className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full font-semibold hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-900 mb-3">{tweet}</p>
          )}

          {/* ACTION ICONS */}
          <div className="flex justify-between max-w-md text-gray-500">

            <button className="flex items-center gap-2 hover:text-blue-400 group">
              <div className="p-2 rounded-full group-hover:bg-blue-50">
                <MessageIcon />
              </div>
              <span className="text-sm">1</span>
            </button>

            <button className="flex items-center gap-2 hover:text-green-500 group">
              <div className="p-2 rounded-full group-hover:bg-green-50">
                <RetweetIcon />
              </div>
              <span className="text-sm">5</span>
            </button>

            <button className="flex items-center gap-2 hover:text-red-500 group">
              <div className="p-2 rounded-full group-hover:bg-red-50">
                <HeartIcon />
              </div>
              <span className="text-sm">14</span>
            </button>

            <button className="flex items-center gap-2 hover:text-blue-400 group">
              <div className="p-2 rounded-full group-hover:bg-blue-50">
                <ShareIcon />
              </div>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};
