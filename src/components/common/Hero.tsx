import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: 'small' | 'medium' | 'large';
  overlay?: boolean;
}

// Reusable hero section component for pages
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  height = 'medium',
  overlay = true
}) => {
  const heightClasses = {
    small: 'h-64',
    medium: 'h-96',
    large: 'h-screen'
  };

  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : { background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)' };

  return (
    <div
      className={`relative ${heightClasses[height]} flex items-center justify-center bg-cover bg-center bg-no-repeat`}
      style={backgroundStyle}
    >
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;