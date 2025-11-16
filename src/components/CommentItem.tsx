import { Heart } from 'lucide-react';
import { Comment } from '../lib/data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CommentItemProps {
  comment: Comment;
  onLike?: () => void;
}

export function CommentItem({ comment, onLike }: CommentItemProps) {
  return (
    <div className="flex gap-3 py-3">
      <ImageWithFallback
        src={comment.user.avatar}
        alt={comment.user.name}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />

      <div className="flex-1 min-w-0">
        <div className="bg-soft-white dark:bg-dark-surface-elevated rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-semibold text-text-primary dark:text-dark-text-primary">{comment.user.name}</p>
            <span className="text-text-secondary dark:text-dark-text-secondary">•</span>
            <span className="text-text-secondary dark:text-dark-text-secondary">{comment.timestamp}</span>
          </div>
          <p className="text-text-primary dark:text-dark-text-primary">{comment.content}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-2 px-4">
          <button
            onClick={onLike}
            className={`flex items-center gap-1 group transition-colors ${
              comment.isLiked ? 'text-nexora-blue' : 'text-text-secondary dark:text-dark-text-secondary hover:text-nexora-blue'
            }`}
          >
            <Heart
              className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                comment.isLiked ? 'fill-current' : ''
              }`}
            />
            {comment.likes > 0 && <span className="font-medium">{comment.likes}</span>}
          </button>
          <button className="text-text-secondary dark:text-dark-text-secondary hover:text-nexora-blue transition-colors font-medium">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}