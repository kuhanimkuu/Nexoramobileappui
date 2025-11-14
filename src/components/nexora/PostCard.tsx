import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Post } from '../../lib/mockData';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PostCardProps {
  post: Post;
  onLike?: (id: string) => void;
  onComment?: (id: string) => void;
  onShare?: (id: string) => void;
}

export function PostCard({ post, onLike, onComment, onShare }: PostCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-border mb-3 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <ImageWithFallback
            src={post.user.avatar}
            alt={post.user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-text-primary">{post.user.name}</p>
            <div className="flex items-center gap-2">
              <p className="text-text-secondary">{post.user.username}</p>
              <span className="text-text-secondary">•</span>
              <p className="text-text-secondary">{post.timestamp}</p>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      {/* Content */}
      <div className="mb-3">
        <p className="text-text-primary mb-3">{post.content}</p>
        {post.image && (
          <ImageWithFallback
            src={post.image}
            alt="Post image"
            className="w-full rounded-lg object-cover max-h-96"
          />
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 pt-3 border-t border-border">
        <button
          onClick={() => onLike?.(post.id)}
          className="flex items-center gap-2 text-text-secondary hover:text-nexora-blue transition-colors group"
        >
          <Heart
            className={`w-5 h-5 group-hover:scale-110 transition-transform ${
              post.isLiked ? 'fill-nexora-blue text-nexora-blue' : ''
            }`}
          />
          <span>{post.likes}</span>
        </button>
        <button
          onClick={() => onComment?.(post.id)}
          className="flex items-center gap-2 text-text-secondary hover:text-nexora-blue transition-colors group"
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>{post.comments}</span>
        </button>
        <button
          onClick={() => onShare?.(post.id)}
          className="flex items-center gap-2 text-text-secondary hover:text-nexora-blue transition-colors group"
        >
          <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>{post.shares}</span>
        </button>
      </div>
    </div>
  );
}
