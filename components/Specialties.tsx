'use client';

import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function Specialties() {
  const specialties = [
    {
      title: "Anxiety & Panic",
      description: "If you're feeling constantly worried, emotionally on edge, or experiencing panic, I can help. We'll work together to understand both the emotional and physiological sides of what you're experiencing, using evidence-based methods to help you feel more regulated.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85",
    },
    {
      title: "Trauma",
      description: "I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns. My approach is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=85",
    },
    {
      title: "Burnout & Perfectionism",
      description: "Many high-achieving professionals feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="up" delay={0}>
          <h2 className="text-4xl sm:text-5xl font-display font-semibold text-heading text-center mb-12 sm:mb-16" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
            My Specialties
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {specialties.map((specialty, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 150}>
              <div className="border-2 border-primary/30 rounded-lg p-8 sm:p-10 bg-background-light hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-heading mb-6" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
                  {specialty.title}
                </h3>
                <p className="text-base sm:text-lg text-body mb-8 leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
                  {specialty.description}
                </p>
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
