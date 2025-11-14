interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function Logo({ size = 'md', showText = false }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="nexoraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2979FF" />
              <stop offset="100%" stopColor="#8A2BE2" />
            </linearGradient>
          </defs>
          {/* Modern N with connected nodes */}
          <path
            d="M25 75 L25 25 L35 25 L60 55 L60 25 L70 25 L70 75 L60 75 L35 45 L35 75 Z"
            fill="url(#nexoraGradient)"
          />
          {/* Connection dots */}
          <circle cx="47.5" cy="50" r="5" fill="#2979FF" opacity="0.8" />
          <circle cx="47.5" cy="50" r="3" fill="white" />
        </svg>
      </div>
      {showText && (
        <span
          className={`${textSizes[size]} font-bold bg-gradient-to-r from-nexora-blue to-accent-purple bg-clip-text text-transparent`}
        >
          Nexora
        </span>
      )}
    </div>
  );
}
