import { ArrowLeft, User, Lock, Bell, Shield, Moon, LogOut, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTheme } from '../contexts/ThemeContext';

interface SettingsScreenProps {
  onBack: () => void;
  onLogout: () => void;
}

const settingsGroups = [
  {
    title: 'Account',
    items: [
      {
        icon: User,
        label: 'Account Settings',
        description: 'Manage your profile and personal info',
        color: 'nexora-blue',
      },
      {
        icon: Lock,
        label: 'Privacy',
        description: 'Control who sees your content',
        color: 'accent-purple',
      },
      {
        icon: Shield,
        label: 'Security',
        description: 'Password and authentication',
        color: 'success',
      },
    ],
  },
  {
    title: 'Preferences',
    items: [
      {
        icon: Bell,
        label: 'Notifications',
        description: 'Configure notification settings',
        color: 'warning',
      },
    ],
  },
];

export function SettingsScreen({ onBack, onLogout }: SettingsScreenProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed inset-0 bg-soft-white dark:bg-dark-bg flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-dark-surface border-b border-border-light dark:border-dark-border px-4 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-soft-white dark:hover:bg-dark-surface-elevated rounded-full transition-colors -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2>Settings</h2>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto pb-6">
          {settingsGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mt-6">
              <h3 className="px-4 mb-3 text-text-secondary dark:text-dark-text-secondary">{group.title}</h3>
              <div className="bg-white dark:bg-dark-surface border-y border-border-light dark:border-dark-border divide-y divide-border-light dark:divide-dark-border">
                {group.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={itemIndex}
                      className="w-full px-4 py-4 flex items-center gap-3 hover:bg-soft-white dark:hover:bg-dark-surface-elevated transition-colors"
                    >
                      <div className={`w-11 h-11 rounded-xl bg-${item.color}/10 flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 text-${item.color}`} />
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <p className="font-semibold text-text-primary dark:text-dark-text-primary">{item.label}</p>
                        <p className="text-text-secondary dark:text-dark-text-secondary">{item.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-text-secondary dark:text-dark-text-secondary flex-shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Dark Mode Toggle */}
          <div className="mt-6">
            <h3 className="px-4 mb-3 text-text-secondary dark:text-dark-text-secondary">Appearance</h3>
            <div className="bg-white dark:bg-dark-surface border-y border-border-light dark:border-dark-border">
              <button
                onClick={toggleTheme}
                className="w-full px-4 py-4 flex items-center gap-3 hover:bg-soft-white dark:hover:bg-dark-surface-elevated transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-deep-indigo/10 dark:bg-nexora-blue/10 flex items-center justify-center flex-shrink-0">
                  <Moon className="w-5 h-5 text-deep-indigo dark:text-nexora-blue" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="font-semibold text-text-primary dark:text-dark-text-primary">Dark Mode</p>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                  </p>
                </div>
                <div
                  className={`relative w-12 h-6 rounded-full flex-shrink-0 transition-colors ${
                    theme === 'dark' ? 'bg-nexora-blue' : 'bg-border-light dark:bg-dark-border'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                      theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="px-4 mt-8">
            <Button
              onClick={onLogout}
              variant="outline"
              className="w-full h-12 border-2 border-error text-error hover:bg-error hover:text-white dark:border-error dark:hover:bg-error"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>

          {/* App Info */}
          <div className="px-4 mt-6 text-center">
            <p className="text-text-muted dark:text-dark-text-muted">Nexora v1.0.0</p>
            <p className="text-text-muted dark:text-dark-text-muted mt-1">
              Where conversations become communities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}