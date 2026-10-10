import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
}) => {
  // Dimension ratios
  const heightMap = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-18',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className={`flex items-center gap-2.5 ${heightMap[size]}`}>
        {/* Crisp Vector Brand Mark matching uploaded official Prachar Prasar logo */}
        <svg
          viewBox="0 0 100 100"
          className="h-full aspect-square shrink-0"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logoSquareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#C62828" />
              <stop offset="60%" stop-color="#9A1D1D" />
              <stop offset="100%" stop-color="#4A0E0E" />
            </linearGradient>
            <linearGradient id="logoWaveGrad" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stop-color="#E53935" />
              <stop offset="45%" stop-color="#C62828" />
              <stop offset="100%" stop-color="#6B1212" />
            </linearGradient>
            <linearGradient id="logoDarkFold" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#2D0606" stop-opacity="0.9" />
              <stop offset="70%" stop-color="#C62828" stop-opacity="0.2" />
              <stop offset="100%" stop-color="#FF5252" stop-opacity="0.1" />
            </linearGradient>
          </defs>

          {/* Badge body with rounded corners */}
          <rect x="2" y="2" width="96" height="96" rx="16" fill="url(#logoSquareGrad)" />

          {/* Curved inner folds mimicking the official emblem */}
          <path d="M 2,40 Q 40,60 62,98 L 2,98 Z" fill="url(#logoDarkFold)" />
          <path d="M 14,14 Q 34,54 90,80 Q 98,42 98,14 Z" fill="url(#logoWaveGrad)" opacity="0.9" />
          <path d="M 12,98 Q 36,54 98,50 L 98,98 Z" fill="#4B0D0D" opacity="0.65" />
          <path d="M 24,14 Q 46,52 98,68 L 98,22 Q 62,18 24,14 Z" fill="#FF7961" opacity="0.35" />
        </svg>

        {/* Wordmark typography */}
        <div className="flex items-baseline font-bold tracking-tight whitespace-nowrap leading-none select-none">
          <span className="text-[#C62828] text-xl sm:text-2xl font-extrabold tracking-[-0.03em]">Prachar</span>
          <span className="text-[#111111] text-xl sm:text-2xl font-extrabold tracking-[-0.03em] ml-0.5">Prasar</span>
        </div>
      </div>

      {showTagline && (
        <span className="text-[10px] font-medium text-[#606770] tracking-wider uppercase mt-1 pl-1">
          Prachar nhi toh Prasar nhi!
        </span>
      )}
    </div>
  );
};
