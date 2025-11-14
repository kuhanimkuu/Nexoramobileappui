import { Check, CheckCheck } from 'lucide-react';
import { Message } from '../lib/data';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className={`flex mb-2 ${message.isSent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl ${
          message.isSent
            ? 'bg-chat-sent text-white rounded-br-md'
            : 'bg-chat-received text-text-primary rounded-bl-md'
        }`}
      >
        <p className="break-words">{message.text}</p>
        <div className={`flex items-center justify-end gap-1 mt-1 ${message.isSent ? 'text-white/70' : 'text-text-secondary'}`}>
          <span>{message.timestamp}</span>
          {message.isSent && message.status && (
            <span>
              {message.status === 'sent' && <Check className="w-4 h-4" />}
              {message.status === 'delivered' && <CheckCheck className="w-4 h-4" />}
              {message.status === 'read' && <CheckCheck className="w-4 h-4 text-blue-300" />}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex justify-start mb-2">
      <div className="bg-chat-received px-4 py-3 rounded-2xl rounded-bl-md">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
