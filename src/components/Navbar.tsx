import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Linkedin, 
  Printer, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Mail, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { translations, contactData } from '../data/cvData';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onPrintClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentLang, 
  onSelectLang, 
  onPrintClick 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.experience, href: '#experience' },
    { name: t.skills, href: '#skills' },
    { name: t.bcmDemo, href: '#bcm-lab', highlight: true },
    { name: t.aiTesting, href: '#ai-qa' },
    { name: t.education, href: '#education' },
    { name: t.contact, href: '#contact' }
  ];

  return (
    <header 
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled 
          ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-fuchsia-950/60 shadow-lg shadow-fuchsia-950/20' 
          : 'bg-transparent border-b border-neutral-900/40'
      }`}
    >
      {/* Top micro-banner for LinkedIn & Availability Status */}
      <div className="bg-gradient-to-r from-fuchsia-950 via-purple-950 to-neutral-950 border-b border-fuchsia-800/30 text-xs py-1 px-4 text-neutral-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-emerald-400">Available for Opportunities</span>
            <span className="hidden sm:inline text-neutral-500">•</span>
            <span className="hidden sm:inline text-neutral-400">Automotive EV BCM & Quality Engineering</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={contactData.linkedInUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              id="top-bar-linkedin-link"
              className="flex items-center gap-1.5 text-fuchsia-300 hover:text-fuchsia-100 transition-colors font-medium"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
              <span className="hidden md:inline">LinkedIn Profile</span>
              <span className="md:hidden">LinkedIn</span>
            </a>
            <span className="text-neutral-600">|</span>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-neutral-900/80 rounded-full px-2 py-0.5 border border-fuchsia-900/40">
              <Globe className="w-3 h-3 text-fuchsia-400" />
              {(['en', 'ro', 'it'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  id={`lang-btn-${lang}`}
                  onClick={() => onSelectLang(lang)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-all ${
                    currentLang === lang 
                      ? 'bg-fuchsia-600 text-white shadow-sm shadow-fuchsia-600/50' 
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo / Personal Brand */}
          <a 
            href="#" 
            id="brand-logo-link"
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-600 to-fuchsia-800 p-[1.5px] shadow-lg shadow-fuchsia-500/25 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300 text-lg tracking-wider">
                  MT
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-fuchsia-300 transition-colors">
                  Marius Trif
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold bg-fuchsia-950/80 text-fuchsia-400 border border-fuchsia-800/40">
                  QA
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 hidden sm:block">
                Software Test Engineer • Automotive & IT
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`desktop-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  link.highlight
                    ? 'text-fuchsia-300 hover:text-white bg-fuchsia-950/40 hover:bg-fuchsia-900/60 border border-fuchsia-800/40'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                {link.highlight && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse mr-1.5" />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onPrintClick}
              id="navbar-print-btn"
              title="Print or Save as PDF"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>{t.printCV}</span>
            </button>

            <a
              href={contactData.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-linkedin-btn"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-700 hover:from-fuchsia-500 hover:to-pink-500 shadow-md shadow-fuchsia-600/30 hover:shadow-fuchsia-500/50 transition-all transform hover:-translate-y-0.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>{t.connectLinkedIn}</span>
            </a>
          </div>

          {/* Mobile / Foldable Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onPrintClick}
              id="mobile-print-btn"
              aria-label="Print CV"
              className="p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800"
            >
              <Printer className="w-4 h-4 text-fuchsia-400" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900/90 border border-fuchsia-900/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-fuchsia-400" /> : <Menu className="w-6 h-6 text-neutral-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Foldable Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-neutral-950/98 backdrop-blur-2xl border-b border-fuchsia-900/50 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  link.highlight
                    ? 'text-fuchsia-300 bg-fuchsia-950/40 border border-fuchsia-800/40'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.highlight && <Sparkles className="w-4 h-4 text-fuchsia-400" />}
                  {link.name}
                </span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800/80 flex flex-col gap-2.5">
            <a
              href={contactData.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-drawer-linkedin-cta"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 shadow-lg shadow-fuchsia-600/30"
            >
              <Linkedin className="w-4 h-4" />
              <span>{t.connectLinkedIn}</span>
            </a>

            <div className="flex items-center justify-between px-2 pt-2 text-xs text-neutral-400">
              <span>{contactData.phone}</span>
              <span>{contactData.email}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
