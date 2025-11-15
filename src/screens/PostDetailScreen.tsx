import { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Share2, MoreHorizontal, Send, Smile } from 'lucide-react';
import { posts, comments as initialComments } from '../lib/data';
import { CommentItem } from '../components/CommentItem';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface PostDetailScreenProps {
  postId: string;
  onBack: () => void;
}

export function PostDetailScreen({ postId, onBack }: PostDetailScreenProps) {
  const post = posts.find((p) => p.id === postId) || posts[0];
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleCommentLike = (commentId: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            }
          : comment
      )
    );
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      console.log('New comment:', commentText);
      setCommentText('');
    }
  };

  return (
    <div className="fixed inset-0 bg-soft-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border-light px-4 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-soft-white rounded-full transition-colors -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h3>Post</h3>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          {/* Post */}
          <div className="bg-white border-b border-border-light p-4">
            {/* User Info */}
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

            {/* Stats */}
            <div className="flex items-center gap-4 py-3 border-t border-b border-border-light my-3 text-text-secondary">
              <span>{likes} likes</span>
              <span>{comments.length} comments</span>
              <span>{post.shares} shares</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 group transition-all ${
                  isLiked ? 'text-nexora-blue' : 'text-text-secondary hover:text-nexora-blue'
                }`}
              >
                <Heart
                  className={`w-6 h-6 transition-transform group-hover:scale-110 ${
                    isLiked ? 'fill-current' : ''
                  }`}
                />
                <span className="font-medium">Like</span>
              </button>

              <button className="flex items-center gap-2 text-text-secondary hover:text-nexora-blue transition-all group">
                <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span className="font-medium">Comment</span>
              </button>

              <button className="flex items-center gap-2 text-text-secondary hover:text-nexora-blue transition-all group">
                <Share2 className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span className="font-medium">Share</span>
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white">
            <div className="px-4 py-3 border-b border-border-light">
              <h3>Comments</h3>
            </div>

            <div className="divide-y divide-border-light px-4">
              {comments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                  onLike={() => handleCommentLike(comment.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Comment Input */}
      <footer className="bg-white border-t border-border-light px-4 py-3">
        <form onSubmit={handleSubmitComment} className="flex items-center gap-2 max-w-2xl mx-auto">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
            alt="You"
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />

          <div className="flex-1 flex items-center gap-2 bg-soft-white rounded-full px-4 py-2 border border-border-light focus-within:border-nexora-blue transition-colors">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 bg-transparent focus:outline-none text-text-primary"
            />
            <button
              type="button"
              className="p-1 hover:bg-white rounded-full transition-colors flex-shrink-0"
            >
              <Smile className="w-5 h-5 text-text-secondary" />
            </button>
          </div>

          {commentText.trim() && (
            <button
              type="submit"
              className="p-3 bg-nexora-blue hover:bg-nexora-blue/90 text-white rounded-full transition-colors flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          )}
        </form>
      </footer>
    </div>
  );
}
