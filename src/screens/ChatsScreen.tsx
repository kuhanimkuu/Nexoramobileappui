import { Search, MessageCirclePlus } from 'lucide-react';
import { ChatItem } from '../components/ChatItem';
import { FAB } from '../components/FAB';
import { chats } from '../lib/data';

interface ChatsScreenProps {
  onChatSelect: (chatId: string) => void;
  onNewChat: () => void;
}

export function ChatsScreen({ onChatSelect, onNewChat }: ChatsScreenProps) {
  return (
    <div className="min-h-screen bg-soft-white pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-border-light z-40">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h2 className="mb-3">Chats</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full h-11 pl-10 pr-4 bg-soft-white rounded-xl border border-border-light focus:outline-none focus:border-nexora-blue transition-colors"
            />
          </div>
        </div>
      </header>

      {/* Chats List */}
      <main className="max-w-2xl mx-auto divide-y divide-border-light">
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} onClick={() => onChatSelect(chat.id)} />
        ))}
      </main>

      {/* FAB */}
      <FAB onClick={onNewChat} icon={<MessageCirclePlus className="w-7 h-7" />} />
    </div>
  );
}
