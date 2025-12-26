import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ClassesSection from "./components/ClassesSection";
import PerformancesSection from "./components/PerformancesSection";
import MapSection from "./components/MapSection";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <LanguageSwitcher />

      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        {/* Hero Section */}
        <HeroSection onScrollToSection={scrollToSection} />

        {/* About Section */}
        <AboutSection />

        {/* Classes Section */}
        <ClassesSection />

        {/* Performances Section */}
        <PerformancesSection />

        {/* Map Section */}
        <MapSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer
          className="py-8 px-4 bg-card-bg border-t-4"
          style={{ borderColor: "var(--neon-green)" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <h3
                className="font-righteous text-2xl md:text-3xl"
                style={{
                  color: "var(--neon-green)",
                  textShadow: "2px 2px 0px var(--neon-orange)",
                }}
              >
                {t('footer.brand1')}
              </h3>
              <span
                className="font-russo text-xl md:text-2xl"
                style={{
                  color: "var(--neon-blue)",
                  textShadow: "2px 2px 0px var(--neon-yellow)",
                }}
              >
                {t('footer.brand2')}
              </span>
            </div>
            <p className="font-roboto text-foreground text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex justify-center gap-4 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 zero-radius animate-pulse"
                  style={{
                    backgroundColor: `var(--neon-${["green", "orange", "blue", "yellow", "purple"][i]})`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "2s",
                  }}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}