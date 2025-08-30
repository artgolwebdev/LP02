import React from 'react';
import { Star, Users, Zap, Calendar } from 'lucide-react';

interface PerformancePackage {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  color: string;
  icon: React.ReactNode;
}

const PerformancesSection: React.FC = () => {
  const videos = [
    {
      id: 1,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      poster: 'https://images.unsplash.com/photo-1527114652727-2598c326575f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwZGFuY2VyJTIwdXJiYW58ZW58MXx8fHwxNzU2NDU4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tel Aviv Battle 2024'
    },
    {
      id: 2,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      poster: 'https://images.unsplash.com/photo-1706604342065-f36f34513a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwYmF0dGxlJTIwc3R1ZGlvfGVufDF8fHx8MTc1NjQ1ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Power Move Showcase'
    },
    {
      id: 3,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: 'https://images.unsplash.com/photo-1684590686110-f0014d2dd0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBkYW5jZSUyMGNsYXNzfGVufDF8fHx8MTc1NjQ1ODE5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Cypher Sessions'
    },
    {
      id: 4,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      poster: 'https://images.unsplash.com/photo-1571154375916-827c25fef967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBkYW5jZSUyMGdyYWZmaXRpfGVufDF8fHx8MTc1NjQ1ODE5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Street Performance'
    },
    {
      id: 5,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      poster: 'https://images.unsplash.com/photo-1527114652727-2598c326575f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwZGFuY2VyJTIwdXJiYW58ZW58MXx8fHwxNzU2NDU4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Workshop Demo'
    },
    {
      id: 6,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      poster: 'https://images.unsplash.com/photo-1706604342065-f36f34513a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwYmF0dGxlJTIwc3R1ZGlvfGVufDF8fHx8MTc1NjQ1ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Competition Prep'
    },
    {
      id: 7,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      poster: 'https://images.unsplash.com/photo-1684590686110-f0014d2dd0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBkYW5jZSUyMGNsYXNzfGVufDF8fHx8MTc1NjQ1ODE5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Underground Sessions'
    },
    {
      id: 8,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      poster: 'https://images.unsplash.com/photo-1571154375916-827c25fef967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBkYW5jZSUyMGdyYWZmaXRpfGVufDF8fHx8MTc1NjQ1ODE5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Final Battle'
    }
  ];

  const packages: PerformancePackage[] = [
    {
      id: 'solo',
      title: 'SOLO PERFORMANCE',
      description: 'Individual showcase featuring one of our top breakers. Perfect for smaller events and intimate venues.',
      features: ['1 professional breaker', '15-minute performance', 'Custom routine', 'Sound system included', 'Meet & greet'],
      price: '₪800',
      color: 'var(--neon-green)',
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 'battle',
      title: 'GROUP BATTLE',
      description: 'High-energy battle showcase with multiple dancers. Crowd participation and interactive elements.',
      features: ['4-6 professional breakers', '30-minute show', 'Audience participation', 'MC included', 'Custom music'],
      price: '₪2200',
      color: 'var(--neon-orange)',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'workshop',
      title: 'WORKSHOP + SHOW',
      description: 'Educational workshop followed by performance. Great for schools, community centers, and corporate events.',
      features: ['90-minute workshop', '20-minute performance', 'All skill levels', 'Educational materials', 'Q&A session'],
      price: '₪1500',
      color: 'var(--neon-blue)',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'custom',
      title: 'CUSTOM EVENTS',
      description: 'Tailored performances for your specific event. Weddings, bar mitzvahs, corporate events, and more.',
      features: ['Custom choreography', 'Flexible duration', 'Themed performances', 'Full production support', 'Event coordination'],
      price: 'Quote',
      color: 'var(--neon-purple)',
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  // Create duplicated videos for seamless infinite scroll
  const duplicatedVideos = [...videos, ...videos, ...videos];

  return (
    <section id="performances" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4"
            style={{
              color: 'var(--neon-purple)',
              textShadow: '8px 8px 0px var(--neon-orange)'
            }}
          >
            PERFORMANCES
          </h2>
          <h2 
            className="font-russo text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            style={{
              color: 'var(--neon-yellow)',
              textShadow: '6px 6px 0px var(--neon-blue)'
            }}
          >
            & SHOWS
          </h2>
        </div>

        {/* Dual Direction Video Marquee */}
        <div className="mb-20">
          <h3 
            className="font-exo text-2xl md:text-3xl text-center mb-8"
            style={{
              color: 'var(--neon-green)',
              textShadow: '2px 2px 0px var(--neon-orange)'
            }}
          >
            RECENT PERFORMANCES
          </h3>
          
          <div className="space-y-8">
            {/* First Row - Moving Left */}
            <div className="relative overflow-hidden">
              {/* Gradient overlays for smooth edge effect */}
              <div 
                className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, var(--background), transparent)'
                }}
              />
              <div 
                className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, var(--background), transparent)'
                }}
              />
              
              {/* First marquee - left direction */}
              <div className="video-marquee-left flex gap-6">
                {duplicatedVideos.map((video, index) => (
                  <div 
                    key={`left-${video.id}-${index}`}
                    className="flex-shrink-0 relative group"
                  >
                    <div 
                      className="zero-radius border-4 overflow-hidden w-80 h-48 relative transform group-hover:scale-105 transition-transform duration-500"
                      style={{
                        borderColor: 'var(--neon-blue)',
                        boxShadow: '6px 6px 0px var(--neon-green)'
                      }}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={video.poster}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to poster image if video fails
                          const target = e.target as HTMLVideoElement;
                          target.style.display = 'none';
                          const img = target.nextElementSibling as HTMLImageElement;
                          if (img) img.style.display = 'block';
                        }}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Fallback image */}
                      <img
                        src={video.poster}
                        alt={video.title}
                        className="w-full h-full object-cover absolute inset-0"
                        style={{ display: 'none' }}
                      />
                      
                      {/* Hover overlay with brutalistic elements */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="zero-radius border-4 p-4"
                            style={{
                              borderColor: 'var(--neon-yellow)',
                              backgroundColor: 'var(--background)'
                            }}
                          >
                            <div 
                              className="w-6 h-6 zero-radius"
                              style={{ backgroundColor: 'var(--neon-yellow)' }}
                            />
                          </div>
                        </div>
                        {/* Corner accents */}
                        <div 
                          className="absolute top-2 left-2 w-4 h-4 zero-radius animate-pulse"
                          style={{ backgroundColor: 'var(--neon-orange)' }}
                        />
                        <div 
                          className="absolute top-2 right-2 w-4 h-4 zero-radius animate-pulse"
                          style={{ backgroundColor: 'var(--neon-purple)' }}
                        />
                        <div 
                          className="absolute bottom-2 left-2 w-4 h-4 zero-radius animate-pulse"
                          style={{ backgroundColor: 'var(--neon-green)' }}
                        />
                        <div 
                          className="absolute bottom-2 right-2 w-4 h-4 zero-radius animate-pulse"
                          style={{ backgroundColor: 'var(--neon-blue)' }}
                        />
                      </div>
                    </div>
                    <p 
                      className="font-exo text-center mt-3 text-base font-bold"
                      style={{ 
                        color: 'var(--neon-blue)',
                        textShadow: '1px 1px 0px var(--neon-orange)'
                      }}
                    >
                      {video.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Right */}
            <div className="relative overflow-hidden">
              {/* Gradient overlays for smooth edge effect */}
              <div 
                className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, var(--background), transparent)'
                }}
              />
              <div 
                className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, var(--background), transparent)'
                }}
              />
              
              {/* Second marquee - right direction */}
              <div className="video-marquee-right flex gap-6">
                {duplicatedVideos.slice().reverse().map((video, index) => (
                  <div 
                    key={`right-${video.id}-${index}`}
                    className="flex-shrink-0 relative group"
                  >
                    <div 
                      className="zero-radius border-4 overflow-hidden w-80 h-48 relative transform group-hover:scale-105 transition-transform duration-500"
                      style={{
                        borderColor: 'var(--neon-orange)',
                        boxShadow: '6px 6px 0px var(--neon-purple)'
                      }}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={video.poster}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to poster image if video fails
                          const target = e.target as HTMLVideoElement;
                          target.style.display = 'none';
                          const img = target.nextElementSibling as HTMLImageElement;
                          if (img) img.style.display = 'block';
                        }}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Fallback image */}
                      <img
                        src={video.poster}
                        alt={video.title}
                        className="w-full h-full object-cover absolute inset-0"
                        style={{ display: 'none' }}
                      />
                      
                      {/* Hover overlay with different brutalistic elements */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="zero-radius border-4 p-4"
                            style={{
                              borderColor: 'var(--neon-green)',
                              backgroundColor: 'var(--background)'
                            }}
                          >
                            <div 
                              className="w-6 h-6 zero-radius"
                              style={{ backgroundColor: 'var(--neon-green)' }}
                            />
                          </div>
                        </div>
                        {/* Corner accents with different colors */}
                        <div 
                          className="absolute top-2 left-2 w-4 h-4 zero-radius animate-pulse"
                          style={{ backgroundColor: 'var(--neon-yellow)' }}
                        />
                        <div 
                          className="absolute top-2 right-2 w-4 h-4 zero-radius animate-pulse"
                          style={{ backgroundColor: 'var(--neon-blue)' }}
                        />
                        <div 
                          className="absolute bottom-2 left-2 w-4 h-4 zero-radius animate-pulse"
                          style={{ backgroundColor: 'var(--neon-purple)' }}
                        />
                        <div 
                          className="absolute bottom-2 right-2 w-4 h-4 zero-radius animate-pulse"
                          style={{ backgroundColor: 'var(--neon-orange)' }}
                        />
                      </div>
                    </div>
                    <p 
                      className="font-exo text-center mt-3 text-base font-bold"
                      style={{ 
                        color: 'var(--neon-orange)',
                        textShadow: '1px 1px 0px var(--neon-purple)'
                      }}
                    >
                      {video.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Packages */}
        <div>
          <h3 
            className="font-exo text-2xl md:text-3xl text-center mb-12"
            style={{
              color: 'var(--neon-orange)',
              textShadow: '2px 2px 0px var(--neon-purple)'
            }}
          >
            BOOKING PACKAGES
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="zero-radius border-4 bg-card-bg p-8 hover:scale-105 transition-all duration-300"
                style={{
                  borderColor: pkg.color,
                  boxShadow: `8px 8px 0px ${pkg.color}`
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-3 zero-radius border-2"
                    style={{
                      backgroundColor: pkg.color,
                      borderColor: pkg.color
                    }}
                  >
                    {React.cloneElement(pkg.icon as React.ReactElement, {
                      style: { color: 'var(--background)' }
                    })}
                  </div>
                  <div>
                    <h4 
                      className="font-russo text-xl md:text-2xl"
                      style={{ color: pkg.color }}
                    >
                      {pkg.title}
                    </h4>
                    <p 
                      className="font-exo text-2xl font-bold mt-1"
                      style={{ color: pkg.color }}
                    >
                      {pkg.price}
                    </p>
                  </div>
                </div>

                <p className="font-roboto text-foreground text-base leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 zero-radius"
                        style={{ backgroundColor: pkg.color }}
                      />
                      <span className="font-roboto text-foreground text-sm md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full crusher-btn zero-radius border-4 py-4 px-6 transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: pkg.color,
                    borderColor: pkg.color,
                    boxShadow: `6px 6px 0px var(--background)`,
                    color: 'var(--background)'
                  }}
                >
                  <span className="font-exo text-lg font-bold">BOOK PERFORMANCE</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Left scrolling marquee - faster speed */
        .video-marquee-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .video-marquee-left:hover {
          animation-play-state: paused;
        }
        
        /* Right scrolling marquee - opposite direction, different speed */
        .video-marquee-right {
          animation: scroll-right 45s linear infinite;
        }
        
        .video-marquee-right:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        /* Responsive animation speeds */
        @media (max-width: 768px) {
          .video-marquee-left {
            animation: scroll-left 30s linear infinite;
          }
          
          .video-marquee-right {
            animation: scroll-right 35s linear infinite;
          }
        }
        
        @media (max-width: 480px) {
          .video-marquee-left {
            animation: scroll-left 20s linear infinite;
          }
          
          .video-marquee-right {
            animation: scroll-right 25s linear infinite;
          }
        }
        
        /* Enhanced brutalistic hover effects */
        .video-marquee-left .group:hover,
        .video-marquee-right .group:hover {
          z-index: 20;
          position: relative;
        }
        
        /* Performance optimization */
        .video-marquee-left,
        .video-marquee-right {
          will-change: transform;
        }
        
        .video-marquee-left video,
        .video-marquee-right video {
          will-change: transform;
        }
        
        /* Staggered animation delays for more organic feel */
        .video-marquee-right {
          animation-delay: -22.5s; /* Half of the 45s duration for offset */
        }
        
        /* Different hover effects for each row */
        .video-marquee-left .group:hover {
          transform: scale(1.05) rotate(-1deg);
        }
        
        .video-marquee-right .group:hover {
          transform: scale(1.05) rotate(1deg);
        }
        
        /* Pause animation on reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .video-marquee-left,
          .video-marquee-right {
            animation: none;
          }
        }
        
        /* Add subtle glow effect on hover for better contrast */
        .video-marquee-left .group:hover,
        .video-marquee-right .group:hover {
          filter: drop-shadow(0 0 20px rgba(0, 255, 136, 0.3));
        }
      `}</style>
    </section>
  );
};

export default PerformancesSection;