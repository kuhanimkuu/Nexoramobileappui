import { Settings, Edit3, Users, FileText, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { PostCard } from '../nexora/PostCard';
import { mockPosts } from '../../lib/mockData';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProfileScreenProps {
  onSettings: () => void;
}

export function ProfileScreen({ onSettings }: ProfileScreenProps) {
  const userPosts = mockPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-soft-white pb-20">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-2xl mx-auto">
          {/* Banner */}
          <div className="h-32 bg-gradient-to-r from-nexora-blue to-accent-purple" />
          
          {/* Profile Info */}
          <div className="px-4 pb-4">
            <div className="flex items-end justify-between -mt-16 mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <div className="flex gap-2 mb-2">
                <Button
                  variant="outline"
                  className="border-2 border-nexora-blue text-nexora-blue hover:bg-nexora-blue hover:text-white"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  onClick={onSettings}
                  className="border-2"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="mb-4">
              <h2>Alex Morgan</h2>
              <p className="text-text-secondary">@alexmorgan</p>
              <p className="text-text-primary mt-2">
                UX Designer & Developer | Building amazing digital experiences ✨
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-nexora-blue" />
                <div>
                  <p className="text-text-primary">248</p>
                  <p className="text-text-secondary">Posts</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent-purple" />
                <div>
                  <p className="text-text-primary">32</p>
                  <p className="text-text-secondary">Polls</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-nexora-blue" />
                <div>
                  <p className="text-text-primary">12</p>
                  <p className="text-text-secondary">Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Posts */}
      <main className="max-w-2xl mx-auto px-4 pt-4">
        <h3 className="mb-4">Your Posts</h3>
        {userPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}
