import { useState } from 'react';
import { ArrowLeft, Phone, Video, MoreVertical, Send, Image as ImageIcon, Smile, Mic } from 'lucide-react';
import { ChatBubble, TypingIndicator } from '../nexora/ChatBubble';
import { mockMessages, mockUsers } from '../../lib/mockData';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ChatScreenProps {
  onBack: () => void;
}

export function ChatScreen({ onBack }: ChatScreenProps) {
  const [messages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping] = useState(true);
  const user = mockUsers[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      console.log('Send message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="fixed inset-0 bg-soft-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border px-4 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-soft-white rounded-full transition-colors -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3 flex-1">
          <div className="relative">
            <ImageWithFallback
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {user.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white" />
            )}
          </div>
          <div>
            <p className="text-text-primary">{user.name}</p>
            <p className="text-success">Online</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
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
        {messages.map(message => (
          <ChatBubble key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
      </main>

      {/* Input */}
      <footer className="bg-white border-t border-border px-4 py-3">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <button
            type="button"
            className="p-2 hover:bg-soft-white rounded-full transition-colors"
          >
            <ImageIcon className="w-5 h-5 text-text-secondary" />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-soft-white rounded-full transition-colors"
          >
            <Smile className="w-5 h-5 text-text-secondary" />
          </button>
          
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 bg-soft-white rounded-full border border-border focus:outline-none focus:border-nexora-blue transition-colors"
          />

          {newMessage.trim() ? (
            <button
              type="submit"
              className="p-2 bg-nexora-blue hover:bg-nexora-blue/90 text-white rounded-full transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="button"
              className="p-2 hover:bg-soft-white rounded-full transition-colors"
            >
              <Mic className="w-5 h-5 text-text-secondary" />
            </button>
          )}
        </form>
      </footer>
    </div>
  );
}
