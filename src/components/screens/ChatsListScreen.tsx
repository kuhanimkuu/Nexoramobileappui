import { Search, MessageCirclePlus } from 'lucide-react';
import { FloatingActionButton } from '../nexora/FloatingActionButton';
import { mockChats } from '../../lib/mockData';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ChatsListScreenProps {
  onChatSelect: (chatId: string) => void;
  onNewChat: () => void;
}

export function ChatsListScreen({ onChatSelect, onNewChat }: ChatsListScreenProps) {
  return (
    <div className="min-h-screen bg-soft-white pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-border z-40">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <h2 className="mb-3">Chats</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full pl-10 pr-4 py-2 bg-soft-white rounded-lg border border-border focus:outline-none focus:border-nexora-blue transition-colors"
            />
          </div>
        </div>
      </header>

      {/* Chats List */}
      <main className="max-w-2xl mx-auto">
        {mockChats.map(chat => (
          <button
            key={chat.id}
            onClick={() => onChatSelect(chat.id)}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white transition-colors border-b border-border"
          >
            <div className="relative">
              <ImageWithFallback
                src={chat.user.avatar}
                alt={chat.user.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              {chat.user.isOnline && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-white" />
              )}
            </div>
            
            <div className="flex-1 text-left">
              <div className="flex items-center justify-between mb-1">
                <p className="text-text-primary">{chat.user.name}</p>
                <p className="text-text-secondary">{chat.timestamp}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-text-secondary line-clamp-1">{chat.lastMessage}</p>
                {chat.unread && chat.unread > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-nexora-blue text-white rounded-full min-w-[20px] text-center">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </main>

      {/* FAB */}
      <FloatingActionButton
        onClick={onNewChat}
        icon={<MessageCirclePlus className="w-6 h-6" />}
      />
    </div>
  );
}
