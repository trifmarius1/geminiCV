import React from 'react';
import { Linkedin, Mail, Phone, MapPin, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { contactData } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-fuchsia-950/80 py-12 text-neutral-400 text-xs no-print relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 p-[1.5px] shadow-md shadow-fuchsia-600/30">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center font-bold text-white text-sm">
                MT
              </div>
            </div>
            <div>
              <p className="font-bold text-white text-sm">Marius Trif</p>
              <p className="text-neutral-500 text-[11px]">
                Software Test Engineer • Automotive EV BCM & AI QA
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href={contactData.linkedInUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile in a new tab"
              className="inline-flex items-center gap-1.5 text-fuchsia-300 hover:text-white transition-colors cursor-pointer"
            >
              <Linkedin className="w-4 h-4 text-[#0a66c2]" />
              <span>LinkedIn Profile</span>
            </a>

            <a 
              href={`mailto:${contactData.email}`}
              className="flex items-center gap-1.5 hover:text-fuchsia-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-fuchsia-400" />
              <span>{contactData.email}</span>
            </a>

            <a 
              href={`tel:${contactData.phone}`}
              className="flex items-center gap-1.5 hover:text-fuchsia-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-fuchsia-400" />
              <span>{contactData.phone}</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            title="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-fuchsia-400" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>
            © {new Date().getFullYear()} Marius Trif. Built with precision for automotive excellence and high-reliability software.
          </p>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>ASPICE & ISO 26262 Quality Aligned Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
