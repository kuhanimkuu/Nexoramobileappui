import { Settings, Edit3, Users, FileText, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PostCard } from '../components/PostCard';
import { currentUser, posts } from '../lib/data';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProfileScreenProps {
  onSettings: () => void;
}

export function ProfileScreen({ onSettings }: ProfileScreenProps) {
  const userPosts = posts.slice(0, 2);

  return (
    <div className="min-h-screen bg-soft-white dark:bg-dark-bg pb-20">
      {/* Header with Cover */}
      <header className="bg-white dark:bg-dark-surface border-b border-border-light dark:border-dark-border">
        <div className="max-w-2xl mx-auto">
          {/* Cover Image */}
          <div className="h-40 bg-gradient-to-r from-nexora-blue via-accent-purple to-nexora-blue relative overflow-hidden">
            {currentUser.coverImage && (
              <ImageWithFallback
                src={currentUser.coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Profile Info */}
          <div className="px-4 pb-4">
            <div className="flex items-end justify-between -mt-16 mb-4">
              <ImageWithFallback
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-32 h-32 rounded-full border-4 border-white dark:border-dark-surface object-cover shadow-lg"
              />
              <div className="flex gap-2 mb-2">
                <Button variant="outline" className="border-2 dark:border-dark-border dark:hover:bg-dark-surface-elevated">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" onClick={onSettings} className="border-2 dark:border-dark-border dark:hover:bg-dark-surface-elevated px-3">
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="mb-1">{currentUser.name}</h2>
              <p className="text-text-secondary dark:text-dark-text-secondary mb-2">{currentUser.username}</p>
              <p className="text-text-primary dark:text-dark-text-primary">{currentUser.bio}</p>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-nexora-blue/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-nexora-blue" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary dark:text-dark-text-primary">248</p>
                  <p className="text-text-secondary dark:text-dark-text-secondary">Posts</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary dark:text-dark-text-primary">32</p>
                  <p className="text-text-secondary dark:text-dark-text-secondary">Polls</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary dark:text-dark-text-primary">12</p>
                  <p className="text-text-secondary dark:text-dark-text-secondary">Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Posts */}
      <main className="max-w-2xl mx-auto px-4 pt-4">
        <h3 className="mb-3">Your Posts</h3>
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}