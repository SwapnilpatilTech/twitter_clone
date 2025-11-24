
const TwitterIcon = () => (
  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2a4.48 4.48 0 00-4.47 4.47c0 .35.04.7.11 1.03A12.8 12.8 0 013 3.14a4.48 4.48 0 001.39 5.97A4.4 4.4 0 012.8 8.7v.05a4.48 4.48 0 003.58 4.39 4.52 4.52 0 01-2.03.08 4.48 4.48 0 004.18 3.11A9 9 0 012 19.54 12.73 12.73 0 008.29 21c8.32 0 12.87-6.9 12.87-12.87 0-.2 0-.41-.02-.61A9.22 9.22 0 0023 3z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 9.5L12 3l9 6.5v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-11z" />
  </svg>
);

const HashIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 3L7 21M17 3l-2 18M4 9h16M3 15h16" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const BookmarkIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M6 3h12v18l-6-4-6 4V3z" />
  </svg>
);

const FileTextIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
    <path d="M4 22v-1a7 7 0 0116 0v1" />
  </svg>
);

const MoreIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen fixed left-0 top-0 border-r border-gray-200 flex flex-col p-4">
      <div className="mb-4">
        <TwitterIcon />
      </div>

      <nav className="flex-1 space-y-2">
        <a href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-100 text-lg font-semibold">
          <HomeIcon />
          <span>Home</span>
        </a>

        <a href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-100 text-lg">
          <HashIcon />
          <span>Explore</span>
        </a>

        <a href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-100 text-lg">
          <BellIcon />
          <span>Notifications</span>
        </a>

        <a href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-100 text-lg">
          <MailIcon />
          <span>Messages</span>
        </a>

        <a href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-100 text-lg">
          <BookmarkIcon />
          <span>Bookmarks</span>
        </a>

        <a href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-100 text-lg">
          <FileTextIcon />
          <span>Lists</span>
        </a>

        <a href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-100 text-lg">
          <UserIcon />
          <span>Profile</span>
        </a>

        <a href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-100 text-lg">
          <MoreIcon />
          <span>More</span>
        </a>
      </nav>

      <button className="bg-blue-400 text-white rounded-full py-3 px-8 font-bold text-lg hover:bg-blue-500 w-full mt-4">
        Tweet
      </button>
    </div>
  );
};
