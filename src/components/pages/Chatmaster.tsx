import { Crown, Lock, Unlock, UserPlus, UserX, Mic, Volume2, Users, Shield } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { mockRooms, mockUsers } from '../../data/mockData';
import { CHATMASTER_ROOMS } from '../../constants/rooms';

export function Chatmaster() {
  const chatmasterRoom = mockRooms.find(r => r.id === 10);
  const approvedUsers = chatmasterRoom?.participants || [];
  const pendingUsers = mockUsers.slice(0, 2);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 flex items-center gap-3">
          <Crown className="text-amber-500" />
          Chatmaster
        </h1>
        <p className="text-neutral-600 mt-1">Verwalte deine privaten VIP-Räume (10-30)</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Crown className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-900 mb-1">Chatmaster-Berechtigung</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Als Chatmaster kannst du VIP-Räume (10-30) für dich reservieren und kontrollieren,
              wer Zugang erhält. Du kannst auch ein eigenes Jingle aufnehmen, das beim Betreten abgespielt wird.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="primary" icon={<Crown size={16} />}>
                Raum reservieren
              </Button>
              <Button size="sm" variant="secondary">
                Info anzeigen
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {chatmasterRoom && (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-neutral-900">{chatmasterRoom.name}</h2>
                    <p className="text-sm text-neutral-600">Dein aktueller VIP-Raum</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {chatmasterRoom.isLocked ? (
                    <Badge variant="warning" className="flex items-center gap-1">
                      <Lock size={14} />
                      Gesperrt
                    </Badge>
                  ) : (
                    <Badge variant="success" className="flex items-center gap-1">
                      <Unlock size={14} />
                      Offen
                    </Badge>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={18} className="text-teal-600" />
                    <span className="text-sm text-neutral-600">Teilnehmer</span>
                  </div>
                  <p className="text-2xl font-bold text-neutral-900">{approvedUsers.length}</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield size={18} className="text-amber-600" />
                    <span className="text-sm text-neutral-600">Status</span>
                  </div>
                  <p className="text-2xl font-bold text-neutral-900">
                    {chatmasterRoom.isLocked ? 'Privat' : 'Öffentlich'}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={chatmasterRoom.isLocked ? 'secondary' : 'primary'}
                  icon={chatmasterRoom.isLocked ? <Unlock size={18} /> : <Lock size={18} />}
                >
                  {chatmasterRoom.isLocked ? 'Raum öffnen' : 'Raum sperren'}
                </Button>
                <Button variant="ghost" icon={<Crown size={18} />}>
                  Status aufgeben
                </Button>
              </div>
            </Card>
          )}

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-neutral-900">Genehmigte Teilnehmer</h3>
              <Badge variant="info">{approvedUsers.length}</Badge>
            </div>

            <div className="space-y-3 mb-4">
              {approvedUsers.length > 0 ? (
                approvedUsers.map(user => (
                  <div
                    key={user.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 hover:border-red-200 hover:bg-red-50 transition-all group"
                  >
                    <Avatar name={user.name} status={user.status} showStatus size="md" />
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900">{user.name}</p>
                      <p className="text-sm text-neutral-500">{user.mailbox}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      icon={<UserX size={14} />}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Entfernen
                    </Button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-neutral-500">
                  <Users className="w-12 h-12 mx-auto mb-2 text-neutral-300" />
                  <p>Keine genehmigten Teilnehmer</p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Input
                placeholder="Mailbox-Adresse eingeben (z.B. *4444#)"
                icon={<UserPlus size={18} />}
              />
              <Button variant="primary" className="w-full" icon={<UserPlus size={18} />}>
                Teilnehmer hinzufügen
              </Button>
              <p className="text-xs text-neutral-500 text-center">
                Format: *4*MAILBOX# zum Hinzufügen, *6*MAILBOX# zum Entfernen
              </p>
            </div>
          </Card>

          {pendingUsers.length > 0 && (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-900">Zugangsanfragen</h3>
                <Badge variant="warning">{pendingUsers.length}</Badge>
              </div>

              <div className="space-y-3">
                {pendingUsers.map(user => (
                  <div
                    key={user.id}
                    className="flex items-center gap-3 p-4 rounded-lg border border-amber-200 bg-amber-50"
                  >
                    <Avatar name={user.name} size="md" />
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900">{user.name}</p>
                      <p className="text-sm text-neutral-500">{user.mailbox}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="primary">Zulassen</Button>
                      <Button size="sm" variant="ghost">Ablehnen</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Pool-Jingle</h3>
            <div className="p-6 border-2 border-dashed border-neutral-300 rounded-lg flex flex-col items-center justify-center gap-3 bg-neutral-50 mb-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-amber-600" />
              </div>
              <p className="text-sm text-neutral-600 text-center">
                Zeichne ein Jingle auf, das Besucher beim Betreten hören
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary" icon={<Volume2 size={16} />}>
                  Abspielen
                </Button>
                <Button size="sm" variant="primary" icon={<Mic size={16} />}>
                  Aufnehmen
                </Button>
              </div>
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Taste 4 im Chatmaster-Menü
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Verfügbare VIP-Räume</h3>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {CHATMASTER_ROOMS.map(roomId => {
                const room = mockRooms.find(r => r.id === roomId);
                const isOccupied = room?.chatmaster !== undefined;

                return (
                  <div
                    key={roomId}
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                      isOccupied
                        ? 'border-neutral-200 bg-neutral-50'
                        : 'border-teal-200 hover:bg-teal-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Crown size={16} className={isOccupied ? 'text-neutral-400' : 'text-amber-500'} />
                        <span className={`font-medium text-sm ${isOccupied ? 'text-neutral-500' : 'text-neutral-900'}`}>
                          Raum {roomId}
                        </span>
                      </div>
                      {isOccupied ? (
                        <Badge variant="default" size="sm">Belegt</Badge>
                      ) : (
                        <Badge variant="success" size="sm">Frei</Badge>
                      )}
                    </div>
                    {isOccupied && room?.chatmaster && (
                      <p className="text-xs text-neutral-500 mt-1 ml-6">
                        Host: {room.chatmaster.name}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-6 bg-neutral-50">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Chatmaster-Befehle</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-white rounded">
                <span className="text-neutral-700">Status aufgeben</span>
                <Badge variant="default" size="sm">3</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded">
                <span className="text-neutral-700">Pool-Jingle</span>
                <Badge variant="default" size="sm">4</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded">
                <span className="text-neutral-700">Teilnehmer zulassen</span>
                <Badge variant="default" size="sm">*4*ID#</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded">
                <span className="text-neutral-700">Teilnehmer entfernen</span>
                <Badge variant="default" size="sm">*6*ID#</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded">
                <span className="text-neutral-700">Zurück</span>
                <Badge variant="default" size="sm">0</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
