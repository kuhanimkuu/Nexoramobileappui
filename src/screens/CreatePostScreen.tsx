import { useState } from 'react';
import { ArrowLeft, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CreatePostScreenProps {
  onBack: () => void;
  onPost: (content: string, image?: string) => void;
}

export function CreatePostScreen({ onBack, onPost }: CreatePostScreenProps) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string>();

  const handlePost = () => {
    if (content.trim()) {
      onPost(content, image);
      onBack();
    }
  };

  const handleAddImage = () => {
    // Simulate image selection
    setImage('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop');
  };

  return (
    <div className="fixed inset-0 bg-soft-white flex flex-col z-50">
      {/* Header */}
      <header className="bg-white border-b border-border-light px-4 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 hover:bg-soft-white rounded-full transition-colors -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h3>Create Post</h3>
        <Button
          onClick={handlePost}
          disabled={!content.trim()}
          className="bg-nexora-blue hover:bg-nexora-blue/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Post
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="min-h-[200px] border-0 focus-visible:ring-0 resize-none text-lg p-0"
            autoFocus
          />

          {image && (
            <div className="relative mt-4 rounded-2xl overflow-hidden">
              <ImageWithFallback src={image} alt="Post" className="w-full h-auto" />
              <button
                onClick={() => setImage(undefined)}
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border-light px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleAddImage}
            disabled={!!image}
            className="flex items-center gap-2 px-4 py-2 hover:bg-soft-white rounded-xl transition-colors disabled:opacity-50"
          >
            <ImageIcon className="w-5 h-5 text-nexora-blue" />
            <span className="text-text-primary font-medium">Add Image</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
