'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "Yes, I accept most major insurance plans. Please contact me to verify your specific coverage and discuss payment options.",
    },
    {
      question: "What are your rates?",
      answer: "Session rates vary based on the type of service and your insurance coverage. I offer a sliding scale for those who qualify. Please reach out for detailed pricing information.",
    },
    {
      question: "Do you have any openings?",
      answer: "I currently have limited availability for new clients. Please contact me to discuss scheduling options and to see if we can find a time that works for both of us.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <ScrollAnimation direction="right" delay={100}>
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-t-[80px] sm:rounded-t-[100px] rounded-b-lg overflow-hidden">
              <Image
               src="/images/photo_2026-02-01_21-24-09.jpg"
              alt="Therapy session space"
              fill
               className="object-cover"
                priority
             />
            </div>
          </ScrollAnimation>

          {/* FAQs Section */}
          <ScrollAnimation direction="left" delay={200}>
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-display font-semibold text-heading mb-10" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
                FAQs
              </h2>
              {faqs.map((faq, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 100}>
                  <div className="border-b border-primary/30 pb-4 bg-background-light/50 p-4 rounded-lg">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex justify-between items-center text-left py-4"
                    >
                      <span className="text-base sm:text-lg font-medium text-heading" style={{ color: '#1a1a1a' }}>
                        {faq.question}
                      </span>
                      <span className="text-2xl text-heading ml-4" style={{ color: '#1a1a1a' }}>
                        {openIndex === index ? '−' : '+'}
                      </span>
                    </button>
                    {openIndex === index && (
                      <p className="text-sm sm:text-base text-body pb-4 leading-relaxed" style={{ color: '#4A5F4A' }}>
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
