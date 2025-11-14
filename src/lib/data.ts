// Mock data for Nexora app

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  isOnline?: boolean;
  coverImage?: string;
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
  isTyping?: boolean;
}

export interface Message {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
  status?: 'sent' | 'delivered' | 'read';
}

export interface Poll {
  id: string;
  user: User;
  question: string;
  options: PollOption[];
  timestamp: string;
  totalVotes: number;
  hasVoted?: boolean;
  votedOptionId?: string;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'poll' | 'mention';
  user: User;
  content: string;
  timestamp: string;
  isRead: boolean;
  postId?: string;
}

// Current user
export const currentUser: User = {
  id: 'current',
  name: 'Alex Morgan',
  username: '@alexmorgan',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
  bio: 'UX Designer & Developer | Building amazing digital experiences ✨',
  coverImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=300&fit=crop',
};

// Sample users
export const users: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    username: '@sarahchen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    bio: 'Product designer • Coffee addict ☕',
    isOnline: true,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    username: '@marcusj',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    bio: 'Software Engineer @TechCorp',
    isOnline: true,
  },
  {
    id: '3',
    name: 'Emma Williams',
    username: '@emmaw',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    bio: 'Digital artist 🎨 | NFT creator',
    isOnline: false,
  },
  {
    id: '4',
    name: 'David Rodriguez',
    username: '@davidr',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    bio: 'Startup founder | Tech enthusiast',
    isOnline: true,
  },
  {
    id: '5',
    name: 'Lisa Park',
    username: '@lisapark',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    bio: 'Content creator • Photographer',
    isOnline: false,
  },
];

// Sample posts
export const posts: Post[] = [
  {
    id: '1',
    user: users[0],
    content: 'Just shipped a major redesign of our dashboard! 🚀 The new interface is cleaner, faster, and more intuitive. Can\'t wait to hear what users think!',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    timestamp: '2h ago',
    likes: 342,
    comments: 28,
    shares: 15,
    isLiked: false,
  },
  {
    id: '2',
    user: users[1],
    content: 'Hot take: The best code is the code you don\'t write. Sometimes the simplest solution is just removing unnecessary complexity. Less is more. 💡',
    timestamp: '4h ago',
    likes: 891,
    comments: 156,
    shares: 67,
    isLiked: true,
  },
  {
    id: '3',
    user: users[2],
    content: 'New artwork drop! 🎨✨ Working with light and shadows to create depth in digital space. What do you think?',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=500&fit=crop',
    timestamp: '8h ago',
    likes: 567,
    comments: 89,
    shares: 34,
    isLiked: false,
  },
  {
    id: '4',
    user: users[3],
    content: 'Building in public is one of the best decisions I made. The feedback, support, and connections have been incredible. If you\'re thinking about it, just start! 🌟',
    timestamp: '1d ago',
    likes: 1234,
    comments: 203,
    shares: 89,
    isLiked: true,
  },
  {
    id: '5',
    user: users[4],
    content: 'Golden hour magic at the coast 🌅 Sometimes you just need to step away from the screen and reconnect with nature.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop',
    timestamp: '2d ago',
    likes: 789,
    comments: 45,
    shares: 23,
    isLiked: false,
  },
];

// Sample chats
export const chats: Chat[] = [
  {
    id: '1',
    user: users[0],
    lastMessage: 'That sounds great! Let\'s sync up tomorrow',
    timestamp: 'Just now',
    unread: 2,
    isTyping: false,
  },
  {
    id: '2',
    user: users[1],
    lastMessage: 'Thanks for your help with the code review!',
    timestamp: '5m ago',
    unread: 0,
  },
  {
    id: '3',
    user: users[2],
    lastMessage: 'Check out my latest artwork 🎨',
    timestamp: '1h ago',
    unread: 1,
  },
  {
    id: '4',
    user: users[3],
    lastMessage: 'Can you send me the project files?',
    timestamp: 'Yesterday',
    unread: 0,
  },
  {
    id: '5',
    user: users[4],
    lastMessage: 'The photos turned out amazing!',
    timestamp: '2d ago',
    unread: 0,
  },
];

// Sample messages
export const messages: Message[] = [
  {
    id: '1',
    text: 'Hey! How are you doing?',
    timestamp: '10:24 AM',
    isSent: false,
    status: 'read',
  },
  {
    id: '2',
    text: 'I\'m great! Just finished a big project 🎉',
    timestamp: '10:26 AM',
    isSent: true,
    status: 'read',
  },
  {
    id: '3',
    text: 'That\'s awesome! What was it about?',
    timestamp: '10:27 AM',
    isSent: false,
    status: 'read',
  },
  {
    id: '4',
    text: 'A complete redesign of our mobile app. Took weeks but totally worth it!',
    timestamp: '10:28 AM',
    isSent: true,
    status: 'read',
  },
  {
    id: '5',
    text: 'I\'d love to see it when you can share!',
    timestamp: '10:30 AM',
    isSent: false,
    status: 'read',
  },
  {
    id: '6',
    text: 'That sounds great! Let\'s sync up tomorrow',
    timestamp: 'Just now',
    isSent: false,
    status: 'delivered',
  },
];

// Sample polls
export const polls: Poll[] = [
  {
    id: '1',
    user: users[0],
    question: 'What\'s your preferred work setup in 2025?',
    options: [
      { id: '1a', text: 'Fully Remote', votes: 3420 },
      { id: '1b', text: 'Hybrid (2-3 days office)', votes: 2156 },
      { id: '1c', text: 'Full-time Office', votes: 890 },
      { id: '1d', text: 'Digital Nomad', votes: 1234 },
    ],
    timestamp: '3h ago',
    totalVotes: 7700,
    hasVoted: false,
  },
  {
    id: '2',
    user: users[1],
    question: 'Which programming language should I learn next?',
    options: [
      { id: '2a', text: 'Rust', votes: 1245 },
      { id: '2b', text: 'Go', votes: 987 },
      { id: '2c', text: 'Python', votes: 2341 },
      { id: '2d', text: 'TypeScript', votes: 1876 },
    ],
    timestamp: '1d ago',
    totalVotes: 6449,
    hasVoted: true,
    votedOptionId: '2c',
  },
  {
    id: '3',
    user: users[3],
    question: 'Best time for deep focus work?',
    options: [
      { id: '3a', text: 'Early Morning (5-9 AM)', votes: 2100 },
      { id: '3b', text: 'Mid Morning (9-12 PM)', votes: 1580 },
      { id: '3c', text: 'Afternoon (12-5 PM)', votes: 890 },
      { id: '3d', text: 'Evening/Night (5 PM+)', votes: 1430 },
    ],
    timestamp: '2d ago',
    totalVotes: 6000,
    hasVoted: false,
  },
];

// Sample notifications
export const notifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    user: users[0],
    content: 'liked your post',
    timestamp: '2m ago',
    isRead: false,
    postId: '1',
  },
  {
    id: '2',
    type: 'comment',
    user: users[1],
    content: 'commented: "This is incredible work! 🔥"',
    timestamp: '15m ago',
    isRead: false,
    postId: '1',
  },
  {
    id: '3',
    type: 'follow',
    user: users[2],
    content: 'started following you',
    timestamp: '1h ago',
    isRead: true,
  },
  {
    id: '4',
    type: 'poll',
    user: users[3],
    content: 'created a new poll you might like',
    timestamp: '3h ago',
    isRead: true,
  },
  {
    id: '5',
    type: 'mention',
    user: users[4],
    content: 'mentioned you in a post',
    timestamp: '5h ago',
    isRead: true,
    postId: '5',
  },
];
