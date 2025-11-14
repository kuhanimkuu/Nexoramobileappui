import { Message } from '../../lib/mockData';

interface ChatBubbleProps {
  message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  return (
    <div className={`flex mb-3 ${message.isSent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl ${
          message.isSent
            ? 'bg-chat-sent text-white rounded-br-sm'
            : 'bg-chat-received text-text-primary rounded-bl-sm'
        }`}
      >
        <p className="break-words">{message.text}</p>
        <p
          className={`mt-1 ${
            message.isSent ? 'text-white/70' : 'text-text-secondary'
          }`}
        >
          {message.timestamp}
        </p>
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="bg-chat-received px-4 py-3 rounded-2xl rounded-bl-sm">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
