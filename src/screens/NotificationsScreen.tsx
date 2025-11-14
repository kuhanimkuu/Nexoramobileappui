import { ArrowLeft, Heart, MessageCircle, UserPlus, BarChart3, AtSign } from 'lucide-react';
import { notifications } from '../lib/data';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface NotificationsScreenProps {
  onBack: () => void;
}

export function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="w-5 h-5 text-nexora-blue fill-current" />;
      case 'comment':
        return <MessageCircle className="w-5 h-5 text-accent-purple" />;
      case 'follow':
        return <UserPlus className="w-5 h-5 text-success" />;
      case 'poll':
        return <BarChart3 className="w-5 h-5 text-nexora-blue" />;
      case 'mention':
        return <AtSign className="w-5 h-5 text-accent-purple" />;
      default:
        return null;
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
        <h2>Notifications</h2>
      </header>

      {/* Notifications List */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          {notifications.map((notification) => (
            <button
              key={notification.id}
              className={`w-full px-4 py-4 flex items-start gap-3 border-b border-border-light hover:bg-white transition-colors ${
                !notification.isRead ? 'bg-nexora-blue/5' : ''
              }`}
            >
              <ImageWithFallback
                src={notification.user.avatar}
                alt={notification.user.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />

              <div className="flex-1 text-left min-w-0">
                <p className="text-text-primary">
                  <span className="font-semibold">{notification.user.name}</span>{' '}
                  {notification.content}
                </p>
                <p className="text-text-secondary mt-1">{notification.timestamp}</p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {getIcon(notification.type)}
                {!notification.isRead && (
                  <div className="w-2 h-2 bg-nexora-blue rounded-full" />
                )}
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
