import { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { Logo } from '../components/Logo';
import { PostCard } from '../components/PostCard';
import { FAB } from '../components/FAB';
import { posts as initialPosts } from '../lib/data';

interface HomeScreenProps {
  onCreatePost: () => void;
  onNotifications: () => void;
  onPostDetail: (postId: string) => void;
}

export function HomeScreen({ onCreatePost, onNotifications, onPostDetail }: HomeScreenProps) {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-soft-white pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border-light z-40">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo size="sm" showText />
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
              <Search className="w-5 h-5 text-text-secondary" />
            </button>
            <button
              onClick={onNotifications}
              className="p-2 hover:bg-soft-white rounded-full transition-colors relative"
            >
              <Bell className="w-5 h-5 text-text-secondary" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-nexora-blue rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Feed */}
      <main className="max-w-2xl mx-auto px-4 pt-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={() => handleLike(post.id)}
            onClick={() => onPostDetail(post.id)}
            onComment={() => onPostDetail(post.id)}
            onShare={() => console.log('Share', post.id)}
          />
        ))}
      </main>

      {/* FAB */}
      <FAB onClick={onCreatePost} />
    </div>
  );
}