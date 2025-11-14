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
    <div className="fixed inset-0 bg-soft-white flex flex-col">
      {/* Skip */}
      <div className="flex justify-end p-6">
        <button
          onClick={onComplete}
          className="text-text-secondary hover:text-nexora-blue transition-colors font-medium"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-24">
        <div
          className={`w-40 h-40 rounded-3xl bg-gradient-to-br ${slide.gradient} flex items-center justify-center mb-12 shadow-2xl animate-scale-in`}
        >
          <Icon className="w-20 h-20 text-white" strokeWidth={1.5} />
        </div>

        <h2 className="text-center mb-4 animate-fade-in">{slide.title}</h2>
        <p className="text-text-secondary text-center max-w-sm leading-relaxed animate-fade-in">
          {slide.description}
        </p>

        {/* Dots */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-nexora-blue' : 'w-2 bg-border-light'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 space-y-3">
        <Button
          onClick={handleNext}
          className="w-full h-12 bg-gradient-to-r from-nexora-blue to-accent-purple hover:opacity-90 text-white"
        >
          {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
        </Button>
        <Button
          onClick={onSignIn}
          variant="outline"
          className="w-full h-12 border-2 border-nexora-blue text-nexora-blue hover:bg-nexora-blue hover:text-white"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
