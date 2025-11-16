import { useState } from 'react';
import { ArrowLeft, Users, Bell, Share2, Settings, Search } from 'lucide-react';
import { communities, posts } from '../lib/data';
import { Button } from '../components/ui/button';
import { PostCard } from '../components/PostCard';
import { PollCard } from '../components/PollCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CommunityDetailScreenProps {
  communityId: string;
  onBack: () => void;
  onPostDetail: (postId: string) => void;
}

type TabType = 'posts' | 'polls' | 'about';

export function CommunityDetailScreen({ communityId, onBack, onPostDetail }: CommunityDetailScreenProps) {
  const community = communities.find((c) => c.id === communityId) || communities[0];
  const [isJoined, setIsJoined] = useState(community.isJoined);
  const [activeTab, setActiveTab] = useState<TabType>('posts');

  const communityPosts = posts.slice(0, 3);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="fixed inset-0 bg-soft-white dark:bg-dark-bg flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-dark-surface border-b border-border-light dark:border-dark-border">
        <div className="max-w-2xl mx-auto">
          {/* Top Bar */}
          <div className="px-4 py-3 flex items-center justify-between">
            <button
              onClick={onBack}
              className="p-2 hover:bg-soft-white dark:hover:bg-dark-surface-elevated rounded-full transition-colors -ml-2"
            >
              <ArrowLeft className="w-5 h-5 text-text-primary dark:text-dark-text-primary" />
            </button>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-soft-white dark:hover:bg-dark-surface-elevated rounded-full transition-colors">
                <Search className="w-5 h-5 text-text-secondary dark:text-dark-text-secondary" />
              </button>
              <button className="p-2 hover:bg-soft-white dark:hover:bg-dark-surface-elevated rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-text-secondary dark:text-dark-text-secondary" />
              </button>
              <button className="p-2 hover:bg-soft-white dark:hover:bg-dark-surface-elevated rounded-full transition-colors">
                <Settings className="w-5 h-5 text-text-secondary dark:text-dark-text-secondary" />
              </button>
            </div>
          </div>

          {/* Cover Image */}
          <div className="h-40 relative overflow-hidden">
            <ImageWithFallback
              src={community.coverImage}
              alt={community.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Community Info */}
          <div className="px-4 pb-4">
            <div className="flex items-end justify-between -mt-8 mb-4">
              <div className="w-20 h-20 bg-white dark:bg-dark-surface rounded-2xl flex items-center justify-center text-4xl shadow-lg border-4 border-white dark:border-dark-surface">
                {community.icon}
              </div>
            </div>

            <h2 className="mb-1">{community.name}</h2>
            <p className="text-text-secondary dark:text-dark-text-secondary mb-3">{community.description}</p>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-text-secondary dark:text-dark-text-secondary" />
                <span className="font-semibold text-text-primary dark:text-dark-text-primary">
                  {formatNumber(community.members)} members
                </span>
              </div>
              <span className="px-3 py-1 bg-nexora-blue/10 text-nexora-blue rounded-full">
                {community.category}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                onClick={() => setIsJoined(!isJoined)}
                className={`flex-1 h-11 ${
                  isJoined
                    ? 'bg-white dark:bg-dark-bg border-2 border-nexora-blue text-nexora-blue hover:bg-nexora-blue hover:text-white'
                    : 'bg-gradient-to-r from-nexora-blue to-accent-purple hover:opacity-90 text-white'
                }`}
              >
                <Users className="w-5 h-5 mr-2" />
                {isJoined ? 'Joined' : 'Join Community'}
              </Button>
              <Button
                variant="outline"
                className="h-11 px-4 border-2 dark:border-dark-border dark:hover:bg-dark-surface-elevated"
              >
                <Bell className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-4 flex gap-1 border-t border-border-light dark:border-dark-border">
            <button
              onClick={() => setActiveTab('posts')}
              className={`flex-1 py-3 font-medium transition-colors relative ${
                activeTab === 'posts'
                  ? 'text-nexora-blue'
                  : 'text-text-secondary dark:text-dark-text-secondary hover:text-nexora-blue'
              }`}
            >
              Posts
              {activeTab === 'posts' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-nexora-blue" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('polls')}
              className={`flex-1 py-3 font-medium transition-colors relative ${
                activeTab === 'polls'
                  ? 'text-nexora-blue'
                  : 'text-text-secondary dark:text-dark-text-secondary hover:text-nexora-blue'
              }`}
            >
              Polls
              {activeTab === 'polls' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-nexora-blue" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 py-3 font-medium transition-colors relative ${
                activeTab === 'about'
                  ? 'text-nexora-blue'
                  : 'text-text-secondary dark:text-dark-text-secondary hover:text-nexora-blue'
              }`}
            >
              About
              {activeTab === 'about' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-nexora-blue" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          {activeTab === 'posts' && (
            <div className="px-4 pt-4">
              {communityPosts.map((post) => (
                <PostCard key={post.id} post={post} onClick={() => onPostDetail(post.id)} />
              ))}
            </div>
          )}

          {activeTab === 'polls' && (
            <div className="px-4 pt-4 space-y-4">
              <PollCard />
              <PollCard />
            </div>
          )}

          {activeTab === 'about' && (
            <div className="px-4 pt-4">
              <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 shadow-card dark:shadow-dark-card">
                <h3 className="mb-3">About this community</h3>
                <p className="text-text-secondary dark:text-dark-text-secondary mb-4">
                  {community.description}
                </p>
                <div className="space-y-2 pt-3 border-t border-border-light dark:border-dark-border">
                  <div className="flex justify-between">
                    <span className="text-text-secondary dark:text-dark-text-secondary">Created</span>
                    <span className="text-text-primary dark:text-dark-text-primary font-medium">
                      January 15, 2024
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary dark:text-dark-text-secondary">Members</span>
                    <span className="text-text-primary dark:text-dark-text-primary font-medium">
                      {formatNumber(community.members)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary dark:text-dark-text-secondary">Category</span>
                    <span className="text-text-primary dark:text-dark-text-primary font-medium">
                      {community.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}