import { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { NexoraWordmark } from '../nexora/NexoraLogo';
import { PostCard } from '../nexora/PostCard';
import { FloatingActionButton } from '../nexora/FloatingActionButton';
import { mockPosts } from '../../lib/mockData';

interface HomeFeedScreenProps {
  onCreatePost: () => void;
  onNotifications: () => void;
}

export function HomeFeedScreen({ onCreatePost, onNotifications }: HomeFeedScreenProps) {
  const [posts, setPosts] = useState(mockPosts);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-soft-white pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-border z-40">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <NexoraWordmark />
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
              <Search className="w-5 h-5 text-text-secondary" />
            </button>
            <button 
              onClick={onNotifications}
              className="p-2 hover:bg-soft-white rounded-full transition-colors relative"
            >
              <Bell className="w-5 h-5 text-text-secondary" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-nexora-blue rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Feed */}
      <main className="max-w-2xl mx-auto px-4 pt-4">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={(id) => console.log('Comment:', id)}
            onShare={(id) => console.log('Share:', id)}
          />
        ))}
      </main>

      {/* FAB */}
      <FloatingActionButton onClick={onCreatePost} />
    </div>
  );
}
