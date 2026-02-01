'use client';

import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function AboutSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <ScrollAnimation direction="right" delay={100}>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-heading leading-tight" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
                Hi, I'm Dr. Maya Reynolds.
              </h2>
              <p className="text-lg sm:text-xl text-body leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
                I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              <p className="text-lg sm:text-xl text-body leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.
              </p>
              <a
                href="#contact"
                className="inline-block border-2 border-primary text-primary px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 rounded-sm"
              >
                LET'S CHAT →
              </a>
            </div>
          </ScrollAnimation>

          {/* Image Section */}
          <ScrollAnimation direction="left" delay={200}>
            <div className="relative">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-t-[80px] sm:rounded-t-[100px] rounded-b-lg overflow-hidden">
                <Image
                  src="/images/Dr. Maya Reynolds.png"
                  alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/office1.jpeg"
                  alt="Therapy office space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
