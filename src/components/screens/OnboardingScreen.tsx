import { useState } from 'react';
import { Users, MessageCircle, Share2, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface OnboardingScreenProps {
  onComplete: () => void;
  onSignIn: () => void;
}

const slides = [
  {
    icon: Users,
    title: 'Connect with People',
    description: 'Build meaningful connections with friends, colleagues, and communities around the world.',
    gradient: 'from-nexora-blue to-blue-400',
  },
  {
    icon: MessageCircle,
    title: 'Share Posts & Ideas',
    description: 'Express yourself through posts, images, and engaging conversations that matter.',
    gradient: 'from-accent-purple to-purple-400',
  },
  {
    icon: Share2,
    title: 'Build Communities',
    description: 'Create and join communities that share your interests, passions, and goals.',
    gradient: 'from-nexora-blue to-accent-purple',
  },
];

export function OnboardingScreen({ onComplete, onSignIn }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="fixed inset-0 bg-soft-white flex flex-col">
      {/* Skip button */}
      <div className="flex justify-end p-6">
        <button
          onClick={onComplete}
          className="text-text-secondary hover:text-nexora-blue transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center mb-8 shadow-xl`}>
          <Icon className="w-16 h-16 text-white" />
        </div>

        <h2 className="text-center mb-4">{slide.title}</h2>
        <p className="text-text-secondary text-center max-w-md">
          {slide.description}
        </p>

        {/* Dots indicator */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-nexora-blue'
                  : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 space-y-3">
        <Button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-nexora-blue to-accent-purple hover:opacity-90 text-white"
        >
          {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
        <Button
          onClick={onSignIn}
          variant="outline"
          className="w-full border-2 border-nexora-blue text-nexora-blue hover:bg-nexora-blue hover:text-white"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
