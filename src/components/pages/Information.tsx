import { Info, Phone, Clock, Users, TrendingUp, Award, List, UserCheck } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { mockUsers, mockStatistics, mockRooms } from '../../data/mockData';

export function Information() {
  const last100Callers = mockUsers.slice(0, 5);
  const topCallers = mockStatistics.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Informationen</h1>
        <p className="text-neutral-600 mt-1">System-Informationen und Statistiken</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card hover className="p-6 cursor-pointer">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center">
              <Phone className="w-7 h-7 text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Selbstbedienung</h3>
              <p className="text-xs text-neutral-600 mt-1">Hotline & Support</p>
            </div>
            <Badge variant="default" size="sm">Taste 1</Badge>
          </div>
        </Card>

        <Card hover className="p-6 cursor-pointer">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Letzte 100 Anrufer</h3>
              <p className="text-xs text-neutral-600 mt-1">Kürzlich online</p>
            </div>
            <Badge variant="default" size="sm">Taste 2</Badge>
          </div>
        </Card>

        <Card hover className="p-6 cursor-pointer">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
              <List className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Raumliste</h3>
              <p className="text-xs text-neutral-600 mt-1">Alle verfügbaren Räume</p>
            </div>
            <Badge variant="default" size="sm">Taste 3</Badge>
          </div>
        </Card>

        <Card hover className="p-6 cursor-pointer">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
              <Clock className="w-7 h-7 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Zeitansage</h3>
              <p className="text-xs text-neutral-600 mt-1">Aktuelle Uhrzeit</p>
            </div>
            <Badge variant="default" size="sm">Taste 4</Badge>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">Letzte 100 Anrufer</h2>
              <p className="text-sm text-neutral-600">Kürzlich aktive Nutzer</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">Alle anzeigen</Button>
        </div>

        <div className="space-y-3">
          {last100Callers.map((user, index) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 hover:border-teal-200 hover:bg-teal-50 transition-all cursor-pointer"
            >
              <div className="text-lg font-bold text-neutral-400 w-8 text-center">
                #{index + 1}
              </div>
              <Avatar name={user.name} status={user.status} showStatus size="md" />
              <div className="flex-1">
                <p className="font-semibold text-neutral-900">{user.name}</p>
                <p className="text-sm text-neutral-500">{user.mailbox}</p>
              </div>
              <div className="flex items-center gap-2">
                {user.currentRoom !== undefined && (
                  <Badge variant="info" size="sm">Raum {user.currentRoom}</Badge>
                )}
                <Badge variant={user.status === 'online' ? 'success' : 'default'} size="sm">
                  {user.status === 'online' ? 'Online' : 'Offline'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <List className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">Raumliste</h2>
              <p className="text-sm text-neutral-600">Alle verfügbaren Räume im Überblick</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockRooms.map(room => (
            <div
              key={room.id}
              className="p-4 rounded-lg border border-neutral-200 hover:border-teal-200 hover:bg-teal-50 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-neutral-900">{room.name}</h3>
                  <p className="text-xs text-neutral-500">Raum {room.id}</p>
                </div>
                {room.isLocked && (
                  <Badge variant="warning" size="sm">Gesperrt</Badge>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Users size={16} />
                  <span>{room.participants.length} Teilnehmer</span>
                </div>
                {room.participants.length > 0 && (
                  <Badge variant="success" size="sm">Aktiv</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">Die Besten 10</h2>
              <p className="text-sm text-neutral-600">Top-Statistiken der Community</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <TrendingUp size={18} className="text-teal-600" />
              Häufigste Anrufer
            </h3>
            <div className="space-y-3">
              {topCallers.map((stat, index) => (
                <div key={stat.userId} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-amber-400 text-white' :
                    index === 1 ? 'bg-neutral-300 text-white' :
                    'bg-orange-300 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-900 text-sm">{stat.userName}</p>
                    <p className="text-xs text-neutral-500">{stat.callCount} Anrufe</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <Award size={18} className="text-purple-600" />
              Beliebteste Teilnehmer
            </h3>
            <div className="space-y-3">
              {topCallers.map((stat, index) => (
                <div key={stat.userId} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-amber-400 text-white' :
                    index === 1 ? 'bg-neutral-300 text-white' :
                    'bg-orange-300 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-900 text-sm">{stat.userName}</p>
                    <p className="text-xs text-neutral-500">{stat.popularity} Beliebtheit</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <UserCheck size={18} className="text-green-600" />
              Aktivste Nutzer
            </h3>
            <div className="space-y-3">
              {topCallers.map((stat, index) => (
                <div key={stat.userId} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-amber-400 text-white' :
                    index === 1 ? 'bg-neutral-300 text-white' :
                    'bg-orange-300 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-900 text-sm">{stat.userName}</p>
                    <p className="text-xs text-neutral-500">
                      {new Date(stat.lastSeen).toLocaleDateString('de-DE')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">Zeitansage</h2>
            <p className="text-sm text-neutral-600">Aktuelle Uhrzeit und Datum</p>
          </div>
        </div>

        <div className="text-center py-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
          <p className="text-5xl font-bold text-neutral-900 mb-2">
            {new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
          </p>
          <p className="text-lg text-neutral-600">
            {new Date().toLocaleDateString('de-DE', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </Card>

      <Card className="p-6 bg-neutral-50">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Informationsmenü-Befehle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Selbstbedienung</span>
            <Badge variant="default">1</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Letzte 100 Anrufer</span>
            <Badge variant="default">2</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Raumliste</span>
            <Badge variant="default">3</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Zeitansage</span>
            <Badge variant="default">4</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Freundesliste</span>
            <Badge variant="default">5</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Anwesenheitsliste</span>
            <Badge variant="default">7</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Die Besten 10</span>
            <Badge variant="default">9</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Zurück</span>
            <Badge variant="default">0</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}
