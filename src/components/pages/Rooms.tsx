import { Phone, Users, Lock, Crown, Radio, Shield } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { mockRooms } from '../../data/mockData';
import { ROOM_NAMES, CHATMASTER_ROOMS } from '../../constants/rooms';

export function Rooms() {
  const allRooms = Array.from({ length: 10 }, (_, i) => {
    const existingRoom = mockRooms.find(r => r.id === i);
    return existingRoom || {
      id: i,
      name: ROOM_NAMES[i] || `Raum ${i}`,
      participants: [],
      isLocked: false,
    };
  });

  const vipRooms = CHATMASTER_ROOMS.slice(0, 6).map(id => {
    const existingRoom = mockRooms.find(r => r.id === id);
    return existingRoom || {
      id,
      name: `VIP Raum ${id}`,
      participants: [],
      isLocked: false,
    };
  });

  const getRoomIcon = (roomId: number) => {
    switch (roomId) {
      case 3:
        return Shield;
      case 4:
        return Radio;
      default:
        return Phone;
    }
  };

  const getRoomColor = (roomId: number) => {
    switch (roomId) {
      case 0:
        return 'from-teal-500 to-teal-600';
      case 3:
        return 'from-purple-500 to-purple-600';
      case 4:
        return 'from-orange-500 to-orange-600';
      case 21:
        return 'from-red-500 to-red-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Räume</h1>
        <p className="text-neutral-600 mt-1">Wähle einen Raum zum Beitreten</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Haupträume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allRooms.map(room => {
            const Icon = getRoomIcon(room.id);
            const colorClass = getRoomColor(room.id);

            return (
              <Card key={room.id} hover className="p-0 overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${colorClass} p-4 flex items-center justify-between`}>
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={24} />
                      <h3 className="text-xl font-bold">{room.name}</h3>
                    </div>
                    <p className="text-sm text-white/80">Raum {room.id}</p>
                  </div>
                  {room.isLocked && (
                    <Lock className="text-white" size={20} />
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Users size={16} />
                      <span className="text-sm font-medium">
                        {room.participants.length} {room.participants.length === 1 ? 'Teilnehmer' : 'Teilnehmer'}
                      </span>
                    </div>
                    {room.participants.length > 0 && (
                      <Badge variant="success">Aktiv</Badge>
                    )}
                  </div>

                  {room.participants.length > 0 && (
                    <div className="flex -space-x-2 mb-3">
                      {room.participants.slice(0, 5).map(user => (
                        <Avatar key={user.id} name={user.name} size="sm" />
                      ))}
                      {room.participants.length > 5 && (
                        <div className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-medium text-neutral-600">
                            +{room.participants.length - 5}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {room.description && (
                    <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                      {room.description}
                    </p>
                  )}

                  <Button
                    variant={room.id === 0 ? 'primary' : 'secondary'}
                    size="sm"
                    className="w-full"
                    icon={<Phone size={16} />}
                  >
                    {room.isLocked ? 'Anfragen' : 'Beitreten'}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Crown className="text-amber-500" size={24} />
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">VIP Chatmaster Räume</h2>
            <p className="text-sm text-neutral-600">Exklusive Räume mit erweiterten Rechten (10-30)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vipRooms.map(room => (
            <Card key={room.id} hover className="p-0 overflow-hidden border-2 border-amber-200">
              <div className="h-20 bg-gradient-to-br from-amber-400 to-amber-500 p-4 flex items-center justify-between">
                <div className="text-white">
                  <div className="flex items-center gap-2">
                    <Crown size={20} />
                    <h3 className="text-lg font-bold">{room.name}</h3>
                  </div>
                </div>
                {room.isLocked && (
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                    <Lock size={14} className="text-white" />
                    <span className="text-xs text-white font-medium">Gesperrt</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Users size={16} />
                    <span className="text-sm font-medium">{room.participants.length}</span>
                  </div>
                  {room.chatmaster && (
                    <div className="flex items-center gap-1">
                      <Avatar name={room.chatmaster.name} size="sm" />
                      <Badge variant="warning" size="sm">Host</Badge>
                    </div>
                  )}
                </div>

                {room.chatmaster && (
                  <p className="text-sm text-neutral-600 mb-3">
                    Chatmaster: <span className="font-medium">{room.chatmaster.name}</span>
                  </p>
                )}

                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  icon={room.isLocked ? <Lock size={16} /> : <Crown size={16} />}
                >
                  {room.isLocked ? 'Zugriff anfragen' : 'Als Chatmaster beitreten'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-900 mb-1">Spezielle Räume</h3>
            <p className="text-sm text-neutral-700 mb-4">
              Erkunde unsere speziellen Räume mit einzigartigen Features
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-lg border border-neutral-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-purple-500" size={20} />
                  <h4 className="font-medium text-neutral-900">Privatraum</h4>
                </div>
                <p className="text-xs text-neutral-600">Vertrauliche Gespräche in Raum 3</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-neutral-200">
                <div className="flex items-center gap-2 mb-2">
                  <Radio className="text-orange-500" size={20} />
                  <h4 className="font-medium text-neutral-900">Karussell</h4>
                </div>
                <p className="text-xs text-neutral-600">Wechselnde Partner in Raum 4</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-neutral-200">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="text-red-500" size={20} />
                  <h4 className="font-medium text-neutral-900">17+4</h4>
                </div>
                <p className="text-xs text-neutral-600">Exklusiver Bereich in Raum 21</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
