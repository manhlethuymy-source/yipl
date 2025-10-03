import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { BottomNav } from './components/layout/BottomNav';
import { Dashboard } from './components/pages/Dashboard';
import { Rooms } from './components/pages/Rooms';
import { Messages } from './components/pages/Messages';
import { Friends } from './components/pages/Friends';
import { Settings } from './components/pages/Settings';
import { Search } from './components/pages/Search';
import { Information } from './components/pages/Information';
import { Chatmaster } from './components/pages/Chatmaster';
import { Menu } from './components/pages/Menu';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard />;
      case 'rooms':
        return <Rooms />;
      case 'messages':
        return <Messages />;
      case 'friends':
        return <Friends />;
      case 'settings':
        return <Settings />;
      case 'search':
        return <Search />;
      case 'info':
        return <Information />;
      case 'chatmaster':
        return <Chatmaster />;
      case 'menu':
        return <Menu onPageChange={setCurrentPage} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="flex-1 lg:ml-0">
        <div className="max-w-7xl mx-auto p-6 pb-24 lg:pb-6">
          {renderPage()}
        </div>
      </main>

      <BottomNav currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;
