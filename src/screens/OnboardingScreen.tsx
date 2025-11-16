import { useState } from 'react';
import { Users, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';

interface OnboardingScreenProps {
  onComplete: () => void;
  onSignIn: () => void;
}

const slides = [
  {
    icon: Users,
    title: 'Connect with People',
    description: 'Build meaningful relationships with friends, colleagues, and communities worldwide.',
    gradient: 'from-nexora-blue to-blue-400',
  },
  {
    icon: MessageCircle,
    title: 'Share Posts & Ideas',
    description: 'Express yourself through posts, images, and engaging conversations that inspire.',
    gradient: 'from-accent-purple to-purple-400',
  },
  {
    icon: Share2,
    title: 'Build Communities',
    description: 'Create and join communities that share your passions, interests, and goals.',
    gradient: 'from-nexora-blue to-accent-purple',
  },
];

export function OnboardingScreen({ onComplete, onSignIn }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];
  const Icon = slide.icon;

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-soft-white dark:bg-dark-bg flex flex-col">
      {/* Skip */}
      <div className="flex justify-end p-6">
        <button
          onClick={onComplete}
          className="text-text-secondary dark:text-dark-text-secondary hover:text-nexora-blue transition-colors font-medium"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center mb-8 shadow-fab animate-scale-in`}>
          <Icon className="w-16 h-16 text-white" />
        </div>

        <div className="text-center max-w-md animate-fade-in">
          <h2 className="mb-3">{slide.title}</h2>
          <p className="text-text-secondary dark:text-dark-text-secondary">{slide.description}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pb-8">
        {/* Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-nexora-blue'
                  : 'w-2 bg-border-light dark:bg-dark-border'
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleNext}
            className="w-full h-12 bg-gradient-to-r from-nexora-blue to-accent-purple hover:opacity-90 text-white"
          >
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          </Button>

          {currentSlide === slides.length - 1 && (
            <Button
              onClick={onSignIn}
              variant="outline"
              className="w-full h-12 border-2 dark:border-dark-border dark:text-dark-text-primary dark:hover:bg-dark-surface-elevated"
            >
              I already have an account
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}