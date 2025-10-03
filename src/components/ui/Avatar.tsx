import { User as UserIcon } from 'lucide-react';
import { UserStatus } from '../../types';

interface AvatarProps {
  name?: string;
  avatar?: string;
  status?: UserStatus;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showStatus?: boolean;
}

export function Avatar({ name, avatar, status, size = 'md', showStatus = false }: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-2xl',
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-neutral-400',
    busy: 'bg-red-500',
    away: 'bg-amber-500',
  };

  const statusSizes = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative inline-block">
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className={`${sizes[size]} rounded-full object-cover`}
        />
      ) : (
        <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-medium`}>
          {name ? getInitials(name) : <UserIcon size={size === 'sm' ? 16 : size === 'md' ? 20 : size === 'lg' ? 24 : 32} />}
        </div>
      )}
      {showStatus && status && (
        <span className={`absolute bottom-0 right-0 ${statusSizes[size]} ${statusColors[status]} rounded-full border-2 border-white`} />
      )}
    </div>
  );
}
