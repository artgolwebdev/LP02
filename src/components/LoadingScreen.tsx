import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const words = t('loading.words', { returnObjects: true }) as string[];

  useEffect(() => {
    const duration = window.innerWidth < 768 ? 2500 : 3000;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 400);

    return () => clearInterval(wordTimer);
  }, [words.length]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 zero-radius animate-bounce"
            style={{
              backgroundColor: `var(--neon-${['green', 'blue', 'yellow', 'orange', 'purple', 'green'][i]})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Breakdancer icon */}
      <div
        className="relative mb-12 w-24 h-24 zero-radius brutalist-border bg-card-bg flex items-center justify-center"
        style={{
          borderColor: 'var(--neon-green)',
          boxShadow: '8px 8px 0px var(--neon-blue)',
          animation: 'spin 2s linear infinite'
        }}
      >
        <div className="text-4xl animate-pulse">💃</div>
      </div>

      {/* Typography animation */}
      <div className="text-center mb-16">
        <div
          className="font-righteous text-6xl md:text-8xl mb-4"
          style={{
            color: 'var(--neon-green)',
            textShadow: '4px 4px 0px var(--neon-orange)',
            animation: 'pulse-scale 1s ease-in-out infinite'
          }}
        >
          {words[wordIndex] || words[0]}
        </div>
        <div
          className="font-russo text-2xl md:text-3xl"
          style={{
            color: 'var(--neon-yellow)',
            textShadow: '2px 2px 0px var(--neon-purple)'
          }}
        >
          {t('loading.text')}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-80 max-w-[90vw] relative">
        <div
          className="h-4 zero-radius border-4 bg-card-bg"
          style={{ borderColor: 'var(--neon-blue)' }}
        >
          <div
            className="h-full zero-radius transition-all duration-75 relative overflow-hidden"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, var(--neon-green), var(--neon-yellow), var(--neon-orange))`,
            }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'shine 1s linear infinite'
              }}
            />
          </div>
        </div>
        <div
          className="text-center mt-4 font-exo text-lg"
          style={{ color: 'var(--neon-blue)' }}
        >
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;