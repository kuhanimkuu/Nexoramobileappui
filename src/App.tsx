import { useState } from 'react';
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ChatsScreen } from './screens/ChatsScreen';
import { ChatDetailScreen } from './screens/ChatDetailScreen';
import { CommunitiesScreen } from './screens/CommunitiesScreen';
import { CommunityDetailScreen } from './screens/CommunityDetailScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { PostDetailScreen } from './screens/PostDetailScreen';
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
  | 'communities'
  | 'communityDetail'
  | 'profile'
  | 'notifications'
  | 'postDetail'
  | 'createPost'
  | 'createPoll'
  | 'settings';

type MainTab = 'home' | 'chats' | 'communities' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [activeTab, setActiveTab] = useState<MainTab>('home');
  const [previousScreen, setPreviousScreen] = useState<Screen>('home');
  const [selectedPostId, setSelectedPostId] = useState<string>('1');
  const [selectedCommunityId, setSelectedCommunityId] = useState<string>('1');

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

  const handlePostDetail = (postId: string) => {
    setSelectedPostId(postId);
    navigate('postDetail');
  };

  const handleCommunitySelect = (communityId: string) => {
    setSelectedCommunityId(communityId);
    navigate('communityDetail');
  };

  const showBottomNav = ['home', 'chats', 'communities', 'profile'].includes(currentScreen);

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
          onPostDetail={handlePostDetail}
        />
      )}

      {currentScreen === 'chats' && (
        <ChatsScreen
          onChatSelect={() => navigate('chatDetail')}
          onNewChat={() => navigate('chatDetail')}
        />
      )}

      {currentScreen === 'chatDetail' && <ChatDetailScreen onBack={goBack} />}

      {currentScreen === 'communities' && (
        <CommunitiesScreen
          onCommunitySelect={handleCommunitySelect}
          onCreateCommunity={() => console.log('Create community')}
        />
      )}

      {currentScreen === 'communityDetail' && (
        <CommunityDetailScreen
          communityId={selectedCommunityId}
          onBack={goBack}
          onPostDetail={handlePostDetail}
        />
      )}

      {currentScreen === 'profile' && (
        <ProfileScreen onSettings={() => navigate('settings')} />
      )}

      {currentScreen === 'notifications' && <NotificationsScreen onBack={goBack} />}

      {currentScreen === 'postDetail' && (
        <PostDetailScreen postId={selectedPostId} onBack={goBack} />
      )}

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