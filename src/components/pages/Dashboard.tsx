import { Phone, Users, MessageSquare, TrendingUp, Clock, Activity } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { mockRooms, mockFriends, mockMessages } from '../../data/mockData';

export function Dashboard() {
  const currentRoom = mockRooms[0];
  const unreadMessages = mockMessages.filter(m => !m.isRead).length;
  const onlineFriends = mockFriends.filter(f => f.user.status === 'online').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
        <p className="text-neutral-600 mt-1">Willkommen zurück im YIPL Chat</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Aktueller Raum</p>
              <p className="text-2xl font-bold text-neutral-900 mt-1">{currentRoom.name}</p>
            </div>
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Teilnehmer</p>
              <p className="text-2xl font-bold text-neutral-900 mt-1">{currentRoom.participants.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Neue Nachrichten</p>
              <p className="text-2xl font-bold text-neutral-900 mt-1">{unreadMessages}</p>
            </div>
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-amber-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Freunde online</p>
              <p className="text-2xl font-bold text-neutral-900 mt-1">{onlineFriends}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-neutral-900">Raum-Aktivität</h2>
            <Badge variant="success">Live</Badge>
          </div>

          <div className="space-y-4">
            {currentRoom.participants.map(user => (
              <div key={user.id} className="flex items-center gap-3">
                <Avatar name={user.name} status={user.status} showStatus size="md" />
                <div className="flex-1">
                  <p className="font-medium text-neutral-900">{user.name}</p>
                  <p className="text-sm text-neutral-500">{user.mailbox}</p>
                </div>
                {user.isSpeaking && (
                  <div className="flex gap-1">
                    <span className="w-1 h-4 bg-teal-500 rounded-full animate-pulse" />
                    <span className="w-1 h-6 bg-teal-500 rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-4 bg-teal-500 rounded-full animate-pulse delay-150" />
                  </div>
                )}
                {user.isMuted && (
                  <Badge variant="default" size="sm">Stumm</Badge>
                )}
              </div>
            ))}
          </div>

          <Button variant="secondary" className="w-full mt-4">
            Raum wechseln
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-neutral-900">Neue Nachrichten</h2>
            {unreadMessages > 0 && (
              <Badge variant="danger">{unreadMessages}</Badge>
            )}
          </div>

          <div className="space-y-3">
            {mockMessages.slice(0, 3).map(message => (
              <div
                key={message.id}
                className={`p-3 rounded-lg border transition-all hover:border-teal-200 cursor-pointer ${
                  message.isRead ? 'bg-neutral-50 border-neutral-200' : 'bg-teal-50 border-teal-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar name={message.from.name} size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-neutral-900 text-sm">{message.from.name}</p>
                      <span className="text-xs text-neutral-500">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {new Date(message.timestamp).toLocaleTimeString('de-DE', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 line-clamp-2">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button variant="ghost" className="w-full mt-4">
            Alle Nachrichten anzeigen
          </Button>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-neutral-900">Freunde online</h2>
          <Badge variant="success">{onlineFriends} online</Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockFriends
            .filter(f => f.user.status === 'online')
            .map(friend => (
              <div
                key={friend.user.id}
                className="flex flex-col items-center gap-2 p-4 rounded-lg border border-neutral-200 hover:border-teal-200 hover:bg-teal-50 transition-all cursor-pointer"
              >
                <Avatar name={friend.user.name} status={friend.user.status} showStatus size="lg" />
                <div className="text-center">
                  <p className="font-medium text-neutral-900 text-sm">{friend.user.name}</p>
                  {friend.user.currentRoom !== undefined && (
                    <p className="text-xs text-neutral-500">Raum {friend.user.currentRoom}</p>
                  )}
                </div>
                <Button size="sm" variant="secondary" className="w-full">
                  Nachricht
                </Button>
              </div>
            ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-900 mb-1">Schnellzugriff</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Greife schnell auf die wichtigsten Funktionen zu
            </p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="primary">Privatraum betreten</Button>
              <Button size="sm" variant="secondary">Karussell</Button>
              <Button size="sm" variant="secondary">Suchmodus</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
