export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  isOnline?: boolean;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
}

export interface Chat {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unread?: number;
}

export interface Message {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
  isRead?: boolean;
}

export interface Poll {
  id: string;
  user: User;
  question: string;
  options: PollOption[];
  timestamp: string;
  totalVotes: number;
  hasVoted?: boolean;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'poll';
  user: User;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    username: '@sarahj',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    bio: 'Digital creator | Tech enthusiast | Coffee lover ☕',
    isOnline: true,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    username: '@marcusc',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    bio: 'Software engineer at TechCorp',
    isOnline: true,
  },
  {
    id: '3',
    name: 'Emma Wilson',
    username: '@emmaw',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    bio: 'Designer & artist 🎨',
    isOnline: false,
  },
  {
    id: '4',
    name: 'Alex Rivera',
    username: '@alexr',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    bio: 'Product manager | Startup founder',
    isOnline: true,
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    content: 'Just launched my new portfolio website! 🚀 Check it out and let me know what you think. Built with React and some amazing animations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    timestamp: '2h ago',
    likes: 234,
    comments: 45,
    shares: 12,
    isLiked: false,
  },
  {
    id: '2',
    user: mockUsers[1],
    content: 'Hot take: The future of software development is not just about AI writing code, but about AI understanding context and user intent. What do you think?',
    timestamp: '4h ago',
    likes: 567,
    comments: 89,
    shares: 34,
    isLiked: true,
  },
  {
    id: '3',
    user: mockUsers[2],
    content: 'Working on some new illustrations for a client project. The creative process is both challenging and rewarding! 🎨✨',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    timestamp: '6h ago',
    likes: 189,
    comments: 23,
    shares: 8,
    isLiked: false,
  },
  {
    id: '4',
    user: mockUsers[3],
    content: 'Reminder: Your product is only as good as the problem it solves. Focus on the why before the how.',
    timestamp: '1d ago',
    likes: 421,
    comments: 67,
    shares: 56,
    isLiked: true,
  },
];

export const mockChats: Chat[] = [
  {
    id: '1',
    user: mockUsers[0],
    lastMessage: "Hey! Did you see the new design updates?",
    timestamp: '10:45 AM',
    unread: 2,
  },
  {
    id: '2',
    user: mockUsers[1],
    lastMessage: "Thanks for the feedback on the project!",
    timestamp: 'Yesterday',
    unread: 0,
  },
  {
    id: '3',
    user: mockUsers[2],
    lastMessage: "Let's catch up tomorrow for coffee ☕",
    timestamp: 'Yesterday',
    unread: 0,
  },
  {
    id: '4',
    user: mockUsers[3],
    lastMessage: "I'll send you the documents soon",
    timestamp: '2 days ago',
    unread: 1,
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    text: 'Hey! How are you?',
    timestamp: '10:30 AM',
    isSent: false,
    isRead: true,
  },
  {
    id: '2',
    text: "I'm great! Just finished working on the new feature.",
    timestamp: '10:32 AM',
    isSent: true,
    isRead: true,
  },
  {
    id: '3',
    text: 'That sounds awesome! Can you show me?',
    timestamp: '10:33 AM',
    isSent: false,
    isRead: true,
  },
  {
    id: '4',
    text: 'Sure! Let me send you some screenshots.',
    timestamp: '10:35 AM',
    isSent: true,
    isRead: true,
  },
  {
    id: '5',
    text: 'Hey! Did you see the new design updates?',
    timestamp: '10:45 AM',
    isSent: false,
    isRead: false,
  },
];

export const mockPolls: Poll[] = [
  {
    id: '1',
    user: mockUsers[0],
    question: 'What\'s your preferred programming language in 2025?',
    options: [
      { id: '1', text: 'JavaScript/TypeScript', votes: 1240, percentage: 45 },
      { id: '2', text: 'Python', votes: 856, percentage: 31 },
      { id: '3', text: 'Rust', votes: 412, percentage: 15 },
      { id: '4', text: 'Go', votes: 248, percentage: 9 },
    ],
    timestamp: '5h ago',
    totalVotes: 2756,
    hasVoted: false,
  },
  {
    id: '2',
    user: mockUsers[1],
    question: 'Remote work vs Office: What\'s your preference?',
    options: [
      { id: '1', text: 'Fully Remote', votes: 2100, percentage: 60 },
      { id: '2', text: 'Hybrid (2-3 days)', votes: 1050, percentage: 30 },
      { id: '3', text: 'Full Time Office', votes: 350, percentage: 10 },
    ],
    timestamp: '1d ago',
    totalVotes: 3500,
    hasVoted: true,
  },
  {
    id: '3',
    user: mockUsers[3],
    question: 'Best time for creative work?',
    options: [
      { id: '1', text: 'Early Morning', votes: 680, percentage: 40 },
      { id: '2', text: 'Afternoon', votes: 340, percentage: 20 },
      { id: '3', text: 'Evening/Night', votes: 680, percentage: 40 },
    ],
    timestamp: '2d ago',
    totalVotes: 1700,
    hasVoted: false,
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    user: mockUsers[0],
    content: 'liked your post',
    timestamp: '5m ago',
    isRead: false,
  },
  {
    id: '2',
    type: 'comment',
    user: mockUsers[1],
    content: 'commented: "This is amazing work!"',
    timestamp: '1h ago',
    isRead: false,
  },
  {
    id: '3',
    type: 'follow',
    user: mockUsers[2],
    content: 'started following you',
    timestamp: '3h ago',
    isRead: true,
  },
  {
    id: '4',
    type: 'poll',
    user: mockUsers[3],
    content: 'created a new poll',
    timestamp: '5h ago',
    isRead: true,
  },
];
