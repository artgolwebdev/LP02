import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

const MapSection: React.FC = () => {
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
    <section id="map" className="py-20 px-4 bg-card-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4"
            style={{
              color: 'var(--neon-blue)',
              textShadow: '8px 8px 0px var(--neon-green)'
            }}
          >
            FIND US IN
          </h2>
          <h2 
            className="font-russo text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            style={{
              color: 'var(--neon-orange)',
              textShadow: '6px 6px 0px var(--neon-purple)'
            }}
          >
            TEL AVIV
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="space-y-8">
            <div 
              className="zero-radius border-4 overflow-hidden h-96 bg-background flex items-center justify-center relative group hover:scale-105 transition-transform duration-300"
              style={{
                borderColor: 'var(--neon-green)',
                boxShadow: '8px 8px 0px var(--neon-orange)'
              }}
            >
              {/* Placeholder map - in real implementation, you'd use Google Maps or similar */}
              <div className="text-center">
                <MapPin 
                  className="w-16 h-16 mx-auto mb-4 animate-bounce"
                  style={{ color: 'var(--neon-green)' }}
                />
                <p 
                  className="font-exo text-xl mb-2"
                  style={{ color: 'var(--neon-green)' }}
                >
                  BREAKDANCE STUDIO
                </p>
                <p className="font-roboto text-foreground">
                  123 Dizengoff Street<br />
                  Tel Aviv, Israel
                </p>
                <button 
                  className="crusher-btn zero-radius border-4 px-6 py-2 mt-4 flex items-center gap-2 mx-auto transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--neon-blue)',
                    borderColor: 'var(--neon-blue)',
                    boxShadow: '4px 4px 0px var(--neon-yellow)',
                    color: 'var(--background)'
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-exo text-sm font-bold">OPEN IN MAPS</span>
                </button>
              </div>
            </div>

            {/* Live Status */}
            <div 
              className="zero-radius border-4 p-6 flex items-center justify-between"
              style={{
                borderColor: isOpen ? 'var(--neon-green)' : 'var(--neon-orange)',
                boxShadow: `6px 6px 0px ${isOpen ? 'var(--neon-green)' : 'var(--neon-orange)'}`,
                backgroundColor: 'var(--background)'
              }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className={`w-4 h-4 zero-radius ${isOpen ? 'animate-pulse' : ''}`}
                  style={{ 
                    backgroundColor: isOpen ? 'var(--neon-green)' : 'var(--neon-orange)'
                  }}
                />
                <div>
                  <p 
                    className="font-exo font-bold text-lg"
                    style={{ color: isOpen ? 'var(--neon-green)' : 'var(--neon-orange)' }}
                  >
                    {isOpen ? 'STUDIO OPEN NOW' : 'STUDIO CLOSED'}
                  </p>
                  <p className="font-roboto text-foreground text-sm">
                    {isOpen ? 'Drop in for open training!' : 'Check schedule for next session'}
                  </p>
                </div>
              </div>
              <Clock 
                className="w-8 h-8"
                style={{ color: isOpen ? 'var(--neon-green)' : 'var(--neon-orange)' }}
              />
            </div>
          </div>

          {/* Studio Information */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div 
              className="zero-radius border-4 p-8 bg-background"
              style={{
                borderColor: 'var(--neon-purple)',
                boxShadow: '8px 8px 0px var(--neon-purple)'
              }}
            >
              <h3 
                className="font-russo text-2xl md:text-3xl mb-6"
                style={{
                  color: 'var(--neon-purple)',
                  textShadow: '2px 2px 0px var(--neon-yellow)'
                }}
              >
                STUDIO INFO
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin 
                    className="w-6 h-6 mt-1"
                    style={{ color: 'var(--neon-green)' }}
                  />
                  <div>
                    <p className="font-exo font-bold text-foreground">Address</p>
                    <p className="font-roboto text-foreground">
                      123 Dizengoff Street<br />
                      Tel Aviv-Yafo, 6423922<br />
                      Israel
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone 
                    className="w-6 h-6 mt-1"
                    style={{ color: 'var(--neon-orange)' }}
                  />
                  <div>
                    <p className="font-exo font-bold text-foreground">Phone</p>
                    <p className="font-roboto text-foreground">+972-3-555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail 
                    className="w-6 h-6 mt-1"
                    style={{ color: 'var(--neon-blue)' }}
                  />
                  <div>
                    <p className="font-exo font-bold text-foreground">Email</p>
                    <p className="font-roboto text-foreground">info@breakdancetlv.com</p>
                  </div>
                </div>

                <button
                  className="w-full crusher-btn zero-radius border-4 py-4 px-6 flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--neon-yellow)',
                    borderColor: 'var(--neon-yellow)',
                    boxShadow: '6px 6px 0px var(--neon-purple)',
                    color: 'var(--background)'
                  }}
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-exo text-lg font-bold">CALL NOW</span>
                </button>
              </div>
            </div>

            {/* Schedule */}
            <div 
              className="zero-radius border-4 p-8 bg-background"
              style={{
                borderColor: 'var(--neon-yellow)',
                boxShadow: '8px 8px 0px var(--neon-yellow)'
              }}
            >
              <h3 
                className="font-russo text-2xl md:text-3xl mb-6"
                style={{
                  color: 'var(--neon-yellow)',
                  textShadow: '2px 2px 0px var(--neon-blue)'
                }}
              >
                WEEKLY SCHEDULE
              </h3>

              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div 
                    key={item.day}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 zero-radius border-2 hover:scale-105 transition-transform duration-200"
                    style={{
                      borderColor: 'var(--border-color)',
                      backgroundColor: index % 2 === 0 ? 'var(--card-bg)' : 'transparent'
                    }}
                  >
                    <div className="mb-2 md:mb-0">
                      <p 
                        className="font-exo font-bold"
                        style={{ color: 'var(--neon-green)' }}
                      >
                        {item.day}
                      </p>
                      <p className="font-roboto text-foreground text-sm">
                        {item.classes}
                      </p>
                    </div>
                    <p 
                      className="font-roboto font-bold"
                      style={{ color: 'var(--neon-orange)' }}
                    >
                      {item.hours}
                    </p>
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