import React, { useState, useEffect } from 'react';
import { Calendar, Star, ArrowDown, Play, Volume2, VolumeX } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
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
        {/* Video Element - Replace with actual video URL when available */}
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster="https://images.unsplash.com/photo-1527114652727-2598c326575f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwZGFuY2VyJTIwdXJiYW58ZW58MXx8fHwxNzU2NDU4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
        >
          {/* Placeholder video source - replace with actual breakdance video */}
          <source 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
            type="video/mp4" 
          />
          {/* Fallback text for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback Image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1527114652727-2598c326575f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwZGFuY2VyJTIwdXJiYW58ZW58MXx8fHwxNzU2NDU4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Breakdance dancer in urban setting"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Overlay with brutalistic pattern */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-10">
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
          className="crusher-btn zero-radius border-4 p-3 transition-all duration-200 hover:scale-110"
          style={{
            backgroundColor: 'var(--neon-blue)',
            borderColor: 'var(--neon-blue)',
            boxShadow: '4px 4px 0px var(--neon-yellow)',
            color: 'var(--background)'
          }}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Content - Perfectly Centered */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen py-20">
        {/* Brutalistic Frame Around Title */}
        <div 
          className="zero-radius border-6 md:border-8 p-6 md:p-10 lg:p-14 mb-8 md:mb-12 relative bg-black/20 backdrop-blur-sm w-full max-w-5xl"
          style={{
            borderColor: 'var(--neon-green)',
            boxShadow: `
              8px 8px 0px var(--neon-orange),
              16px 16px 0px var(--neon-blue),
              24px 24px 0px var(--neon-purple)
            `
          }}
        >
          {/* Corner accents */}
          <div 
            className="absolute -top-2 -left-2 w-8 h-8 zero-radius"
            style={{ backgroundColor: 'var(--neon-yellow)' }}
          />
          <div 
            className="absolute -top-2 -right-2 w-8 h-8 zero-radius"
            style={{ backgroundColor: 'var(--neon-yellow)' }}
          />
          <div 
            className="absolute -bottom-2 -left-2 w-8 h-8 zero-radius"
            style={{ backgroundColor: 'var(--neon-yellow)' }}
          />
          <div 
            className="absolute -bottom-2 -right-2 w-8 h-8 zero-radius"
            style={{ backgroundColor: 'var(--neon-yellow)' }}
          />
          
          {/* Stacked Typography with Enhanced Animations */}
          <div className={`space-y-3 md:space-y-4 ${titleAnimation}`}>
            <h1 
              className="font-righteous text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none transform transition-all duration-1000 hover:scale-105"
              style={{
                color: 'var(--neon-green)',
                textShadow: '8px 8px 0px var(--neon-orange), 4px 4px 0px rgba(0,0,0,0.8)',
                animation: 'glow-green 3s ease-in-out infinite alternate'
              }}
            >
              BREAKDANCE
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
              <h2 
                className="font-russo text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transform transition-all duration-1000 hover:scale-105"
                style={{
                  color: 'var(--neon-yellow)',
                  textShadow: '6px 6px 0px var(--neon-purple), 3px 3px 0px rgba(0,0,0,0.8)',
                  animation: 'glow-yellow 3s ease-in-out infinite alternate'
                }}
              >
                CLASSES
              </h2>
              <div 
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 zero-radius animate-spin"
                style={{ backgroundColor: 'var(--neon-orange)' }}
              />
              <h2 
                className="font-russo text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transform transition-all duration-1000 hover:scale-105"
                style={{
                  color: 'var(--neon-yellow)',
                  textShadow: '6px 6px 0px var(--neon-purple), 3px 3px 0px rgba(0,0,0,0.8)',
                  animation: 'glow-yellow 3s ease-in-out infinite alternate'
                }}
              >
                &
              </h2>
            </div>
            <h2 
              className="font-exo text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transform transition-all duration-1000 hover:scale-105"
              style={{
                color: 'var(--neon-orange)',
                textShadow: '6px 6px 0px var(--neon-blue), 3px 3px 0px rgba(0,0,0,0.8)',
                animation: 'glow-orange 3s ease-in-out infinite alternate'
              }}
            >
              PERFORMANCES
            </h2>
            <div className="flex items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6">
              <div 
                className="w-12 md:w-16 h-1.5 md:h-2 zero-radius"
                style={{ backgroundColor: 'var(--neon-blue)' }}
              />
              <p 
                className="font-roboto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold"
                style={{
                  color: 'var(--foreground)',
                  textShadow: '4px 4px 0px var(--neon-blue), 2px 2px 0px rgba(0,0,0,0.8)'
                }}
              >
                IN TEL AVIV
              </p>
              <div 
                className="w-12 md:w-16 h-1.5 md:h-2 zero-radius"
                style={{ backgroundColor: 'var(--neon-blue)' }}
              />
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons - Always in Row */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 w-full">
          <button
            onClick={() => onScrollToSection('classes')}
            className="group crusher-btn zero-radius border-4 md:border-6 px-6 md:px-8 py-4 md:py-5 flex items-center gap-3 md:gap-4 transition-all duration-300 hover:scale-105 relative overflow-hidden w-full sm:w-auto"
            style={{
              backgroundColor: 'var(--neon-green)',
              borderColor: 'var(--neon-green)',
              boxShadow: '8px 8px 0px var(--neon-blue), 4px 4px 0px rgba(0,0,0,0.5)',
              color: 'var(--background)'
            }}
          >
            <Calendar className="w-6 md:w-7 h-6 md:h-7 group-hover:animate-bounce flex-shrink-0" />
            <span className="font-exo text-lg md:text-xl font-bold tracking-wider text-center">BOOK CLASS</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: 'var(--neon-yellow)' }}
            />
          </button>

          <button
            onClick={() => onScrollToSection('performances')}
            className="group crusher-btn zero-radius border-4 md:border-6 px-6 md:px-8 py-4 md:py-5 flex items-center gap-3 md:gap-4 transition-all duration-300 hover:scale-105 relative overflow-hidden w-full sm:w-auto"
            style={{
              backgroundColor: 'var(--neon-orange)',
              borderColor: 'var(--neon-orange)',
              boxShadow: '8px 8px 0px var(--neon-purple), 4px 4px 0px rgba(0,0,0,0.5)',
              color: 'var(--background)'
            }}
          >
            <Star className="w-6 md:w-7 h-6 md:h-7 group-hover:animate-spin flex-shrink-0" />
            <span className="font-exo text-lg md:text-xl font-bold tracking-wider text-center">BOOK SHOW</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: 'var(--neon-yellow)' }}
            />
          </button>

          <button
            onClick={() => onScrollToSection('about')}
            className="group crusher-btn zero-radius border-4 md:border-6 px-6 md:px-8 py-4 md:py-5 flex items-center gap-3 md:gap-4 transition-all duration-300 hover:scale-105 relative overflow-hidden w-full sm:w-auto"
            style={{
              backgroundColor: 'var(--neon-blue)',
              borderColor: 'var(--neon-blue)',
              boxShadow: '8px 8px 0px var(--neon-yellow), 4px 4px 0px rgba(0,0,0,0.5)',
              color: 'var(--background)'
            }}
          >
            <ArrowDown className="w-6 md:w-7 h-6 md:h-7 group-hover:animate-pulse flex-shrink-0" />
            <span className="font-exo text-lg md:text-xl font-bold tracking-wider text-center">DISCOVER</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: 'var(--neon-green)' }}
            />
          </button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          className="flex flex-col items-center cursor-pointer group mt-auto"
          onClick={() => onScrollToSection('about')}
        >
          <div 
            className="w-6 md:w-8 h-12 md:h-16 zero-radius border-3 md:border-4 flex items-start justify-center pt-2 md:pt-3 group-hover:scale-110 transition-transform duration-300 relative"
            style={{ 
              borderColor: 'var(--neon-green)',
              boxShadow: '3px 3px 0px var(--neon-orange)'
            }}
          >
            <div 
              className="w-1.5 md:w-2 h-4 md:h-6 zero-radius"
              style={{ 
                backgroundColor: 'var(--neon-green)',
                animation: 'scroll-indicator 2s ease-in-out infinite'
              }}
            />
          </div>
          <ArrowDown 
            className="w-6 md:w-8 h-6 md:h-8 mt-2 md:mt-3 animate-bounce"
            style={{ color: 'var(--neon-green)' }}
          />
          <p 
            className="font-exo text-xs md:text-sm mt-1 md:mt-2 opacity-80"
            style={{ color: 'var(--neon-green)' }}
          >
            SCROLL TO EXPLORE
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
              animation: `float-${i % 3 + 1} ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.7
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes glow-green {
          0% { text-shadow: 8px 8px 0px var(--neon-orange), 4px 4px 0px rgba(0,0,0,0.8); }
          100% { text-shadow: 8px 8px 0px var(--neon-orange), 4px 4px 0px rgba(0,0,0,0.8), 0 0 20px var(--neon-green); }
        }
        
        @keyframes glow-yellow {
          0% { text-shadow: 6px 6px 0px var(--neon-purple), 3px 3px 0px rgba(0,0,0,0.8); }
          100% { text-shadow: 6px 6px 0px var(--neon-purple), 3px 3px 0px rgba(0,0,0,0.8), 0 0 15px var(--neon-yellow); }
        }
        
        @keyframes glow-orange {
          0% { text-shadow: 6px 6px 0px var(--neon-blue), 3px 3px 0px rgba(0,0,0,0.8); }
          100% { text-shadow: 6px 6px 0px var(--neon-blue), 3px 3px 0px rgba(0,0,0,0.8), 0 0 15px var(--neon-orange); }
        }
        
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(90deg); }
          50% { transform: translate(-20px, -40px) rotate(180deg); }
          75% { transform: translate(-40px, -20px) rotate(270deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-30px, 30px) rotate(120deg) scale(1.2); }
          66% { transform: translate(30px, -30px) rotate(240deg) scale(0.8); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(40px, 40px) rotate(180deg); }
        }
        
        .animate-in {
          animation: slideInUp 1s ease-out;
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .animate-in {
            animation: slideInUp 0.8s ease-out;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;