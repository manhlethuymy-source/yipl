import { Home, MessageSquare, Users, Settings, Info, Phone, Crown } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'rooms', label: 'Räume', icon: Phone },
    { id: 'messages', label: 'Nachrichten', icon: MessageSquare },
    { id: 'friends', label: 'Freunde', icon: Users },
    { id: 'chatmaster', label: 'Chatmaster', icon: Crown },
    { id: 'info', label: 'Informationen', icon: Info },
    { id: 'settings', label: 'Einstellungen', icon: Settings },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-neutral-200 h-screen sticky top-0">
      <div className="p-6 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-neutral-900">YIPL Chat</h1>
            <p className="text-xs text-neutral-500">040 808080</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-teal-50 text-teal-600 font-medium'
                  : 'text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-neutral-200">
        <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-medium">
            DU
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-neutral-900 text-sm truncate">Dein Profil</p>
            <p className="text-xs text-neutral-500">*5555#</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
