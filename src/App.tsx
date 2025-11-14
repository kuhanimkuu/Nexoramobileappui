import { useState } from 'react';
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ChatsScreen } from './screens/ChatsScreen';
import { ChatDetailScreen } from './screens/ChatDetailScreen';
import { PollsScreen } from './screens/PollsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { CreatePostScreen } from './screens/CreatePostScreen';
import { CreatePollScreen } from './screens/CreatePollScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { BottomNav } from './components/BottomNav';

type Screen =
  | 'splash'
  | 'onboarding'
  | 'auth'
  | 'home'
  | 'chats'
  | 'chatDetail'
  | 'polls'
  | 'profile'
  | 'notifications'
  | 'createPost'
  | 'createPoll'
  | 'settings';

type MainTab = 'home' | 'chats' | 'polls' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [activeTab, setActiveTab] = useState<MainTab>('home');
  const [previousScreen, setPreviousScreen] = useState<Screen>('home');

  const navigate = (screen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    setCurrentScreen(previousScreen);
  };

  const handleTabChange = (tab: MainTab) => {
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  const showBottomNav = ['home', 'chats', 'polls', 'profile'].includes(currentScreen);

  return (
    <div className="relative">
      {/* Screens */}
      {currentScreen === 'splash' && (
        <SplashScreen onComplete={() => navigate('onboarding')} />
      )}

      {currentScreen === 'onboarding' && (
        <OnboardingScreen
          onComplete={() => navigate('auth')}
          onSignIn={() => navigate('auth')}
        />
      )}

      {currentScreen === 'auth' && <AuthScreen onAuth={() => navigate('home')} />}

      {currentScreen === 'home' && (
        <HomeScreen
          onCreatePost={() => navigate('createPost')}
          onNotifications={() => navigate('notifications')}
        />
      )}

      {currentScreen === 'chats' && (
        <ChatsScreen
          onChatSelect={() => navigate('chatDetail')}
          onNewChat={() => navigate('chatDetail')}
        />
      )}

      {currentScreen === 'chatDetail' && <ChatDetailScreen onBack={goBack} />}

      {currentScreen === 'polls' && (
        <PollsScreen onCreatePoll={() => navigate('createPoll')} />
      )}

      {currentScreen === 'profile' && (
        <ProfileScreen onSettings={() => navigate('settings')} />
      )}

      {currentScreen === 'notifications' && <NotificationsScreen onBack={goBack} />}

      {currentScreen === 'createPost' && (
        <CreatePostScreen
          onBack={goBack}
          onPost={(content, image) => {
            console.log('New post:', content, image);
          }}
        />
      )}

      {currentScreen === 'createPoll' && (
        <CreatePollScreen
          onBack={goBack}
          onCreatePoll={(question, options) => {
            console.log('New poll:', question, options);
          }}
        />
      )}

      {currentScreen === 'settings' && (
        <SettingsScreen onBack={goBack} onLogout={() => navigate('auth')} />
      )}

      {/* Bottom Navigation */}
      {showBottomNav && <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />}
    </div>
  );
}
