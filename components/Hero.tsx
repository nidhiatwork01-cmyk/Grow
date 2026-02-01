'use client';

import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <ScrollAnimation direction="right" delay={100}>
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-t-[80px] sm:rounded-t-[100px] rounded-b-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=1200&q=85"
                  alt="Calm therapy space in Santa Monica"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Text Section */}
          <ScrollAnimation direction="left" delay={200}>
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold text-heading leading-[1.1] tracking-tight" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
                <span className="block">Find Your</span>
                <span className="block">Inner Strength</span>
              </h1>
              <p className="text-xl sm:text-2xl text-body font-normal leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
                Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA
              </p>
              <a
                href="#contact"
                className="inline-block border-2 border-primary text-primary px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 rounded-sm"
              >
                CONNECT WITH ME →
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
