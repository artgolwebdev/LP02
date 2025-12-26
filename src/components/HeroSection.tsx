import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Star, ArrowDown, Play, Volume2, VolumeX } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  const { t } = useTranslation();
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [titleAnimation, setTitleAnimation] = useState('');

  useEffect(() => {
    // Trigger title animation after component mounts
    const timer = setTimeout(() => {
      setTitleAnimation('animate-in');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background with Image Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          poster="https://images.unsplash.com/photo-1527114652727-2598c326575f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwZGFuY2VyJTIwdXJiYW58ZW58MXx8fHwxNzU2NDU4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <ImageWithFallback
          src="https://images.unsplash.com/photo-1527114652727-2598c326575f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwZGFuY2VyJTIwdXJiYW58ZW58MXx8fHwxNzU2NDU4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Breakdance dancer in urban setting"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
        />

        {/* Overlay with brutalistic pattern */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 48%, var(--neon-green) 49%, var(--neon-green) 51%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, var(--neon-orange) 49%, var(--neon-orange) 51%, transparent 52%)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute top-8 right-8 z-20 flex gap-4">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="group crusher-btn zero-radius border-4 p-3 transition-all duration-200 hover:scale-110 bg-[var(--neon-blue)] border-[var(--neon-blue)] text-background shadow-[4px_4px_0px_var(--neon-yellow)]"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Content - Perfectly Centered */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[100dvh] py-20">
        {/* Brutalistic Frame Around Title */}
        <div
          className="zero-radius border-4 md:border-8 p-6 md:p-10 lg:p-14 mb-8 md:mb-12 relative bg-black/20 backdrop-blur-sm w-full max-w-5xl border-[var(--neon-green)] shadow-[8px_8px_0px_var(--neon-orange),16px_16px_0px_var(--neon-blue),24px_24px_0px_var(--neon-purple)]"
        >
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 zero-radius bg-[var(--neon-yellow)]" />
          <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 zero-radius bg-[var(--neon-yellow)]" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 md:w-8 md:h-8 zero-radius bg-[var(--neon-yellow)]" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8 zero-radius bg-[var(--neon-yellow)]" />

          {/* Stacked Typography with Enhanced Animations */}
          <div className={`space-y-3 md:space-y-4 ${titleAnimation}`}>
            <h1
              className="font-righteous text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none transform transition-all duration-1000 hover:scale-105 text-[var(--neon-green)] animate-[glow-green_3s_ease-in-out_infinite_alternate]"
              style={{
                textShadow: '8px 8px 0px var(--neon-orange), 4px 4px 0px rgba(0,0,0,0.8)',
              }}
            >
              {t('hero.title')}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
              <h2
                className="font-russo text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transform transition-all duration-1000 hover:scale-105 text-[var(--neon-yellow)] animate-[glow-yellow_3s_ease-in-out_infinite_alternate]"
                style={{
                  textShadow: '6px 6px 0px var(--neon-purple), 3px 3px 0px rgba(0,0,0,0.8)',
                }}
              >
                {t('hero.classes')}
              </h2>
              <div
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 zero-radius animate-spin bg-[var(--neon-orange)]"
              />
              <div className="hidden sm:block">
                <h2
                  className="font-russo text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transform transition-all duration-1000 hover:scale-105 text-[var(--neon-yellow)] animate-[glow-yellow_3s_ease-in-out_infinite_alternate]"
                  style={{
                    textShadow: '6px 6px 0px var(--neon-purple), 3px 3px 0px rgba(0,0,0,0.8)',
                  }}
                >
                  &
                </h2>
              </div>
            </div>
            <h2
              className="font-exo text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transform transition-all duration-1000 hover:scale-105 text-[var(--neon-orange)] animate-[glow-orange_3s_ease-in-out_infinite_alternate]"
              style={{
                textShadow: '6px 6px 0px var(--neon-blue), 3px 3px 0px rgba(0,0,0,0.8)',
              }}
            >
              {t('hero.performances')}
            </h2>
            <div className="flex items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6">
              <div className="w-8 md:w-16 h-1.5 md:h-2 zero-radius bg-[var(--neon-blue)]" />
              <p
                className="font-roboto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground"
                style={{
                  textShadow: '4px 4px 0px var(--neon-blue), 2px 2px 0px rgba(0,0,0,0.8)'
                }}
              >
                {t('hero.location')}
              </p>
              <div className="w-8 md:w-16 h-1.5 md:h-2 zero-radius bg-[var(--neon-blue)]" />
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons - Always in Row */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 w-full max-w-4xl">
          <button
            onClick={() => onScrollToSection('classes')}
            className="group crusher-btn zero-radius border-4 md:border-4 px-6 md:px-8 py-4 md:py-5 flex items-center justify-center gap-3 md:gap-4 transition-all duration-300 hover:scale-105 hover:bg-[var(--neon-purple)] hover:border-[var(--neon-purple)] hover:text-white relative overflow-hidden w-full sm:w-auto bg-[var(--neon-green)] border-[var(--neon-green)] text-background shadow-[8px_8px_0px_var(--neon-blue),4px_4px_0px_rgba(0,0,0,0.5)]"
          >
            <Calendar className="w-6 md:w-7 h-6 md:h-7 group-hover:animate-bounce flex-shrink-0" />
            <span className="font-exo text-lg md:text-xl font-bold tracking-wider text-center">{t('hero.cta.bookClass')}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[var(--neon-yellow)]" />
          </button>

          <button
            onClick={() => onScrollToSection('performances')}
            className="group crusher-btn zero-radius border-4 md:border-4 px-6 md:px-8 py-4 md:py-5 flex items-center justify-center gap-3 md:gap-4 transition-all duration-300 hover:scale-105 hover:bg-[var(--neon-blue)] hover:border-[var(--neon-blue)] hover:text-white relative overflow-hidden w-full sm:w-auto bg-[var(--neon-orange)] border-[var(--neon-orange)] text-background shadow-[8px_8px_0px_var(--neon-purple),4px_4px_0px_rgba(0,0,0,0.5)]"
          >
            <Star className="w-6 md:w-7 h-6 md:h-7 group-hover:animate-spin flex-shrink-0" />
            <span className="font-exo text-lg md:text-xl font-bold tracking-wider text-center">{t('hero.cta.bookShow')}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[var(--neon-yellow)]" />
          </button>

          <button
            onClick={() => onScrollToSection('about')}
            className="group crusher-btn zero-radius border-4 md:border-4 px-6 md:px-8 py-4 md:py-5 flex items-center justify-center gap-3 md:gap-4 transition-all duration-300 hover:scale-105 hover:bg-[var(--neon-green)] hover:border-[var(--neon-green)] hover:text-background relative overflow-hidden w-full sm:w-auto bg-[var(--neon-blue)] border-[var(--neon-blue)] text-background shadow-[8px_8px_0px_var(--neon-yellow),4px_4px_0px_rgba(0,0,0,0.5)]"
          >
            <ArrowDown className="w-6 md:w-7 h-6 md:h-7 group-hover:animate-pulse flex-shrink-0" />
            <span className="font-exo text-lg md:text-xl font-bold tracking-wider text-center">{t('hero.cta.discover')}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[var(--neon-green)]" />
          </button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className="flex flex-col items-center cursor-pointer group mt-auto pb-4 md:pb-0"
          onClick={() => onScrollToSection('about')}
        >
          <div
            className="w-6 md:w-8 h-10 md:h-14 zero-radius border-3 md:border-4 flex items-start justify-center pt-2 md:pt-3 group-hover:scale-110 transition-transform duration-300 relative border-[var(--neon-green)] shadow-[3px_3px_0px_var(--neon-orange)]"
          >
            <div className="w-1.5 md:w-2 h-3 md:h-5 zero-radius bg-[var(--neon-green)] animate-[scroll-indicator_2s_ease-in-out_infinite]" />
          </div>
          <ArrowDown className="w-6 md:w-8 h-6 md:h-8 mt-2 md:mt-3 animate-bounce text-[var(--neon-green)]" />
          <p className="font-exo text-xs md:text-sm mt-1 md:mt-2 opacity-80 text-[var(--neon-green)]">
            {t('hero.cta.scroll')}
          </p>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute zero-radius"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              backgroundColor: `var(--neon-${['yellow', 'purple', 'blue', 'orange', 'green'][i % 5]})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationName: `float-${i % 3 + 1}`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${i * 0.3}s`,
              opacity: 0.7
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;