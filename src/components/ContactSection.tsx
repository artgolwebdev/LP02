import React, { useState } from 'react';
import { Send, MessageCircle, Instagram, Youtube, Facebook, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in real implementation, this would send to a backend
    console.log('Form submitted:', formData);
    // Show success message or handle the submission
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'var(--neon-green)',
      href: 'https://wa.me/972355550123'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      color: 'var(--neon-purple)',
      href: 'https://instagram.com/breakdancetlv'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      color: 'var(--neon-orange)',
      href: 'https://youtube.com/@breakdancetlv'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      color: 'var(--neon-blue)',
      href: 'https://facebook.com/breakdancetlv'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Title with Multi-colored Words */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <h2 
              className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                color: 'var(--neon-green)',
                textShadow: '8px 8px 0px var(--neon-orange)'
              }}
            >
              JOIN
            </h2>
            <h2 
              className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                color: 'var(--neon-yellow)',
                textShadow: '8px 8px 0px var(--neon-purple)'
              }}
            >
              THE
            </h2>
            <h2 
              className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                color: 'var(--neon-orange)',
                textShadow: '8px 8px 0px var(--neon-blue)'
              }}
            >
              CREW
            </h2>
          </div>
          <p 
            className="font-roboto text-xl text-foreground"
            style={{ textShadow: '2px 2px 0px var(--neon-green)' }}
          >
            Ready to start your breaking journey?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div 
                className="zero-radius border-4 p-1"
                style={{
                  borderColor: 'var(--neon-green)',
                  boxShadow: '4px 4px 0px var(--neon-blue)'
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 zero-radius border-none bg-background text-foreground font-roboto text-lg placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              <div 
                className="zero-radius border-4 p-1"
                style={{
                  borderColor: 'var(--neon-orange)',
                  boxShadow: '4px 4px 0px var(--neon-purple)'
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 zero-radius border-none bg-background text-foreground font-roboto text-lg placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              <div 
                className="zero-radius border-4 p-1"
                style={{
                  borderColor: 'var(--neon-blue)',
                  boxShadow: '4px 4px 0px var(--neon-yellow)'
                }}
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="YOUR PHONE"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 zero-radius border-none bg-background text-foreground font-roboto text-lg placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              <div 
                className="zero-radius border-4 p-1"
                style={{
                  borderColor: 'var(--neon-purple)',
                  boxShadow: '4px 4px 0px var(--neon-green)'
                }}
              >
                <textarea
                  name="message"
                  placeholder="TELL US ABOUT YOUR INTEREST IN BREAKDANCE..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full p-4 zero-radius border-none bg-background text-foreground font-roboto text-lg placeholder:text-gray-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full crusher-btn zero-radius border-4 py-6 px-8 flex items-center justify-center gap-4 transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: 'var(--neon-green)',
                  borderColor: 'var(--neon-green)',
                  boxShadow: '8px 8px 0px var(--neon-orange)',
                  color: 'var(--background)'
                }}
              >
                <Send className="w-6 h-6" />
                <span className="font-exo text-xl font-bold">SEND MESSAGE</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div 
              className="zero-radius border-4 p-8 bg-card-bg text-center"
              style={{
                borderColor: 'var(--neon-green)',
                boxShadow: '8px 8px 0px var(--neon-green)'
              }}
            >
              <MessageCircle 
                className="w-16 h-16 mx-auto mb-4"
                style={{ color: 'var(--neon-green)' }}
              />
              <h3 
                className="font-russo text-2xl mb-4"
                style={{
                  color: 'var(--neon-green)',
                  textShadow: '2px 2px 0px var(--neon-yellow)'
                }}
              >
                QUICK CHAT?
              </h3>
              <p className="font-roboto text-foreground mb-6">
                Get instant answers to your questions about classes, schedules, and more.
              </p>
              <button
                className="crusher-btn zero-radius border-4 py-3 px-6 transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: 'var(--neon-green)',
                  borderColor: 'var(--neon-green)',
                  boxShadow: '6px 6px 0px var(--neon-yellow)',
                  color: 'var(--background)'
                }}
              >
                <span className="font-exo text-lg font-bold">WHATSAPP US</span>
              </button>
            </div>

            {/* Social Media Links */}
            <div 
              className="zero-radius border-4 p-8 bg-card-bg"
              style={{
                borderColor: 'var(--neon-purple)',
                boxShadow: '8px 8px 0px var(--neon-purple)'
              }}
            >
              <h3 
                className="font-russo text-2xl mb-6 text-center"
                style={{
                  color: 'var(--neon-purple)',
                  textShadow: '2px 2px 0px var(--neon-orange)'
                }}
              >
                FOLLOW THE SCENE
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    className="crusher-btn zero-radius border-4 p-4 flex flex-col items-center gap-2 transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: social.color,
                      borderColor: social.color,
                      boxShadow: `4px 4px 0px var(--background)`,
                      color: 'var(--background)'
                    }}
                  >
                    {social.icon}
                    <span className="font-exo font-bold text-sm">
                      {social.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div 
              className="zero-radius border-4 p-8 bg-card-bg"
              style={{
                borderColor: 'var(--neon-blue)',
                boxShadow: '8px 8px 0px var(--neon-blue)'
              }}
            >
              <h3 
                className="font-russo text-2xl mb-6"
                style={{
                  color: 'var(--neon-blue)',
                  textShadow: '2px 2px 0px var(--neon-green)'
                }}
              >
                OTHER WAYS TO REACH US
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail 
                    className="w-5 h-5"
                    style={{ color: 'var(--neon-blue)' }}
                  />
                  <span className="font-roboto text-foreground">
                    info@breakdancetlv.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle 
                    className="w-5 h-5"
                    style={{ color: 'var(--neon-green)' }}
                  />
                  <span className="font-roboto text-foreground">
                    +972-3-555-0123
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <p 
            className="font-exo text-lg"
            style={{
              color: 'var(--neon-yellow)',
              textShadow: '2px 2px 0px var(--neon-purple)'
            }}
          >
            LEARN. PERFORM. EXPERIENCE THE CULTURE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;