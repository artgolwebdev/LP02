import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Users, DollarSign, Calendar } from 'lucide-react';

interface ClassData {
  id: string;
  title: string;
  level: string;
  description: string;
  schedule: string;
  duration: string;
  capacity: string;
  price: string;
  color: string;
  features: string[];
}

const ClassesSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const classes: ClassData[] = [
    {
      id: 'beginner',
      title: 'BEGINNER BREAKING',
      level: 'Entry Level',
      description: 'Perfect for first-timers. Learn basic toprock, simple footwork, and fundamental freezes. No experience required - just bring your energy!',
      schedule: 'Monday & Wednesday, 7:00-8:30 PM',
      duration: '90 minutes',
      capacity: '15 students',
      price: '₪120/month',
      color: 'var(--neon-green)',
      features: ['Basic toprock patterns', 'Simple footwork', 'Fundamental freezes', 'Music understanding', 'Safe falling techniques']
    },
    {
      id: 'intermediate',
      title: 'INTERMEDIATE TECHNIQUES',
      level: 'Developing',
      description: 'Build on your foundation. Advanced footwork, entry-level power moves, and more complex combinations. Ready to level up your game.',
      schedule: 'Tuesday & Thursday, 7:30-9:00 PM',
      duration: '90 minutes',
      capacity: '12 students',
      price: '₪160/month',
      color: 'var(--neon-orange)',
      features: ['Advanced footwork', 'Entry power moves', 'Flow development', 'Battle basics', 'Strength conditioning']
    },
    {
      id: 'advanced',
      title: 'ADVANCED POWER MOVES',
      level: 'Expert',
      description: 'Master the impossible. Windmills, headspins, flares and more. Push your limits with our champion instructors.',
      schedule: 'Wednesday & Friday, 8:00-9:30 PM',
      duration: '90 minutes',
      capacity: '8 students',
      price: '₪200/month',
      color: 'var(--neon-blue)',
      features: ['Advanced power moves', 'Combo development', 'Competition prep', 'Individual coaching', 'Video analysis']
    },
    {
      id: 'kids',
      title: 'KIDS CLASSES',
      level: 'Ages 8-14',
      description: 'Fun, safe, and energetic classes designed for young breakers. Build confidence, coordination, and creativity.',
      schedule: 'Saturday, 10:00-11:30 AM',
      duration: '90 minutes',
      capacity: '20 kids',
      price: '₪100/month',
      color: 'var(--neon-yellow)',
      features: ['Age-appropriate moves', 'Games and challenges', 'Confidence building', 'Coordination training', 'Creative expression']
    },
    {
      id: 'jams',
      title: 'OPEN JAMS',
      level: 'All Levels',
      description: 'Practice time, battles, and community vibes. Bring your moves, share your style, and connect with the scene.',
      schedule: 'Sunday, 7:00-10:00 PM',
      duration: '3 hours',
      capacity: 'Open',
      price: '₪30/session',
      color: 'var(--neon-purple)',
      features: ['Free practice time', 'Informal battles', 'Community building', 'Skill sharing', 'Music mixing']
    }
  ];

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="classes" className="py-20 px-4 bg-card-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4"
            style={{
              color: 'var(--neon-orange)',
              textShadow: '8px 8px 0px var(--neon-green)'
            }}
          >
            CLASSES &
          </h2>
          <h2 
            className="font-russo text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            style={{
              color: 'var(--neon-blue)',
              textShadow: '6px 6px 0px var(--neon-yellow)'
            }}
          >
            TRAINING
          </h2>
        </div>

        {/* Class Cards */}
        <div className="grid gap-6 md:gap-8">
          {classes.map((classData) => (
            <div
              key={classData.id}
              className="zero-radius border-4 bg-background transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: classData.color,
                boxShadow: `8px 8px 0px ${classData.color}`
              }}
            >
              {/* Card Header */}
              <button
                onClick={() => toggleCard(classData.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-opacity-5 transition-colors duration-200"
                style={{ backgroundColor: expandedCard === classData.id ? `${classData.color}15` : 'transparent' }}
              >
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 
                        className="font-russo text-xl md:text-2xl lg:text-3xl mb-2"
                        style={{ color: classData.color }}
                      >
                        {classData.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 items-center">
                        <span 
                          className="font-exo text-sm px-3 py-1 zero-radius border-2"
                          style={{
                            color: classData.color,
                            borderColor: classData.color,
                            backgroundColor: 'transparent'
                          }}
                        >
                          {classData.level}
                        </span>
                        <span className="font-roboto text-foreground text-sm md:text-base">
                          {classData.schedule}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span 
                        className="font-exo text-xl md:text-2xl font-bold"
                        style={{ color: classData.color }}
                      >
                        {classData.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  {expandedCard === classData.id ? (
                    <ChevronUp 
                      className="w-8 h-8 transition-transform duration-200"
                      style={{ color: classData.color }}
                    />
                  ) : (
                    <ChevronDown 
                      className="w-8 h-8 transition-transform duration-200"
                      style={{ color: classData.color }}
                    />
                  )}
                </div>
              </button>

              {/* Expandable Content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === classData.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t-4" style={{ borderColor: classData.color }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Description & Features */}
                    <div>
                      <p className="font-roboto text-foreground text-base md:text-lg leading-relaxed mb-6">
                        {classData.description}
                      </p>
                      <div>
                        <h4 className="font-exo font-bold text-foreground mb-3">What You'll Learn:</h4>
                        <ul className="space-y-2">
                          {classData.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div 
                                className="w-2 h-2 zero-radius"
                                style={{ backgroundColor: classData.color }}
                              />
                              <span className="font-roboto text-foreground text-sm md:text-base">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Details & CTA */}
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" style={{ color: classData.color }} />
                          <span className="font-roboto text-foreground text-sm">
                            {classData.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" style={{ color: classData.color }} />
                          <span className="font-roboto text-foreground text-sm">
                            {classData.capacity}
                          </span>
                        </div>
                      </div>

                      <button
                        className="w-full crusher-btn zero-radius border-4 py-4 px-6 flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105"
                        style={{
                          backgroundColor: classData.color,
                          borderColor: classData.color,
                          boxShadow: `6px 6px 0px var(--background)`,
                          color: 'var(--background)'
                        }}
                      >
                        <Calendar className="w-5 h-5" />
                        <span className="font-exo text-lg font-bold">BOOK NOW</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-roboto text-foreground text-lg mb-6">
            Not sure which class is right for you?
          </p>
          <button
            className="crusher-btn zero-radius border-4 py-4 px-8 transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: 'var(--neon-green)',
              borderColor: 'var(--neon-green)',
              boxShadow: '8px 8px 0px var(--neon-orange)',
              color: 'var(--background)'
            }}
          >
            <span className="font-exo text-xl font-bold">FREE TRIAL CLASS</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;