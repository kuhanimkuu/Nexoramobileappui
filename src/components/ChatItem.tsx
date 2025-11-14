import { Chat } from '../lib/data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ChatItemProps {
  chat: Chat;
  onClick: () => void;
}

export function ChatItem({ chat, onClick }: ChatItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white transition-colors"
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <ImageWithFallback
          src={chat.user.avatar}
          alt={chat.user.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        {chat.user.isOnline && (
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-white" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-text-primary truncate">{chat.user.name}</p>
          <span className="text-text-secondary flex-shrink-0 ml-2">{chat.timestamp}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-text-secondary truncate flex-1">
            {chat.isTyping ? (
              <span className="text-nexora-blue italic">typing...</span>
            ) : (
              chat.lastMessage
            )}
          </p>
          {chat.unread && chat.unread > 0 && (
            <span className="flex-shrink-0 px-2 py-0.5 bg-nexora-blue text-white rounded-full min-w-[24px] text-center">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
