import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { TrendsSidebar } from './components/TrendsSidebar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <Feed />
      <TrendsSidebar />
    </div>
  );
}

export default App;
