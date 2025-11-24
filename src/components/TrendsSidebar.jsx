// All icons replaced with inline SVG versions.

const SearchIcon = () => (
  <svg
    className="absolute left-4 top-3 w-5 h-5 text-gray-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    className="w-5 h-5 text-gray-600 cursor-pointer"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83l-1.42 1.42a2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V22a2 2 0 01-2 2H9a2 2 0 01-2-2v-.09a1.65 1.65 0 00-1-1.51A1.65 1.65 0 004.18 19l-.06.06a2 2 0 01-2.83 0L-.13 17.6a2 2 0 010-2.83l.06-.06A1.65 1.65 0 001.41 13a1.65 1.65 0 00-1-1.51H.34a2 2 0 01-2-2V9a2 2 0 012-2h.09a1.65 1.65 0 001-1.51A1.65 1.65 0 001.41 3l-.06-.06a2 2 0 010-2.83L2.77-.31a2 2 0 012.83 0l.06.06A1.65 1.65 0 007.18 1.41a1.65 1.65 0 001.51-1h.09a2 2 0 012-2h2a2 2 0 012 2v.09a1.65 1.65 0 001.51 1 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0l1.42 1.42a2 2 0 010 2.83l-.06.06A1.65 1.65 0 0022.59 7a1.65 1.65 0 001 1.51h.09a2 2 0 012 2v2a2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.01 1.49z" />
  </svg>
);

export const TrendsSidebar = () => {
  const trends = [
    {
      category: 'Space',
      title: 'Lunar photography improves the discovery of the moon',
      tweets: '10,094'
    },
    {
      category: 'Trending worldwide',
      hashtag: '#WorldNews',
      tweets: '125K',
      subtitle: '5,094 people are Tweeting about this'
    },
    {
      category: 'Animals',
      title: 'These cats are ready for #InternationalCatDay',
      tweets: '2,757'
    },
    {
      category: 'Trending worldwide',
      hashtag: '#GreatestOfAllTime',
      tweets: '100K',
      subtitle: '4,123 people are Tweeting about this'
    }
  ];

  return (
    <div className="w-80 h-screen fixed right-0 top-0 p-4">
      <div className="sticky top-0">
        <div className="relative mb-4">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white"
          />
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Trends for you</h2>
            <SettingsIcon />
          </div>

          <div className="space-y-4">
            {trends.map((trend, index) => (
              <div
                key={index}
                className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
              >
                <div className="text-xs text-gray-500">{trend.category}</div>

                {trend.hashtag ? (
                  <div className="font-bold">{trend.hashtag}</div>
                ) : (
                  <div className="font-semibold text-sm">{trend.title}</div>
                )}

                <div className="text-xs text-gray-500">
                  {trend.subtitle || `${trend.tweets} Tweets`}
                </div>
              </div>
            ))}
          </div>

          <button className="text-blue-400 hover:bg-gray-100 p-2 rounded-lg text-sm mt-2">
            Show more
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-4">Who to follow</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Tech News</div>
                  <div className="text-xs text-gray-500">@technews</div>
                </div>
              </div>

              <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-800">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
