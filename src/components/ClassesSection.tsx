import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const classes: ClassData[] = [
    {
      id: 'beginner',
      title: t('classes.items.beginner.title'),
      level: t('classes.items.beginner.level'),
      description: t('classes.items.beginner.desc'),
      schedule: t('classes.items.beginner.schedule'),
      duration: t('classes.items.beginner.duration'),
      capacity: t('classes.items.beginner.capacity'),
      price: t('classes.items.beginner.price'),
      color: 'var(--neon-green)',
      features: t('classes.items.beginner.features', { returnObjects: true }) as string[]
    },
    {
      id: 'intermediate',
      title: t('classes.items.intermediate.title'),
      level: t('classes.items.intermediate.level'),
      description: t('classes.items.intermediate.desc'),
      schedule: t('classes.items.intermediate.schedule'),
      duration: t('classes.items.intermediate.duration'),
      capacity: t('classes.items.intermediate.capacity'),
      price: t('classes.items.intermediate.price'),
      color: 'var(--neon-orange)',
      features: t('classes.items.intermediate.features', { returnObjects: true }) as string[]
    },
    {
      id: 'advanced',
      title: t('classes.items.advanced.title'),
      level: t('classes.items.advanced.level'),
      description: t('classes.items.advanced.desc'),
      schedule: t('classes.items.advanced.schedule'),
      duration: t('classes.items.advanced.duration'),
      capacity: t('classes.items.advanced.capacity'),
      price: t('classes.items.advanced.price'),
      color: 'var(--neon-blue)',
      features: t('classes.items.advanced.features', { returnObjects: true }) as string[]
    },
    {
      id: 'kids',
      title: t('classes.items.kids.title'),
      level: t('classes.items.kids.level'),
      description: t('classes.items.kids.desc'),
      schedule: t('classes.items.kids.schedule'),
      duration: t('classes.items.kids.duration'),
      capacity: t('classes.items.kids.capacity'),
      price: t('classes.items.kids.price'),
      color: 'var(--neon-yellow)',
      features: t('classes.items.kids.features', { returnObjects: true }) as string[]
    },
    {
      id: 'jams',
      title: t('classes.items.jams.title'),
      level: t('classes.items.jams.level'),
      description: t('classes.items.jams.desc'),
      schedule: t('classes.items.jams.schedule'),
      duration: t('classes.items.jams.duration'),
      capacity: t('classes.items.jams.capacity'),
      price: t('classes.items.jams.price'),
      color: 'var(--neon-purple)',
      features: t('classes.items.jams.features', { returnObjects: true }) as string[]
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
            className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 text-[var(--neon-orange)]"
            style={{
              textShadow: '8px 8px 0px var(--neon-green)'
            }}
          >
            {t('classes.title1')}
          </h2>
          <h2
            className="font-russo text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--neon-blue)]"
            style={{
              textShadow: '6px 6px 0px var(--neon-yellow)'
            }}
          >
            {t('classes.title2')}
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
                          className="font-exo text-sm px-3 py-1 zero-radius border-2 bg-transparent"
                          style={{
                            color: classData.color,
                            borderColor: classData.color,
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
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCard === classData.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 border-t-4" style={{ borderColor: classData.color }}>
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    {/* Description & Features */}
                    <div className="flex flex-col h-full">
                      <p className="font-roboto text-foreground text-base md:text-lg leading-relaxed mb-6">
                        {classData.description}
                      </p>
                      <div className="flex-1">
                        <h4 className="font-exo font-bold text-foreground mb-3">{t('classes.learnTitle')}</h4>
                        <ul className="space-y-2">
                          {(Array.isArray(classData.features) ? classData.features : []).map((feature, index) => (
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
                    <div className="flex flex-col justify-center h-full space-y-6">
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
                        className="w-full crusher-btn zero-radius border-4 py-4 px-6 flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105 text-background"
                        style={{
                          backgroundColor: classData.color,
                          borderColor: classData.color,
                          boxShadow: `6px 6px 0px var(--background)`,
                        }}
                      >
                        <Calendar className="w-5 h-5" />
                        <span className="font-exo text-lg font-bold">{t('classes.bookNow')}</span>
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
            {t('classes.notSure')}
          </p>
          <button
            className="crusher-btn zero-radius border-4 py-4 px-8 transition-all duration-200 hover:scale-105 bg-[var(--neon-green)] border-[var(--neon-green)] text-background shadow-[8px_8px_0px_var(--neon-orange)]"
          >
            <span className="font-exo text-xl font-bold">{t('classes.freeTrial')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;