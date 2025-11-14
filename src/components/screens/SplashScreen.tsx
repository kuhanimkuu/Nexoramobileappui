import { NexoraLogo } from '../nexora/NexoraLogo';
import { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-nexora-blue via-accent-purple to-deep-indigo flex flex-col items-center justify-center animate-fade-in">
      <div className="animate-pulse">
        <NexoraLogo size="lg" />
      </div>
      <h1 className="mt-8 text-white">Nexora</h1>
      <p className="mt-4 text-white/80 text-center px-8">
        Where conversations become communities.
      </p>
    </div>
  );
}
