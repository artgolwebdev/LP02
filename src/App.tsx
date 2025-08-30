import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ClassesSection from "./components/ClassesSection";
import PerformancesSection from "./components/PerformancesSection";
import MapSection from "./components/MapSection";
import ContactSection from "./components/ContactSection";

export default function App() {
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
                BREAKDANCE
              </h3>
              <span
                className="font-russo text-xl md:text-2xl"
                style={{
                  color: "var(--neon-blue)",
                  textShadow: "2px 2px 0px var(--neon-yellow)",
                }}
              >
                TEL AVIV
              </span>
            </div>
            <p className="font-roboto text-foreground text-sm">
              © 2024 Breakdance Tel Aviv. All rights reserved.
              Keep breaking, keep growing.
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

      {/* Global Styles */}
      <style jsx global>{`
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--background);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--neon-green);
          border-radius: 0;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--neon-orange);
        }

        /* Selection colors */
        ::selection {
          background: var(--neon-green);
          color: var(--background);
        }

        ::-moz-selection {
          background: var(--neon-green);
          color: var(--background);
        }

        /* Smooth focus outline */
        *:focus {
          outline: 2px solid var(--neon-blue);
          outline-offset: 2px;
        }

        /* Ensure all buttons and interactive elements are accessible */
        button {
          cursor: pointer;
          user-select: none;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* Print styles */
        @media print {
          * {
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          * {
            border-color: ButtonText !important;
          }
        }

        /* Dark mode media query support */
        @media (prefers-color-scheme: dark) {
          :root {
            color-scheme: dark;
          }
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          /* Prevent horizontal scrolling */
          html {
            overflow-x: hidden;
          }

          /* Optimize touch targets */
          button,
          a,
          input,
          textarea {
            min-height: 44px;
            min-width: 44px;
          }

          /* Reduce motion on mobile by default */
          .crusher-btn:active {
            animation-duration: 0.1s;
          }

          /* Better mobile typography */
          body {
            font-size: 16px;
            line-height: 1.5;
          }
        }

        /* Tablet optimization */
        @media (min-width: 768px) and (max-width: 1023px) {
          /* Optimize for tablet viewports */
          .brutalist-shadow {
            box-shadow: 6px 6px 0px var(--neon-green);
          }
        }

        /* Desktop enhancements */
        @media (min-width: 1024px) {
          /* Enhanced hover effects for desktop */
          .crusher-btn:hover {
            transform: scale(1.02) translate(-1px, -1px);
          }

          /* Better desktop spacing */
          section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }

        /* Safe area support for devices with notches */
        @supports (padding: env(safe-area-inset-top)) {
          .safe-top {
            padding-top: env(safe-area-inset-top);
          }

          .safe-bottom {
            padding-bottom: env(safe-area-inset-bottom);
          }
        }
      `}</style>
    </div>
  );
}