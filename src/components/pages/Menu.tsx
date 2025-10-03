import { Settings, Info, Crown, Search, Phone, LogOut, Bell, Shield, HelpCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { currentUser } from '../../data/mockData';

interface MenuProps {
  onPageChange: (page: string) => void;
}

export function Menu({ onPageChange }: MenuProps) {
  const menuSections = [
    {
      title: 'Hauptmenü',
      items: [
        { id: 'settings', label: 'Einstellungen', icon: Settings, color: 'teal' },
        { id: 'search', label: 'Suchmodus', icon: Search, color: 'blue' },
        { id: 'chatmaster', label: 'Chatmaster', icon: Crown, color: 'amber' },
        { id: 'info', label: 'Informationen', icon: Info, color: 'purple' },
      ],
    },
    {
      title: 'System',
      items: [
        { label: 'Benachrichtigungen', icon: Bell, color: 'orange', badge: '3' },
        { label: 'Datenschutz', icon: Shield, color: 'green' },
        { label: 'Hilfe & Support', icon: HelpCircle, color: 'blue' },
      ],
    },
  ];

  return (
    <div className="space-y-6 pb-24">
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar name={currentUser.name} size="xl" status={currentUser.status} showStatus />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-neutral-900">{currentUser.name}</h2>
            <p className="text-sm text-neutral-600">{currentUser.mailbox}</p>
            <div className="flex gap-2 mt-2">
              <Badge variant={currentUser.level === 'operator' ? 'warning' : 'default'}>
                {currentUser.level === 'operator' ? 'Operator' : 'Benutzer'}
              </Badge>
              <Badge variant="success">Online</Badge>
            </div>
          </div>
        </div>
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => onPageChange('settings')}
        >
          Profil bearbeiten
        </Button>
      </Card>

      {menuSections.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3 px-2">
            {section.title}
          </h3>
          <Card className="divide-y divide-neutral-200">
            {section.items.map((item, itemIdx) => {
              const Icon = item.icon;
              const colorClasses = {
                teal: 'bg-teal-100 text-teal-600',
                blue: 'bg-blue-100 text-blue-600',
                amber: 'bg-amber-100 text-amber-600',
                purple: 'bg-purple-100 text-purple-600',
                orange: 'bg-orange-100 text-orange-600',
                green: 'bg-green-100 text-green-600',
              };

              return (
                <div
                  key={itemIdx}
                  className="flex items-center gap-4 p-4 hover:bg-neutral-50 transition-colors cursor-pointer"
                  onClick={() => item.id && onPageChange(item.id)}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                    <Icon size={20} />
                  </div>
                  <span className="flex-1 font-medium text-neutral-900">{item.label}</span>
                  {item.badge && (
                    <Badge variant="danger" size="sm">{item.badge}</Badge>
                  )}
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              );
            })}
          </Card>
        </div>
      ))}

      <Card className="p-6 bg-red-50 border-red-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">Telefon-Hotline</h3>
            <p className="text-sm text-neutral-600">040 808080</p>
          </div>
        </div>
        <p className="text-sm text-neutral-700 mb-4">
          Rufe unsere Hotline an, um per Telefon auf den Chat zuzugreifen.
          Alle Funktionen sind auch per DTMF-Befehle verfügbar.
        </p>
        <Button variant="secondary" className="w-full" icon={<Phone size={18} />}>
          Anrufen
        </Button>
      </Card>

      <Card>
        <button className="w-full flex items-center gap-3 p-4 text-red-600 hover:bg-red-50 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Abmelden</span>
        </button>
      </Card>

      <div className="text-center text-sm text-neutral-500 px-4">
        <p>YIPL Chat v1.0</p>
        <p className="mt-1">© 2025 Telefonchat 040 808080</p>
      </div>
    </div>
  );
}
