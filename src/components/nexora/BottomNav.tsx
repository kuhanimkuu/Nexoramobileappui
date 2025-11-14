import { Home, MessageSquare, BarChart3, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'chats' | 'polls' | 'profile';
  onTabChange: (tab: 'home' | 'chats' | 'polls' | 'profile') => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'chats' as const, label: 'Chats', icon: MessageSquare },
    { id: 'polls' as const, label: 'Polls', icon: BarChart3 },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 safe-area-bottom">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex flex-col items-center justify-center gap-1 flex-1 group"
              >
                <Icon
                  className={`w-6 h-6 transition-all ${
                    isActive
                      ? 'text-nexora-blue scale-110'
                      : 'text-text-secondary group-hover:text-nexora-blue'
                  }`}
                />
                <span
                  className={`transition-all ${
                    isActive ? 'text-nexora-blue' : 'text-text-secondary'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
