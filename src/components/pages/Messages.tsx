import { MessageSquare, Send, Mail, MailOpen, Reply, Trash2, Info, Bell, BellOff, Globe } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { mockMessages, mockBoards } from '../../data/mockData';

export function Messages() {
  const unreadCount = mockMessages.filter(m => !m.isRead).length;
  const privateMessages = mockMessages.filter(m => !m.isPublic);
  const publicMessages = mockMessages.filter(m => m.isPublic);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 1) {
      const minutes = Math.floor(diff / (1000 * 60));
      return `vor ${minutes} Min`;
    } else if (hours < 24) {
      return `vor ${hours} Std`;
    } else {
      const days = Math.floor(hours / 24);
      return `vor ${days} Tag${days > 1 ? 'en' : ''}`;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Nachrichten</h1>
          <p className="text-neutral-600 mt-1">Deine Mailbox und öffentliche Bretter</p>
        </div>
        <Button icon={<Send size={20} />}>
          Neue Nachricht
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-600">Posteingang</p>
                <p className="text-xl font-bold text-neutral-900">{mockMessages.length}</p>
              </div>
            </div>
            {unreadCount > 0 && (
              <Badge variant="danger">{unreadCount}</Badge>
            )}
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-600">Öffentliche Bretter</p>
              <p className="text-xl font-bold text-neutral-900">{mockBoards.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-600">Anklopfen</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="success" size="sm">AN</Badge>
                <span className="text-xs text-neutral-500">*43#</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-neutral-900">Private Nachrichten</h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Alle markieren</Button>
              </div>
            </div>

            <div className="space-y-2">
              {privateMessages.length > 0 ? (
                privateMessages.map(message => (
                  <div
                    key={message.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all hover:border-teal-300 ${
                      message.isRead
                        ? 'bg-white border-neutral-200'
                        : 'bg-teal-50 border-teal-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar name={message.from.name} size="md" status={message.from.status} showStatus />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            {message.isRead ? (
                              <MailOpen size={16} className="text-neutral-400" />
                            ) : (
                              <Mail size={16} className="text-teal-600" />
                            )}
                            <p className="font-semibold text-neutral-900">{message.from.name}</p>
                            <Badge variant="default" size="sm">{message.from.mailbox}</Badge>
                          </div>
                          <span className="text-xs text-neutral-500">{formatTime(message.timestamp)}</span>
                        </div>
                        <p className="text-sm text-neutral-700 mb-3">{message.content}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary" icon={<Reply size={14} />}>
                            Antworten
                          </Button>
                          <Button size="sm" variant="ghost" icon={<Info size={14} />}>
                            Details
                          </Button>
                          <Button size="sm" variant="ghost" icon={<Trash2 size={14} />}>
                            Löschen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Mail className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                  <p className="text-neutral-600">Keine privaten Nachrichten</p>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-neutral-900">Öffentliche Bretter</h2>
              <Button variant="ghost" size="sm">Alle anzeigen</Button>
            </div>

            <div className="space-y-2">
              {publicMessages.map(message => (
                <div
                  key={message.id}
                  className="p-4 rounded-lg border border-neutral-200 hover:border-blue-300 bg-white cursor-pointer transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Avatar name={message.from.name} size="md" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Globe size={16} className="text-blue-600" />
                          <p className="font-semibold text-neutral-900">{message.from.name}</p>
                          {message.boardId && (
                            <Badge variant="info" size="sm">
                              {mockBoards.find(b => b.id === message.boardId)?.name}
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-neutral-500">{formatTime(message.timestamp)}</span>
                      </div>
                      <p className="text-sm text-neutral-700 mb-3">{message.content}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" icon={<Reply size={14} />}>
                          Öffentlich antworten
                        </Button>
                        <Button size="sm" variant="ghost" icon={<MessageSquare size={14} />}>
                          Privat antworten
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Nachricht senden</h2>
            <div className="space-y-4">
              <Input
                label="An (Mailbox-Adresse)"
                placeholder="*4444# oder *NAME#"
                icon={<Mail size={18} />}
              />
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Nachricht aufnehmen
                </label>
                <div className="p-6 border-2 border-dashed border-neutral-300 rounded-lg flex flex-col items-center justify-center gap-3 bg-neutral-50">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-teal-600" />
                  </div>
                  <p className="text-sm text-neutral-600 text-center">
                    Sprachnachricht aufnehmen
                  </p>
                  <Button size="sm" icon={<Send size={16} />}>
                    Aufnahme starten
                  </Button>
                </div>
              </div>
              <Button variant="primary" className="w-full" icon={<Send size={18} />}>
                Nachricht senden
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Öffentliche Bretter</h2>
            <div className="space-y-2">
              {mockBoards.map(board => (
                <div
                  key={board.id}
                  className="p-3 rounded-lg border border-neutral-200 hover:bg-neutral-50 cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-neutral-900 text-sm">{board.name}</p>
                    <Badge variant="default" size="sm">{board.messageCount}</Badge>
                  </div>
                  <p className="text-xs text-neutral-600">{board.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-amber-50 border-amber-200">
            <div className="flex items-start gap-3">
              <Bell className="text-amber-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Anklopfen</h3>
                <p className="text-sm text-neutral-700 mb-3">
                  Wenn jemand dir eine Nachricht sendet während du online bist, hörst du ein Anklopfsignal.
                </p>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="secondary" icon={<BellOff size={14} />}>
                    Ausschalten
                  </Button>
                  <span className="text-xs text-neutral-500">*43#</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
