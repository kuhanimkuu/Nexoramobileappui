export function NexoraLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
  };

  return (
    <div className={`${sizes[size]} relative`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2979FF" />
            <stop offset="100%" stopColor="#8A2BE2" />
          </linearGradient>
        </defs>
        {/* Stylized N with connected curves */}
        <path
          d="M20 80 L20 20 L35 20 L65 60 L65 20 L80 20 L80 80 L65 80 L35 40 L35 80 Z"
          fill="url(#logoGradient)"
          className="drop-shadow-lg"
        />
        {/* Connection dots */}
        <circle cx="35" cy="50" r="4" fill="#2979FF" />
        <circle cx="65" cy="50" r="4" fill="#8A2BE2" />
      </svg>
    </div>
  );
}

export function NexoraWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <NexoraLogo size="sm" />
      <span className="bg-gradient-to-r from-nexora-blue to-accent-purple bg-clip-text text-transparent">
        Nexora
      </span>
    </div>
  );
}
