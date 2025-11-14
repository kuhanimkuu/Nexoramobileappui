import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Post } from '../lib/data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PostCardProps {
  post: Post;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export function PostCard({ post, onLike, onComment, onShare }: PostCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 mb-3 shadow-card hover:shadow-card-hover transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <ImageWithFallback
            src={post.user.avatar}
            alt={post.user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-text-primary">{post.user.name}</p>
            <div className="flex items-center gap-2 text-text-secondary">
              <span>{post.user.username}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-soft-white rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      {/* Content */}
      <p className="text-text-primary mb-3 leading-relaxed">{post.content}</p>

      {/* Image */}
      {post.image && (
        <div className="mb-3 rounded-xl overflow-hidden">
          <ImageWithFallback
            src={post.image}
            alt="Post content"
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-6 pt-3 border-t border-border-light">
        <button
          onClick={onLike}
          className={`flex items-center gap-2 group transition-all ${
            post.isLiked ? 'text-nexora-blue' : 'text-text-secondary hover:text-nexora-blue'
          }`}
        >
          <Heart
            className={`w-5 h-5 transition-transform group-hover:scale-110 ${
              post.isLiked ? 'fill-current' : ''
            }`}
          />
          <span className="font-medium">{post.likes}</span>
        </button>

        <button
          onClick={onComment}
          className="flex items-center gap-2 text-text-secondary hover:text-nexora-blue transition-all group"
        >
          <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span className="font-medium">{post.comments}</span>
        </button>

        <button
          onClick={onShare}
          className="flex items-center gap-2 text-text-secondary hover:text-nexora-blue transition-all group"
        >
          <Share2 className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span className="font-medium">{post.shares}</span>
        </button>
      </div>
    </div>
  );
}
