'use client';

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background-warm">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Business Information */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-primary mb-4" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif" }}>
              Dr. Maya Reynolds
            </h3>
            <p className="text-sm sm:text-base text-body mb-2" style={{ color: '#4A5F4A' }}>
              123th Street 45 W
            </p>
            <p className="text-sm sm:text-base text-body mb-4" style={{ color: '#4A5F4A' }}>
              Santa Monica, CA 90401
            </p>
            <a
              href="mailto:email@example.com"
              className="text-sm sm:text-base text-body underline hover:text-primary block mb-2"
              style={{ color: '#4A5F4A' }}
            >
              email@example.com
            </a>
            <a
              href="tel:5555555555"
              className="text-sm sm:text-base text-body underline hover:text-primary block"
              style={{ color: '#4A5F4A' }}
            >
              (555) 555-5555
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-heading mb-4" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
              Hours
            </h3>
            <p className="text-sm sm:text-base text-body mb-2" style={{ color: '#4A5F4A' }}>
              Monday - Friday
            </p>
            <p className="text-sm sm:text-base text-body" style={{ color: '#4A5F4A' }}>
              10am - 6pm
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-heading mb-4" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
              Find
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="text-sm sm:text-base text-body underline hover:text-primary block"
                style={{ color: '#4A5F4A' }}
              >
                Home
              </a>
              <a
                href="#contact"
                className="text-sm sm:text-base text-body underline hover:text-primary block"
                style={{ color: '#4A5F4A' }}
              >
                Contact
              </a>
              <a
                href="#blog"
                className="text-sm sm:text-base text-body underline hover:text-primary block"
                style={{ color: '#4A5F4A' }}
              >
                Blog
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/20 pt-8 space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-body">
            <a href="#" className="underline hover:text-primary" style={{ color: '#4A5F4A' }}>
              Privacy & Cookies Policy
            </a>
            <a href="#" className="underline hover:text-primary" style={{ color: '#4A5F4A' }}>
              Good Faith Estimate
            </a>
            <a href="#" className="underline hover:text-primary" style={{ color: '#4A5F4A' }}>
              Website Terms & Conditions
            </a>
            <a href="#" className="underline hover:text-primary" style={{ color: '#4A5F4A' }}>
              Disclaimer
            </a>
          </div>
          <p className="text-center text-sm sm:text-base text-body" style={{ color: '#4A5F4A' }}>
            Website Template Credits: Go Bloom Creative
          </p>
          <p className="text-center text-sm sm:text-base text-body" style={{ color: '#4A5F4A' }}>
            All Rights Reserved © 2024 Dr. Maya Reynolds, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
