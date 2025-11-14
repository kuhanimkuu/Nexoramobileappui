import { useState } from 'react';
import { ArrowLeft, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CreatePostScreenProps {
  onBack: () => void;
  onPost: (content: string, image?: string) => void;
}

export function CreatePostScreen({ onBack, onPost }: CreatePostScreenProps) {
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<string>();

  const handlePost = () => {
    if (content.trim()) {
      onPost(content, selectedImage);
      onBack();
    }
  };

  const handleAddImage = () => {
    // Simulate image selection
    setSelectedImage('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop');
  };

  return (
    <div className="fixed inset-0 bg-soft-white flex flex-col z-50">
      {/* Header */}
      <header className="bg-white border-b border-border px-4 py-3 flex items-center justify-between">
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
          className="bg-nexora-blue hover:bg-nexora-blue/90 text-white disabled:opacity-50"
        >
          Post
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1 p-4">
        <div className="max-w-2xl mx-auto">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="min-h-[200px] border-0 focus-visible:ring-0 resize-none p-0"
            autoFocus
          />

          {selectedImage && (
            <div className="relative mt-4 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-96 object-cover"
              />
              <button
                onClick={() => setSelectedImage(undefined)}
                className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-4 py-2 hover:bg-soft-white rounded-lg transition-colors"
          >
            <ImageIcon className="w-5 h-5 text-nexora-blue" />
            <span className="text-text-primary">Add Image</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
