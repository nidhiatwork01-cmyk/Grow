'use client';

import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function SupportSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-background-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <ScrollAnimation direction="right" delay={100}>
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=85"
                alt="Supportive therapy space"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* Text Section */}
          <ScrollAnimation direction="left" delay={200}>
            <div className="bg-background-light/90 p-8 sm:p-10 lg:p-14 rounded-lg flex flex-col justify-center space-y-8 h-full border border-primary/10 shadow-sm">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-heading leading-tight" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
                You don't have to do this all <span className="italic">alone.</span>
              </h2>
              <p className="text-lg sm:text-xl text-body font-medium" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
                My work often focuses on:
              </p>
              <ul className="space-y-4 text-base sm:text-lg text-body font-normal" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Anxiety, panic, and constant worry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Trauma and the lingering effects of past experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Professional burnout and perfectionism</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Feeling disconnected after years of pushing through stress</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>High internal pressure and difficulty slowing down</span>
                </li>
              </ul>
              <p className="text-lg sm:text-xl text-body pt-6 font-normal leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
                I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
              </p>
              <a
                href="#contact"
                className="inline-block border-2 border-primary text-primary px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 mt-6 rounded-sm"
              >
                WORK WITH ME →
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
