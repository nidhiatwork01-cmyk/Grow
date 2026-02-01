'use client';

export default function Header() {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-heading tracking-tight" style={{ fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: '#1a1a1a' }}>
          Dr. Maya Reynolds
        </div>
        <div className="flex gap-6 sm:gap-8 text-sm sm:text-base">
          <a href="#blog" className="text-body hover:text-primary transition-colors" style={{ color: '#4A5F4A' }}>
            Blog
          </a>
          <a href="#contact" className="text-body hover:text-primary transition-colors" style={{ color: '#4A5F4A' }}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
