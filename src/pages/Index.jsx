
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';

const Index = () => {
  // Initialize smooth parallax scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.classList.contains('parallax-slow') 
          ? 0.2 
          : element.classList.contains('parallax-medium') 
            ? 0.4 
            : 0.6;
            
        const yOffset = scrollTop * speed;
        // Use setAttribute instead of directly setting style
        element.setAttribute('style', `transform: translateY(${yOffset}px)`);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        
        {/* Testimonials Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in-sequence">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What students are saying</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of college organizations using our platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card rounded-2xl p-8 card-3d-effect">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex text-amber-400 mb-4">
                        {[...Array(5)].map((_, index) => (
                          <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <p className="italic text-foreground/90 mb-4">
                        "CampusEvents has completely transformed how our student council plans and manages events. The AI features save us so much time!"
                      </p>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-semibold">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Student {i}</p>
                        <p className="text-sm text-muted-foreground">University {i}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center fade-in-sequence">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-8">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your college events?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of college organizations already using CampusEvents to plan and manage successful events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/signup" className="btn-primary">
                  Start Free Trial
                </a>
                <a href="/demo" className="px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-colors duration-300">
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
