import { User, Mic, Mail, Hash, Lock, Bell, Shield, Volume2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { currentUser } from '../../data/mockData';

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Einstellungen</h1>
        <p className="text-neutral-600 mt-1">Persönliche Einstellungen verwalten</p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6">Profil</h2>
        <div className="flex items-start gap-6 mb-6">
          <Avatar name={currentUser.name} size="xl" status={currentUser.status} showStatus />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-neutral-900 mb-1">{currentUser.name}</h3>
            <p className="text-sm text-neutral-600 mb-2">{currentUser.mailbox}</p>
            <div className="flex gap-2">
              <Badge variant={currentUser.level === 'operator' ? 'warning' : 'default'}>
                {currentUser.level === 'operator' ? 'Operator' : currentUser.level === 'user' ? 'Benutzer' : 'Gast'}
              </Badge>
              <Badge variant="success">Online</Badge>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <Mic className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">Namen aufnehmen</h2>
              <p className="text-sm text-neutral-600">Taste 1 in persönlichen Einstellungen</p>
            </div>
          </div>

          <div className="p-6 border-2 border-dashed border-neutral-300 rounded-lg flex flex-col items-center justify-center gap-3 bg-neutral-50 mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Mic className="w-8 h-8 text-teal-600" />
            </div>
            <p className="text-sm text-neutral-600 text-center">
              Sprich deinen Namen ein, damit andere dich erkennen können
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">
                <Volume2 size={16} className="mr-1" />
                Abspielen
              </Button>
              <Button size="sm" variant="primary">
                <Mic size={16} className="mr-1" />
                Aufnehmen
              </Button>
            </div>
          </div>

          <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded-lg">
            Tipp: Dein aufgenommener Name wird anderen Nutzern vorgespielt, wenn sie dich finden oder anrufen.
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">Mailbox-Begrüßung</h2>
              <p className="text-sm text-neutral-600">Taste 2 in persönlichen Einstellungen</p>
            </div>
          </div>

          <div className="p-6 border-2 border-dashed border-neutral-300 rounded-lg flex flex-col items-center justify-center gap-3 bg-neutral-50 mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-sm text-neutral-600 text-center">
              Zeichne deine persönliche Mailbox-Begrüßung (OGM) auf
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">
                <Volume2 size={16} className="mr-1" />
                Abspielen
              </Button>
              <Button size="sm" variant="primary">
                <Mic size={16} className="mr-1" />
                Aufnehmen
              </Button>
            </div>
          </div>

          <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded-lg">
            Tipp: Diese Begrüßung hören Anrufer, wenn sie auf deine Mailbox sprechen.
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Volume2 className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">Pool-Login</h2>
              <p className="text-sm text-neutral-600">Taste 3 in persönlichen Einstellungen</p>
            </div>
          </div>

          <div className="p-6 border-2 border-dashed border-neutral-300 rounded-lg flex flex-col items-center justify-center gap-3 bg-neutral-50 mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Volume2 className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-sm text-neutral-600 text-center">
              Zeichne ein kurzes Audio auf, das beim Betreten eines Pools abgespielt wird
            </p>
            <Button size="sm" variant="primary">
              <Mic size={16} className="mr-1" />
              Aufnehmen
            </Button>
          </div>

          <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded-lg">
            Hinweis: Wird maximal einmal je Pool und Minute abgespielt.
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Hash className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">Mailbox-Adresse</h2>
              <p className="text-sm text-neutral-600">Taste 8 in persönlichen Einstellungen</p>
            </div>
          </div>

          <div className="space-y-4">
            <Input
              label="Aktuelle Adresse"
              value={currentUser.mailbox}
              disabled
            />
            <Input
              label="Neue Adresse festlegen"
              placeholder="z.B. *55555# oder *NAME#"
              icon={<Hash size={18} />}
            />
            <Button variant="primary" className="w-full">
              Adresse ändern
            </Button>
          </div>

          <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded-lg mt-4">
            Tipp: Du kannst entweder eine Zahlenfolge oder einen Namen (Vanity) verwenden.
            Die Adresse muss mindestens 4 Zeichen lang sein.
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Lock className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">Zugangscode ändern</h2>
            <p className="text-sm text-neutral-600">Taste 7 in persönlichen Einstellungen</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Alter Code"
            type="password"
            placeholder="8-stellig"
            icon={<Lock size={18} />}
          />
          <Input
            label="Neuer Code"
            type="password"
            placeholder="8-stellig"
            icon={<Lock size={18} />}
          />
          <Input
            label="Code wiederholen"
            type="password"
            placeholder="8-stellig"
            icon={<Lock size={18} />}
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded-lg flex-1 mr-4">
            Format: *ALT*NEU*NEU# - Der Code muss genau 8 Stellen lang sein
          </div>
          <Button variant="danger">
            Code ändern
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-neutral-900 mb-6">Benachrichtigungen</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-neutral-200">
            <div className="flex items-center gap-3">
              <Bell className="text-amber-600" size={20} />
              <div>
                <p className="font-medium text-neutral-900">Anklopfen</p>
                <p className="text-sm text-neutral-600">Bei neuen Nachrichten benachrichtigen</p>
              </div>
            </div>
            <Badge variant="success">AN</Badge>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-neutral-200">
            <div className="flex items-center gap-3">
              <Shield className="text-teal-600" size={20} />
              <div>
                <p className="font-medium text-neutral-900">Buddy-Modus</p>
                <p className="text-sm text-neutral-600">Freunde über Online-Status informieren</p>
              </div>
            </div>
            <Badge variant="success">AN</Badge>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-neutral-50">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Tastenkombinationen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between items-center p-2 bg-white rounded">
            <span className="text-neutral-700">Namen aufnehmen</span>
            <Badge variant="default" size="sm">1</Badge>
          </div>
          <div className="flex justify-between items-center p-2 bg-white rounded">
            <span className="text-neutral-700">Mailbox-Begrüßung</span>
            <Badge variant="default" size="sm">2</Badge>
          </div>
          <div className="flex justify-between items-center p-2 bg-white rounded">
            <span className="text-neutral-700">Pool-Login</span>
            <Badge variant="default" size="sm">3</Badge>
          </div>
          <div className="flex justify-between items-center p-2 bg-white rounded">
            <span className="text-neutral-700">PIN ändern</span>
            <Badge variant="default" size="sm">7</Badge>
          </div>
          <div className="flex justify-between items-center p-2 bg-white rounded">
            <span className="text-neutral-700">Mailbox-Adresse</span>
            <Badge variant="default" size="sm">8</Badge>
          </div>
          <div className="flex justify-between items-center p-2 bg-white rounded">
            <span className="text-neutral-700">Zurück</span>
            <Badge variant="default" size="sm">0</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}
