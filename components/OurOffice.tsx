'use client';

import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function OurOffice() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="up" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-heading mb-6" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
              A Calm Space for Healing
            </h2>
            <p className="text-lg sm:text-xl text-body max-w-4xl mx-auto leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif", color: '#4A5F4A' }}>
              My office in Santa Monica is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive. I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          <ScrollAnimation direction="right" delay={100}>
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/office1.jpeg"
                alt="Santa Monica therapy office - calm and grounding space"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={200}>
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/office2.jpeg"
                alt="Santa Monica therapy office - comfortable and private environment"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>

        <div className="bg-background-warm/80 p-6 sm:p-8 rounded-lg border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-primary mb-2">
                In-Person Sessions
              </h3>
              <p className="text-sm sm:text-base text-neutral-700">
                123th Street 45 W, Santa Monica, CA 90401
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-primary mb-2">
                Hybrid Options
              </h3>
              <p className="text-sm sm:text-base text-neutral-700">
                Flexible scheduling to meet your needs
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-primary mb-2">
                Safe & Private
              </h3>
              <p className="text-sm sm:text-base text-neutral-700">
                Confidential and comfortable environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
