import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

const MapSection: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Simulate checking if studio is currently open
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hour = now.getHours();

      // Studio hours: Mon-Fri 16:00-22:00, Sat 10:00-18:00, Sun 18:00-22:00
      let open = false;

      if (day >= 1 && day <= 5) { // Monday to Friday
        open = hour >= 16 && hour < 22;
      } else if (day === 6) { // Saturday
        open = hour >= 10 && hour < 18;
      } else if (day === 0) { // Sunday
        open = hour >= 18 && hour < 22;
      }

      setIsOpen(open);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const schedule = [
    { day: 'MONDAY', hours: '4:00 PM - 10:00 PM', classes: 'Beginner Breaking' },
    { day: 'TUESDAY', hours: '7:30 PM - 9:00 PM', classes: 'Intermediate Techniques' },
    { day: 'WEDNESDAY', hours: '7:00 PM - 9:30 PM', classes: 'Beginner + Advanced Power' },
    { day: 'THURSDAY', hours: '7:30 PM - 9:00 PM', classes: 'Intermediate Techniques' },
    { day: 'FRIDAY', hours: '8:00 PM - 9:30 PM', classes: 'Advanced Power Moves' },
    { day: 'SATURDAY', hours: '10:00 AM - 11:30 AM', classes: 'Kids Classes' },
    { day: 'SUNDAY', hours: '7:00 PM - 10:00 PM', classes: 'Open Jams' }
  ];

  return (
    <section id="map" className="py-20 px-4 bg-card-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[var(--neon-purple)] rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[var(--neon-blue)] rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title - Animated */}
        <div className="text-center mb-16 group">
          <h2
            className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 text-[var(--neon-blue)] transition-all duration-300 group-hover:scale-105"
            style={{
              textShadow: '8px 8px 0px var(--neon-green)'
            }}
          >
            {t('map.findUs')}
          </h2>
          <h2
            className="font-russo text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--neon-orange)] transition-all duration-300 group-hover:scale-105"
            style={{
              textShadow: '6px 6px 0px var(--neon-purple)'
            }}
          >
            {t('map.telAviv')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Column */}
          <div className="space-y-8">
            <div
              className="zero-radius border-4 overflow-hidden h-96 bg-background flex items-center justify-center relative group hover:scale-[1.02] transition-transform duration-300 border-[var(--neon-green)] shadow-[8px_8px_0px_var(--neon-orange)]"
            >
              {/* Map Placeholder Content */}
              <div className="text-center relative z-10 p-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 flex items-center justify-center bg-black/50 border-[var(--neon-green)] group-hover:border-[var(--neon-yellow)] transition-colors duration-300">
                  <MapPin className="w-10 h-10 animate-bounce text-[var(--neon-green)] group-hover:text-[var(--neon-yellow)]" />
                </div>
                <p className="font-exo text-2xl mb-2 font-bold text-[var(--neon-green)]">
                  {t('map.studioName')}
                </p>
                <p className="font-roboto text-lg text-foreground mb-6 whitespace-pre-line">
                  {t('map.addressShort')}
                </p>
                <button
                  className="crusher-btn zero-radius border-4 px-8 py-3 flex items-center gap-3 mx-auto transition-all duration-200 hover:scale-110 bg-[var(--neon-blue)] border-[var(--neon-blue)] text-background shadow-[4px_4px_0px_var(--neon-yellow)] group-hover:shadow-[6px_6px_0px_var(--neon-green)] relative overflow-hidden"
                >
                  <ExternalLink className="w-5 h-5 relative z-10" />
                  <span className="font-exo text-base font-bold relative z-10">{t('map.openMaps')}</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white" />
                </button>
              </div>

              {/* Grid Background Effect */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(var(--neon-green) 1px, transparent 1px), linear-gradient(90deg, var(--neon-green) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />
            </div>

            {/* Live Status - Enhanced Visuals */}
            <div
              className="relative overflow-hidden zero-radius border-4 p-6 flex items-center justify-between transition-all duration-500 hover:scale-[1.02] bg-background"
              style={{
                borderColor: isOpen ? 'var(--neon-green)' : 'var(--neon-purple)',
                boxShadow: `8px 8px 0px ${isOpen ? 'var(--neon-green)' : 'var(--neon-purple)'}`,
              }}
            >
              <div className="flex items-center gap-5 relative z-10">
                <div className="relative">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: isOpen ? 'var(--neon-green)' : 'var(--neon-purple)',
                      boxShadow: `0 0 15px ${isOpen ? 'var(--neon-green)' : 'var(--neon-purple)'}`
                    }}
                  />
                  <div
                    className="absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-75"
                    style={{
                      backgroundColor: isOpen ? 'var(--neon-green)' : 'var(--neon-purple)'
                    }}
                  />
                </div>

                <div>
                  <p
                    className="font-exo font-black text-2xl tracking-wide"
                    style={{
                      color: isOpen ? 'var(--neon-green)' : 'var(--neon-purple)',
                      textShadow: `0 0 10px ${isOpen ? 'rgba(0,255,136,0.3)' : 'rgba(188,19,254,0.3)'}`
                    }}
                  >
                    {isOpen ? t('status.open') : t('status.closed')}
                  </p>
                  <p className="font-roboto text-foreground font-medium flex items-center gap-2">
                    {isOpen ? (
                      <>🔥 {t('status.openMsg')}</>
                    ) : (
                      <>💤 {t('status.closedMsg')}</>
                    )}
                  </p>
                </div>
              </div>

              <div
                className={`p-3 border-2 zero-radius transition-colors duration-300 ${isOpen ? 'bg-[var(--neon-green)] text-black' : 'bg-transparent text-[var(--neon-purple)] border-[var(--neon-purple)]'}`}
              >
                <Clock className={`w-8 h-8 ${!isOpen && 'animate-pulse'}`} />
              </div>

              {/* Status Background Gradient */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  background: `linear-gradient(45deg, ${isOpen ? 'var(--neon-green)' : 'var(--neon-purple)'}, transparent)`
                }}
              />
            </div>
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div
              className="zero-radius border-4 p-8 bg-background border-[var(--neon-purple)] shadow-[8px_8px_0px_var(--neon-purple)] group hover:-translate-y-1 transition-transform duration-300"
            >
              <h3
                className="font-russo text-3xl md:text-4xl mb-8 text-[var(--neon-purple)] flex items-center gap-3"
                style={{ textShadow: '2px 2px 0px var(--neon-yellow)' }}
              >
                <span className="text-4xl">⚡</span> {t('map.studioInfo')}
              </h3>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: t('map.addressLabel'), value: ['123 Dizengoff Street', 'Tel Aviv-Yafo, Israel'], color: 'var(--neon-green)' },
                  { icon: Phone, label: t('map.phoneLabel'), value: ['+972-3-555-0123'], color: 'var(--neon-orange)' },
                  { icon: Mail, label: t('map.emailLabel'), value: ['info@breakdancetlv.com'], color: 'var(--neon-blue)' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 p-4 border-2 border-transparent hover:border-gray-800 transition-colors duration-300 zero-radius">
                    <item.icon
                      className="w-8 h-8 mt-1 shrink-0"
                      style={{ color: item.color, filter: `drop-shadow(0 0 5px ${item.color})` }}
                    />
                    <div>
                      <p className="font-exo font-bold text-foreground text-sm tracking-wider opacity-70 mb-1">{item.label}</p>
                      {item.value.map((line, i) => (
                        <p key={i} className="font-roboto text-lg font-medium text-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  className="w-full crusher-btn zero-radius border-4 py-4 px-6 flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--neon-orange)] hover:border-[var(--neon-orange)] hover:text-white hover:shadow-[8px_8px_0px_var(--neon-green)] bg-[var(--neon-yellow)] border-[var(--neon-yellow)] text-background shadow-[6px_6px_0px_var(--neon-purple)] mt-6 group/btn"
                >
                  <Phone className="w-6 h-6 group-hover/btn:animate-shake" />
                  <span className="font-exo text-xl font-black tracking-wider">{t('map.callNow')}</span>
                </button>
              </div>
            </div>

            {/* Schedule */}
            <div
              className="zero-radius border-4 p-8 bg-background border-[var(--neon-yellow)] shadow-[8px_8px_0px_var(--neon-yellow)] hover:-translate-y-1 transition-transform duration-300"
            >
              <h3
                className="font-russo text-3xl md:text-4xl mb-8 text-[var(--neon-yellow)]"
                style={{ textShadow: '2px 2px 0px var(--neon-blue)' }}
              >
                📅 {t('map.scheduleTitle')}
              </h3>

              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div
                    key={item.day}
                    className="group/item flex flex-col md:flex-row md:items-center justify-between p-4 zero-radius border-2 border-transparent hover:border-[var(--neon-blue)] hover:bg-[var(--card-bg)] transition-all duration-200 cursor-default"
                  >
                    <div className="mb-2 md:mb-0">
                      <p className="font-exo font-black text-lg text-[var(--neon-green)] group-hover/item:translate-x-1 transition-transform">
                        {item.day}
                      </p>
                      <p className="font-roboto text-foreground text-sm opacity-80 group-hover/item:opacity-100">
                        {item.classes}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--neon-orange)] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      <p className="font-roboto font-bold text-[var(--neon-orange)] whitespace-nowrap">
                        {item.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;