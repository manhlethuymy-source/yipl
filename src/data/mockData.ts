import { User, Room, Message, Friend, Board, Statistic } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Du',
  mailbox: '*5555#',
  level: 'user',
  status: 'online',
  currentRoom: 0,
};

export const mockUsers: User[] = [
  {
    id: '2',
    name: 'Anna',
    mailbox: '*1234#',
    level: 'user',
    status: 'online',
    currentRoom: 0,
    isSpeaking: true,
  },
  {
    id: '3',
    name: 'Max',
    mailbox: '*5678#',
    level: 'operator',
    status: 'online',
    currentRoom: 3,
  },
  {
    id: '4',
    name: 'Sarah',
    mailbox: '*SARA#',
    level: 'user',
    status: 'busy',
    currentRoom: 4,
  },
  {
    id: '5',
    name: 'Thomas',
    mailbox: '*9999#',
    level: 'user',
    status: 'online',
    currentRoom: 0,
  },
  {
    id: '6',
    name: 'Lisa',
    mailbox: '*LISA#',
    level: 'operator',
    status: 'away',
    currentRoom: 10,
  },
];

export const mockRooms: Room[] = [
  {
    id: 0,
    name: 'Hauptraum',
    participants: [mockUsers[0], mockUsers[3]],
    isLocked: false,
    description: 'Der Hauptchat-Raum für alle',
  },
  {
    id: 3,
    name: 'Privatraum',
    participants: [mockUsers[1]],
    isLocked: false,
    description: 'Privater Raum für vertrauliche Gespräche',
  },
  {
    id: 4,
    name: 'Karussell',
    participants: [mockUsers[2]],
    isLocked: false,
    description: 'Wechselnde Gesprächspartner',
  },
  {
    id: 10,
    name: 'VIP Raum 10',
    participants: [mockUsers[4]],
    isLocked: true,
    chatmaster: mockUsers[4],
    description: 'Geschlossener VIP-Raum',
  },
];

export const mockMessages: Message[] = [
  {
    id: 'm1',
    from: mockUsers[0],
    content: 'Hey, bist du heute Abend online?',
    timestamp: new Date(Date.now() - 3600000),
    isRead: false,
    isPublic: false,
  },
  {
    id: 'm2',
    from: mockUsers[1],
    to: currentUser,
    content: 'Treffen wir uns im Privatraum?',
    timestamp: new Date(Date.now() - 7200000),
    isRead: true,
    isPublic: false,
  },
  {
    id: 'm3',
    from: mockUsers[2],
    content: 'Suche nette Leute zum Quatschen',
    timestamp: new Date(Date.now() - 1800000),
    isRead: false,
    boardId: 'board1',
    isPublic: true,
  },
];

export const mockFriends: Friend[] = [
  {
    user: mockUsers[0],
    addedAt: new Date(Date.now() - 86400000 * 30),
    notifyOnline: true,
  },
  {
    user: mockUsers[1],
    addedAt: new Date(Date.now() - 86400000 * 15),
    notifyOnline: true,
  },
  {
    user: mockUsers[4],
    addedAt: new Date(Date.now() - 86400000 * 7),
    notifyOnline: false,
  },
];

export const mockBoards: Board[] = [
  {
    id: 'board1',
    name: 'Allgemeines',
    description: 'Öffentliches Brett für alle Themen',
    messageCount: 42,
  },
  {
    id: 'board2',
    name: 'Verabredungen',
    description: 'Treffpunkte und Termine',
    messageCount: 18,
  },
  {
    id: 'board3',
    name: 'Hilfe & Support',
    description: 'Fragen und Antworten',
    messageCount: 9,
  },
];

export const mockStatistics: Statistic[] = [
  {
    userId: '2',
    userName: 'Anna',
    callCount: 245,
    popularity: 89,
    lastSeen: new Date(),
  },
  {
    userId: '3',
    userName: 'Max',
    callCount: 198,
    popularity: 76,
    lastSeen: new Date(Date.now() - 3600000),
  },
  {
    userId: '5',
    userName: 'Thomas',
    callCount: 167,
    popularity: 82,
    lastSeen: new Date(),
  },
];
