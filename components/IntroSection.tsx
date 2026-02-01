'use client';

import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function IntroSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <ScrollAnimation direction="right" delay={100}>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-heading leading-tight" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
                You don't have to navigate this alone.
              </h2>
              <p className="text-lg sm:text-xl text-body leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. You may feel "functional" on the outside while quietly struggling with constant worry, tension in your body, difficulty sleeping, or a sense that you're always bracing for something to go wrong.
              </p>
              <p className="text-lg sm:text-xl text-body leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
                Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
              </p>
              <a
                href="#contact"
                className="inline-block text-body font-semibold hover:text-primary transition-colors text-lg sm:text-xl mt-4"
                style={{ color: '#4A5F4A' }}
              >
                GET IN TOUCH →
              </a>
            </div>
          </ScrollAnimation>

          {/* Image Section */}
          <ScrollAnimation direction="left" delay={200}>
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=85"
                alt="Therapy workspace in Santa Monica"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
