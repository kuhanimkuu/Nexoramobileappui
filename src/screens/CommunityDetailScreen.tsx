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
    <div className="fixed inset-0 bg-soft-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border-light">
        <div className="max-w-2xl mx-auto">
          {/* Top Bar */}
          <div className="px-4 py-3 flex items-center justify-between">
            <button
              onClick={onBack}
              className="p-2 hover:bg-soft-white rounded-full transition-colors -ml-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
                <Search className="w-5 h-5 text-text-secondary" />
              </button>
              <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-text-secondary" />
              </button>
              <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
                <Settings className="w-5 h-5 text-text-secondary" />
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
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-lg border-4 border-white">
                {community.icon}
              </div>
            </div>

            <h2 className="mb-1">{community.name}</h2>
            <p className="text-text-secondary mb-3">{community.description}</p>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-4">
              <div>
                <p className="font-semibold text-text-primary">{formatNumber(community.members)}</p>
                <p className="text-text-secondary">Members</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">{formatNumber(community.posts)}</p>
                <p className="text-text-secondary">Posts</p>
              </div>
              <div>
                <span className="px-3 py-1 bg-nexora-blue/10 text-nexora-blue rounded-full font-medium">
                  {community.category}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={() => setIsJoined(!isJoined)}
                className={`flex-1 h-11 ${
                  isJoined
                    ? 'bg-white border-2 border-nexora-blue text-nexora-blue hover:bg-nexora-blue hover:text-white'
                    : 'bg-gradient-to-r from-nexora-blue to-accent-purple hover:opacity-90 text-white'
                }`}
              >
                {isJoined ? 'Joined' : 'Join Community'}
              </Button>
              {isJoined && (
                <Button
                  variant="outline"
                  className="border-2 px-4"
                >
                  <Bell className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-t border-border-light">
            <button
              onClick={() => setActiveTab('posts')}
              className={`flex-1 py-3 font-medium transition-colors relative ${
                activeTab === 'posts' ? 'text-nexora-blue' : 'text-text-secondary'
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
                activeTab === 'polls' ? 'text-nexora-blue' : 'text-text-secondary'
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
                activeTab === 'about' ? 'text-nexora-blue' : 'text-text-secondary'
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
        <div className="max-w-2xl mx-auto px-4 pt-4 pb-20">
          {activeTab === 'posts' && (
            <div>
              {communityPosts.map((post) => (
                <div key={post.id} onClick={() => onPostDetail(post.id)}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'polls' && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-text-muted mx-auto mb-3" />
              <p className="text-text-secondary">No polls yet</p>
              <p className="text-text-muted mt-1">Be the first to create a poll!</p>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="bg-white rounded-2xl p-6">
              <h3 className="mb-3">About this community</h3>
              <p className="text-text-primary leading-relaxed mb-6">{community.description}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-nexora-blue/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-nexora-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      {formatNumber(community.members)} Members
                    </p>
                    <p className="text-text-secondary">Active community</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-light">
                  <h3 className="mb-2">Community Guidelines</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Be respectful and kind to all members</li>
                    <li>• Share relevant and valuable content</li>
                    <li>• No spam or self-promotion</li>
                    <li>• Follow the community standards</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
