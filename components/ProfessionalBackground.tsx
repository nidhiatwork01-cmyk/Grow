'use client';

import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    {
      title: "Education",
      content: "PsyD (Doctor of Psychology) with specialized training in cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
    },
    {
      title: "Licensure",
      content: "Licensed Clinical Psychologist in California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.",
    },
    {
      title: "Approach",
      content: "I integrate evidence-based methods including CBT, EMDR, mindfulness-based practices, and body-oriented techniques. My approach is warm, collaborative, and grounded, with sessions structured enough to feel supportive while leaving space for reflection and depth.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-background-light">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation direction="up" delay={0}>
          <h2 className="text-4xl sm:text-5xl font-display font-semibold text-heading text-center mb-12 sm:mb-16" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
            My Professional Background
          </h2>
        </ScrollAnimation>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 150}>
              <div className="border-b border-primary/30 bg-background-light/50 p-4 rounded-lg mb-2">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4"
                >
                  <span className="text-lg sm:text-xl font-medium text-heading" style={{ color: '#1a1a1a' }}>
                    {category.title}
                  </span>
                  <span className="text-2xl text-heading ml-4" style={{ color: '#1a1a1a' }}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="text-sm sm:text-base text-body pb-4 leading-relaxed" style={{ color: '#4A5F4A' }}>
                    {category.content}
                  </p>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
