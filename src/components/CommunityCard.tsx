import { Users, FileText } from 'lucide-react';
import { Community } from '../lib/data';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CommunityCardProps {
  community: Community;
  onClick: () => void;
  onJoinToggle: () => void;
}

export function CommunityCard({ community, onClick, onJoinToggle }: CommunityCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-card dark:shadow-dark-card hover:shadow-card-hover dark:hover:shadow-dark-card-hover transition-all duration-200">
      {/* Cover Image */}
      <button onClick={onClick} className="w-full">
        <div className="h-32 relative overflow-hidden">
          <ImageWithFallback
            src={community.coverImage}
            alt={community.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <div className="w-12 h-12 bg-white dark:bg-dark-surface rounded-xl flex items-center justify-center text-2xl shadow-lg">
              {community.icon}
            </div>
          </div>
        </div>
      </button>

      {/* Content */}
      <div className="p-4">
        <button onClick={onClick} className="w-full text-left mb-3">
          <h3 className="mb-1">{community.name}</h3>
          <p className="text-text-secondary dark:text-dark-text-secondary line-clamp-2">{community.description}</p>
        </button>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1 text-text-secondary dark:text-dark-text-secondary">
            <Users className="w-4 h-4" />
            <span>{formatNumber(community.members)}</span>
          </div>
          <div className="flex items-center gap-1 text-text-secondary dark:text-dark-text-secondary">
            <FileText className="w-4 h-4" />
            <span>{formatNumber(community.posts)} posts</span>
          </div>
          <div className="flex-1" />
          <span className="px-2 py-1 bg-nexora-blue/10 text-nexora-blue rounded-full">
            {community.category}
          </span>
        </div>

        {/* Join Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onJoinToggle();
          }}
          className={`w-full h-10 ${
            community.isJoined
              ? 'bg-white dark:bg-dark-surface border-2 border-nexora-blue text-nexora-blue hover:bg-nexora-blue hover:text-white'
              : 'bg-gradient-to-r from-nexora-blue to-accent-purple hover:opacity-90 text-white'
          }`}
        >
          {community.isJoined ? 'Joined' : 'Join Community'}
        </Button>
      </div>
    </div>
  );
}