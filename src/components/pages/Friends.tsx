import { Users, UserPlus, MessageSquare, Phone, UserX, Bell, BellOff, Search, Filter } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { StatusIndicator } from '../ui/StatusIndicator';
import { mockFriends, mockUsers } from '../../data/mockData';

export function Friends() {
  const onlineFriends = mockFriends.filter(f => f.user.status === 'online');
  const offlineFriends = mockFriends.filter(f => f.user.status === 'offline');
  const otherUsers = mockUsers.filter(u => !mockFriends.some(f => f.user.id === u.id));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Freunde</h1>
          <p className="text-neutral-600 mt-1">Verwalte deine Buddyliste</p>
        </div>
        <Button icon={<UserPlus size={20} />}>
          Freund hinzufügen
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-600">Gesamt</p>
                <p className="text-xl font-bold text-neutral-900">{mockFriends.length}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-teal-600 rounded-full" />
              </div>
              <div>
                <p className="text-sm text-neutral-600">Online</p>
                <p className="text-xl font-bold text-neutral-900">{onlineFriends.length}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-neutral-400 rounded-full" />
            </div>
            <div>
              <p className="text-sm text-neutral-600">Offline</p>
              <p className="text-xl font-bold text-neutral-900">{offlineFriends.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-600">Buddy-Modus</p>
              <Badge variant="success" size="sm" className="mt-1">AN</Badge>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-3">
        <Input
          placeholder="Freunde durchsuchen..."
          icon={<Search size={18} />}
          className="flex-1"
        />
        <Button variant="secondary" icon={<Filter size={18} />}>
          Filter
        </Button>
      </div>

      {onlineFriends.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            Online ({onlineFriends.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {onlineFriends.map(friend => (
              <Card key={friend.user.id} hover className="p-5">
                <div className="flex items-start gap-4">
                  <Avatar
                    name={friend.user.name}
                    status={friend.user.status}
                    showStatus
                    size="lg"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-semibold text-neutral-900">{friend.user.name}</h3>
                        <p className="text-sm text-neutral-500">{friend.user.mailbox}</p>
                      </div>
                      {friend.user.level === 'operator' && (
                        <Badge variant="warning" size="sm">OP</Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <StatusIndicator status={friend.user.status} size="sm" showLabel />
                      {friend.user.currentRoom !== undefined && (
                        <Badge variant="info" size="sm">Raum {friend.user.currentRoom}</Badge>
                      )}
                    </div>

                    {friend.user.isSpeaking && (
                      <div className="flex items-center gap-2 mb-3 text-teal-600">
                        <div className="flex gap-1">
                          <span className="w-1 h-3 bg-teal-500 rounded-full animate-pulse" />
                          <span className="w-1 h-4 bg-teal-500 rounded-full animate-pulse delay-75" />
                          <span className="w-1 h-3 bg-teal-500 rounded-full animate-pulse delay-150" />
                        </div>
                        <span className="text-xs font-medium">Spricht gerade</span>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button size="sm" variant="primary" icon={<MessageSquare size={14} />} className="flex-1">
                        Chat
                      </Button>
                      <Button size="sm" variant="secondary" icon={<Phone size={14} />}>
                        Anrufen
                      </Button>
                    </div>

                    <div className="mt-3 pt-3 border-t border-neutral-200 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-neutral-500">
                        {friend.notifyOnline ? (
                          <>
                            <Bell size={12} className="text-amber-500" />
                            <span>Benachrichtigungen an</span>
                          </>
                        ) : (
                          <>
                            <BellOff size={12} />
                            <span>Benachrichtigungen aus</span>
                          </>
                        )}
                      </div>
                      <Button size="sm" variant="ghost" icon={<UserX size={12} />}>
                        Entfernen
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {offlineFriends.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-neutral-400 rounded-full" />
            Offline ({offlineFriends.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offlineFriends.map(friend => (
              <Card key={friend.user.id} className="p-4">
                <div className="flex flex-col items-center text-center gap-3">
                  <Avatar
                    name={friend.user.name}
                    status={friend.user.status}
                    showStatus
                    size="lg"
                  />
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-sm">{friend.user.name}</h3>
                    <p className="text-xs text-neutral-500">{friend.user.mailbox}</p>
                  </div>
                  <StatusIndicator status={friend.user.status} size="sm" showLabel />
                  <Button size="sm" variant="secondary" className="w-full" icon={<MessageSquare size={14} />}>
                    Nachricht
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Card className="p-6">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Weitere Nutzer entdecken</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherUsers.map(user => (
            <div
              key={user.id}
              className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 hover:border-teal-200 hover:bg-teal-50 transition-all"
            >
              <Avatar name={user.name} status={user.status} showStatus size="md" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-neutral-900 text-sm">{user.name}</p>
                <p className="text-xs text-neutral-500">{user.mailbox}</p>
              </div>
              <Button size="sm" variant="ghost" icon={<UserPlus size={14} />}>
                Hinzufügen
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-900 mb-1">Buddy-Modus</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Mit aktiviertem Buddy-Modus wirst du benachrichtigt, wenn deine Freunde online kommen.
              Du kannst dies für jeden Freund individuell einstellen oder global mit *75# steuern.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="primary">Buddy-Modus aktivieren</Button>
              <span className="text-xs text-neutral-600 self-center">*75#</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
