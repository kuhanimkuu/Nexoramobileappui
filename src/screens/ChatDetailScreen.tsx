import { useState } from 'react';
import { ArrowLeft, Phone, Video, MoreVertical, Send, Image, Smile, Mic } from 'lucide-react';
import { MessageBubble, TypingIndicator } from '../components/MessageBubble';
import { messages, users } from '../lib/data';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ChatDetailScreenProps {
  onBack: () => void;
}

export function ChatDetailScreen({ onBack }: ChatDetailScreenProps) {
  const [messageText, setMessageText] = useState('');
  const [isTyping] = useState(true);
  const user = users[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      console.log('Send:', messageText);
      setMessageText('');
    }
  };

  return (
    <div className="fixed inset-0 bg-soft-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border-light px-4 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-soft-white rounded-full transition-colors -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="relative flex-shrink-0">
            <ImageWithFallback
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {user.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-text-primary truncate">{user.name}</p>
            <p className="text-success">Online</p>
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
            <Phone className="w-5 h-5 text-text-secondary" />
          </button>
          <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
            <Video className="w-5 h-5 text-text-secondary" />
          </button>
          <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
            <MoreVertical className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-2xl mx-auto">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>
      </main>

      {/* Input */}
      <footer className="bg-white border-t border-border-light px-4 py-3">
        <form onSubmit={handleSend} className="flex items-end gap-2 max-w-2xl mx-auto">
          <button
            type="button"
            className="p-2 hover:bg-soft-white rounded-full transition-colors flex-shrink-0"
          >
            <Image className="w-5 h-5 text-text-secondary" />
          </button>

          <div className="flex-1 flex items-end gap-2 bg-soft-white rounded-2xl px-4 py-2 border border-border-light focus-within:border-nexora-blue transition-colors">
            <button
              type="button"
              className="p-1 hover:bg-white rounded-full transition-colors flex-shrink-0"
            >
              <Smile className="w-5 h-5 text-text-secondary" />
            </button>
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent focus:outline-none text-text-primary py-1"
            />
          </div>

          {messageText.trim() ? (
            <button
              type="submit"
              className="p-3 bg-nexora-blue hover:bg-nexora-blue/90 text-white rounded-full transition-colors flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="button"
              className="p-3 hover:bg-soft-white rounded-full transition-colors flex-shrink-0"
            >
              <Mic className="w-5 h-5 text-text-secondary" />
            </button>
          )}
        </form>
      </footer>
    </div>
  );
}
