import { Home, MessageSquare, BarChart3, User } from 'lucide-react';

type Tab = 'home' | 'chats' | 'polls' | 'profile';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'chats' as const, label: 'Chats', icon: MessageSquare },
    { id: 'polls' as const, label: 'Polls', icon: BarChart3 },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-light z-50">
      <div className="max-w-2xl mx-auto px-2">
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex flex-col items-center justify-center gap-1 flex-1 group relative"
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-nexora-blue to-accent-purple rounded-full" />
                )}

                <Icon
                  className={`w-6 h-6 transition-all ${
                    isActive
                      ? 'text-nexora-blue scale-110'
                      : 'text-text-secondary group-hover:text-nexora-blue group-hover:scale-105'
                  }`}
                />
                <span
                  className={`transition-all ${
                    isActive ? 'text-nexora-blue font-medium' : 'text-text-secondary'
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
