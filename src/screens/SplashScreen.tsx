import { useEffect } from 'react';
import { Logo } from '../components/Logo';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-nexora-blue via-accent-purple to-deep-indigo flex flex-col items-center justify-center overflow-hidden">
      <div className="animate-scale-in">
        <Logo size="xl" />
      </div>
      <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
        <h1 className="text-white mb-3">Nexora</h1>
        <p className="text-white/90 px-8 max-w-md">
          Where conversations become communities.
        </p>
      </div>
    </div>
  );
}
