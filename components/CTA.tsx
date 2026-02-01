'use client';

import ScrollAnimation from './ScrollAnimation';

export default function CTA() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <ScrollAnimation direction="up" delay={0}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white leading-tight" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif" }}>
            Get started today.
          </h2>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={100}>
          <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
            If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit. Contact me to book your first session.
          </p>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={200}>
          <a
            href="#contact"
            className="inline-block border-2 border-white text-white px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 rounded-sm mt-4"
          >
            GET IN TOUCH
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
}
