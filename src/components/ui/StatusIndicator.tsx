import { UserStatus } from '../../types';

interface StatusIndicatorProps {
  status: UserStatus;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function StatusIndicator({ status, size = 'md', showLabel = false }: StatusIndicatorProps) {
  const colors = {
    online: 'bg-green-500',
    offline: 'bg-neutral-400',
    busy: 'bg-red-500',
    away: 'bg-amber-500',
  };

  const labels = {
    online: 'Online',
    offline: 'Offline',
    busy: 'Beschäftigt',
    away: 'Abwesend',
  };

  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
  };

  return (
    <div className="inline-flex items-center gap-1.5">
      <span className={`${sizes[size]} ${colors[status]} rounded-full`} />
      {showLabel && <span className="text-sm text-neutral-600">{labels[status]}</span>}
    </div>
  );
}
