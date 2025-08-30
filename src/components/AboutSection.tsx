import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Zap, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AboutSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'STUDIO STORY',
      icon: <Heart className="w-8 h-8" />,
      color: 'var(--neon-green)',
      content: 'Founded in the heart of Tel Aviv, our studio is where raw talent meets professional training. We believe breakdance is more than moves - it\'s a culture, a lifestyle, and a community.',
      image: 'https://images.unsplash.com/photo-1706604342065-f36f34513a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwYmF0dGxlJTIwc3R1ZGlvfGVufDF8fHx8MTc1NjQ1ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'DANCE STYLES',
      icon: <Zap className="w-8 h-8" />,
      color: 'var(--neon-orange)',
      content: 'Master the fundamentals: toprock, downrock, power moves, and freezes. From windmills to headspins, we break down every element with precision and passion.',
      image: 'https://images.unsplash.com/photo-1684590686110-f0014d2dd0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBkYW5jZSUyMGNsYXNzfGVufDF8fHx8MTc1NjQ1ODE5NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'COMMUNITY',
      icon: <Users className="w-8 h-8" />,
      color: 'var(--neon-blue)',
      content: 'Join a crew that supports each other. Regular battles, cyphers, and jams create bonds that last beyond the studio. Everyone starts somewhere - everyone belongs.',
      image: 'https://images.unsplash.com/photo-1571154375916-827c25fef967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBkYW5jZSUyMGdyYWZmaXRpfGVufDF8fHx8MTc1NjQ1ODE5N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'CREDENTIALS',
      icon: <Award className="w-8 h-8" />,
      color: 'var(--neon-yellow)',
      content: 'Learn from champions. Our instructors compete internationally, judge battles, and bring decades of street credibility to every class.',
      image: 'https://images.unsplash.com/photo-1527114652727-2598c326575f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwZGFuY2VyJTIwdXJiYW58ZW58MXx8fHwxNzU2NDU4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with Individual Word Animations */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {['ABOUT', 'THE', 'SCENE'].map((word, index) => (
              <h2
                key={word}
                className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{
                  color: `var(--neon-${['green', 'orange', 'blue'][index]})`,
                  textShadow: `6px 6px 0px var(--neon-${['yellow', 'purple', 'green'][index]})`
                }}
              >
                {word}
              </h2>
            ))}
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="relative">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`crusher-btn zero-radius border-4 px-6 py-3 flex items-center gap-2 transition-all duration-300 ${
                  currentSlide === index ? 'scale-110' : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: currentSlide === index ? slide.color : 'var(--card-bg)',
                  borderColor: slide.color,
                  boxShadow: `6px 6px 0px ${currentSlide === index ? 'var(--background)' : slide.color}`,
                  color: currentSlide === index ? 'var(--background)' : slide.color
                }}
              >
                {slide.icon}
                <span className="font-exo font-bold text-sm md:text-base">
                  {slide.title}
                </span>
              </button>
            ))}
          </div>

          {/* Slider Content */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div 
                          className="p-4 zero-radius border-4"
                          style={{
                            backgroundColor: slide.color,
                            borderColor: slide.color,
                            boxShadow: '4px 4px 0px var(--background)'
                          }}
                        >
                          {React.cloneElement(slide.icon, { 
                            style: { color: 'var(--background)' }
                          })}
                        </div>
                        <h3 
                          className="font-russo text-2xl md:text-3xl"
                          style={{ 
                            color: slide.color,
                            textShadow: '2px 2px 0px var(--background)'
                          }}
                        >
                          {slide.title}
                        </h3>
                      </div>
                      <p className="font-roboto text-lg md:text-xl leading-relaxed text-foreground">
                        {slide.content}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="relative group">
                      <div 
                        className="zero-radius border-4 overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                        style={{
                          borderColor: slide.color,
                          boxShadow: `8px 8px 0px ${slide.color}`
                        }}
                      >
                        <ImageWithFallback
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="crusher-btn zero-radius border-4 p-3 transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: 'var(--neon-purple)',
                borderColor: 'var(--neon-purple)',
                boxShadow: '4px 4px 0px var(--neon-yellow)',
                color: 'var(--background)'
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="crusher-btn zero-radius border-4 p-3 transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: 'var(--neon-purple)',
                borderColor: 'var(--neon-purple)',
                boxShadow: '4px 4px 0px var(--neon-yellow)',
                color: 'var(--background)'
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="w-4 h-4 zero-radius transition-all duration-200"
                style={{
                  backgroundColor: currentSlide === index ? slides[index].color : 'var(--border-color)',
                  transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;