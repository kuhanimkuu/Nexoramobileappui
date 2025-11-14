import { ArrowLeft, User, Lock, Bell, Shield, Moon, LogOut, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface SettingsScreenProps {
  onBack: () => void;
  onLogout: () => void;
}

const settingsGroups = [
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Account Settings', description: 'Update your profile information' },
      { icon: Lock, label: 'Privacy', description: 'Control who can see your content' },
      { icon: Shield, label: 'Security', description: 'Password and authentication' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Notifications', description: 'Manage notification preferences' },
      { icon: Moon, label: 'Dark Mode', description: 'Enable dark theme', hasToggle: true },
    ],
  },
];

export function SettingsScreen({ onBack, onLogout }: SettingsScreenProps) {
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
        <h2>Settings</h2>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          {settingsGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mt-6">
              <h3 className="px-4 mb-3 text-text-secondary">{group.title}</h3>
              <div className="bg-white border-y border-border">
                {group.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={itemIndex}
                      className="w-full px-4 py-4 flex items-center gap-3 hover:bg-soft-white transition-colors border-b border-border last:border-b-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-nexora-blue/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-nexora-blue" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-text-primary">{item.label}</p>
                        <p className="text-text-secondary">{item.description}</p>
                      </div>
                      {item.hasToggle ? (
                        <div className="w-12 h-6 bg-border rounded-full relative">
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
                        </div>
                      ) : (
                        <ChevronRight className="w-5 h-5 text-text-secondary" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Logout */}
          <div className="p-4 mt-6">
            <Button
              onClick={onLogout}
              variant="outline"
              className="w-full border-2 border-error text-error hover:bg-error hover:text-white"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>

          {/* App Info */}
          <div className="px-4 pb-8 text-center">
            <p className="text-text-secondary">Nexora v1.0.0</p>
            <p className="text-text-secondary mt-1">
              Where conversations become communities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
