export type UserLevel = 'guest' | 'user' | 'operator';

export type UserStatus = 'online' | 'offline' | 'busy' | 'away';

export interface User {
  id: string;
  name: string;
  mailbox: string;
  avatar?: string;
  level: UserLevel;
  status: UserStatus;
  currentRoom?: number;
  isSpeaking?: boolean;
  isMuted?: boolean;
}

export interface Room {
  id: number;
  name: string;
  participants: User[];
  isLocked: boolean;
  chatmaster?: User;
  jingle?: string;
  description?: string;
}

export interface Message {
  id: string;
  from: User;
  to?: User;
  content: string;
  timestamp: Date;
  isRead: boolean;
  boardId?: string;
  parentId?: string;
  isPublic: boolean;
}

export interface Board {
  id: string;
  name: string;
  description: string;
  messageCount: number;
}

export interface Friend {
  user: User;
  addedAt: Date;
  notifyOnline: boolean;
}

export interface Statistic {
  userId: string;
  userName: string;
  callCount: number;
  popularity: number;
  lastSeen: Date;
}
