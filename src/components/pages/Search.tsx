import { Search as SearchIcon, User, MessageSquare, Volume2, VolumeX, UserX, Radio } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { StatusIndicator } from '../ui/StatusIndicator';
import { mockUsers } from '../../data/mockData';

export function Search() {
  const availableUsers = mockUsers.filter(u => u.status === 'online');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Suchmodus</h1>
        <p className="text-neutral-600 mt-1">Finde und kontaktiere Teilnehmer</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <SearchIcon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-900 mb-1">Suchmodus aktiviert</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Der zuletzt hinzugekommene Teilnehmer wird automatisch ausgewählt.
              Nutzer in Mailboxen oder Menüs können nicht gefunden werden.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="primary">Suche starten</Button>
              <Button size="sm" variant="secondary">Beenden</Button>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <Input
          placeholder="Nach Name oder Mailbox suchen..."
          icon={<SearchIcon size={18} />}
          className="mb-4"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {availableUsers.map(user => (
            <Card key={user.id} className="p-5">
              <div className="flex items-start gap-4 mb-4">
                <Avatar name={user.name} status={user.status} showStatus size="lg" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold text-neutral-900">{user.name}</h3>
                      <p className="text-sm text-neutral-500">{user.mailbox}</p>
                    </div>
                    {user.level === 'operator' && (
                      <Badge variant="warning" size="sm">OP</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <StatusIndicator status={user.status} size="sm" showLabel />
                    {user.currentRoom !== undefined && (
                      <Badge variant="info" size="sm">Raum {user.currentRoom}</Badge>
                    )}
                  </div>

                  {user.isSpeaking && (
                    <div className="flex items-center gap-2 text-teal-600 mb-2">
                      <div className="flex gap-1">
                        <span className="w-1 h-3 bg-teal-500 rounded-full animate-pulse" />
                        <span className="w-1 h-4 bg-teal-500 rounded-full animate-pulse delay-75" />
                        <span className="w-1 h-3 bg-teal-500 rounded-full animate-pulse delay-150" />
                      </div>
                      <span className="text-xs font-medium">Spricht gerade</span>
                    </div>
                  )}

                  {user.isMuted && (
                    <div className="flex items-center gap-1 text-neutral-500 mb-2">
                      <VolumeX size={14} />
                      <span className="text-xs">Stummgeschaltet</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Button size="sm" variant="primary" icon={<MessageSquare size={14} />}>
                    Privatgespräch
                  </Button>
                  <Button size="sm" variant="secondary" icon={<User size={14} />}>
                    Details
                  </Button>
                </div>

                {user.level === 'operator' && (
                  <div className="pt-2 border-t border-neutral-200">
                    <p className="text-xs font-medium text-neutral-700 mb-2">Operator-Funktionen</p>
                    <div className="grid grid-cols-3 gap-2">
                      <Button size="sm" variant="ghost" icon={<VolumeX size={14} />}>
                        Stumm
                      </Button>
                      <Button size="sm" variant="ghost" icon={<UserX size={14} />}>
                        Kick
                      </Button>
                      <Button size="sm" variant="ghost" icon={<Radio size={14} />}>
                        Quälen
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-6 bg-neutral-50">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Suchmodus-Befehle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Durch Teilnehmer navigieren</span>
            <Badge variant="default">1 2 3</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Privatgespräch (OP)</span>
            <Badge variant="default">4</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Stummschalten (OP)</span>
            <Badge variant="default">5</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Rauswerfen (OP)</span>
            <Badge variant="default">6</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Namen & Status abfragen</span>
            <Badge variant="default">7</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Quälen/Trillerpfeife (OP)</span>
            <Badge variant="default">9</Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="text-neutral-700">Zurück zur Konferenz</span>
            <Badge variant="default">0</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}
