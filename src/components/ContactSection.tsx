import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, MessageCircle, Instagram, Youtube, Facebook, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
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
    alert(t('contact.form.success'));
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
              className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-all duration-300 hover:scale-110 cursor-pointer text-[var(--neon-green)]"
              style={{
                textShadow: '8px 8px 0px var(--neon-orange)'
              }}
            >
              {t('contact.join')}
            </h2>
            <h2
              className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-all duration-300 hover:scale-110 cursor-pointer text-[var(--neon-yellow)]"
              style={{
                textShadow: '8px 8px 0px var(--neon-purple)'
              }}
            >
              {t('contact.the')}
            </h2>
            <h2
              className="font-righteous text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-all duration-300 hover:scale-110 cursor-pointer text-[var(--neon-orange)]"
              style={{
                textShadow: '8px 8px 0px var(--neon-blue)'
              }}
            >
              {t('contact.crew')}
            </h2>
          </div>
          <p
            className="font-roboto text-xl text-foreground"
            style={{ textShadow: '2px 2px 0px var(--neon-green)' }}
          >
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div
                className="zero-radius border-4 p-1 border-[var(--neon-green)] shadow-[4px_4px_0px_var(--neon-blue)]"
              >
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 zero-radius border-none bg-background text-foreground font-roboto text-lg placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              <div
                className="zero-radius border-4 p-1 border-[var(--neon-orange)] shadow-[4px_4px_0px_var(--neon-purple)]"
              >
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 zero-radius border-none bg-background text-foreground font-roboto text-lg placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              <div
                className="zero-radius border-4 p-1 border-[var(--neon-blue)] shadow-[4px_4px_0px_var(--neon-yellow)]"
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('contact.form.phone')}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 zero-radius border-none bg-background text-foreground font-roboto text-lg placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              <div
                className="zero-radius border-4 p-1 border-[var(--neon-purple)] shadow-[4px_4px_0px_var(--neon-green)]"
              >
                <textarea
                  name="message"
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full p-4 zero-radius border-none bg-background text-foreground font-roboto text-lg placeholder:text-gray-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full crusher-btn zero-radius border-4 py-6 px-8 flex items-center justify-center gap-4 transition-all duration-200 hover:scale-105 bg-[var(--neon-green)] border-[var(--neon-green)] text-background shadow-[8px_8px_0px_var(--neon-orange)]"
              >
                <Send className="w-6 h-6" />
                <span className="font-exo text-xl font-bold">{t('contact.form.send')}</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div
              className="zero-radius border-4 p-8 bg-card-bg text-center border-[var(--neon-green)] shadow-[8px_8px_0px_var(--neon-green)]"
            >
              <MessageCircle
                className="w-16 h-16 mx-auto mb-4 text-[var(--neon-green)]"
              />
              <h3
                className="font-russo text-2xl mb-4 text-[var(--neon-green)]"
                style={{
                  textShadow: '2px 2px 0px var(--neon-yellow)'
                }}
              >
                {t('contact.chat.title')}
              </h3>
              <p className="font-roboto text-foreground mb-6">
                {t('contact.chat.text')}
              </p>
              <button
                className="crusher-btn zero-radius border-4 py-3 px-6 transition-all duration-200 hover:scale-105 bg-[var(--neon-green)] border-[var(--neon-green)] text-background shadow-[6px_6px_0px_var(--neon-yellow)]"
              >
                <span className="font-exo text-lg font-bold">{t('contact.chat.btn')}</span>
              </button>
            </div>

            {/* Social Media Links */}
            <div
              className="zero-radius border-4 p-8 bg-card-bg border-[var(--neon-purple)] shadow-[8px_8px_0px_var(--neon-purple)]"
            >
              <h3
                className="font-russo text-2xl mb-6 text-center text-[var(--neon-purple)]"
                style={{
                  textShadow: '2px 2px 0px var(--neon-orange)'
                }}
              >
                {t('contact.social.title')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    className="crusher-btn zero-radius border-4 p-4 flex flex-col items-center gap-2 transition-all duration-200 hover:scale-105 text-background shadow-[4px_4px_0px_var(--background)]"
                    style={{
                      backgroundColor: social.color,
                      borderColor: social.color,
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
              className="zero-radius border-4 p-8 bg-card-bg border-[var(--neon-blue)] shadow-[8px_8px_0px_var(--neon-blue)]"
            >
              <h3
                className="font-russo text-2xl mb-6 text-[var(--neon-blue)]"
                style={{
                  textShadow: '2px 2px 0px var(--neon-green)'
                }}
              >
                {t('contact.other.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail
                    className="w-5 h-5 text-[var(--neon-blue)]"
                  />
                  <span className="font-roboto text-foreground">
                    info@breakdancetlv.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle
                    className="w-5 h-5 text-[var(--neon-green)]"
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
            className="font-exo text-lg text-[var(--neon-yellow)]"
            style={{
              textShadow: '2px 2px 0px var(--neon-purple)'
            }}
          >
            {t('contact.footerMsg')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;