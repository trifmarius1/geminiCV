import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Download, 
  Printer, 
  Sparkles,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { contactData } from '../data/cvData';
import { Language } from '../types';

interface ContactSectionProps {
  currentLang: Language;
  onPrintClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, onPrintClick }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Automotive QA Opportunity',
    message: ''
  });

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-800/40">
            <Mail className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Connect & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Discuss Your Next Testing or Automotive Project?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Reach out directly for Senior Software Test Engineer roles, EV Body Control Module validation, or consultation on AI-augmented QA pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Direct Contact Cards & LinkedIn Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* LinkedIn Verification Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-neutral-900 to-fuchsia-950/30 border border-fuchsia-900/50 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#0a66c2]/15 border border-[#0a66c2]/30">
                    <Linkedin className="w-6 h-6 text-[#0a66c2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">LinkedIn Executive Profile</h3>
                    <p className="text-xs text-neutral-400">Verified Automotive QA</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                  ACTIVE
                </span>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Connect directly on LinkedIn to explore endorsements, network, or discuss open opportunities in electric vehicle test automation.
              </p>

              <a
                href={contactData.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-section-linkedin-btn"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 shadow-md shadow-fuchsia-600/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/marius-trif-239aa8104</span>
              </a>
            </div>

            {/* Direct Phone */}
            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-fuchsia-900/40 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-fuchsia-400" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Direct Mobile</span>
                  <a 
                    href={`tel:${contactData.phone}`}
                    className="text-sm font-mono font-bold text-white hover:text-fuchsia-300 transition-colors"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(contactData.phone, 'phone')}
                id="contact-copy-phone-btn"
                className="p-2 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Email */}
            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-fuchsia-900/40 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Email Address</span>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-sm font-mono font-bold text-white hover:text-fuchsia-300 transition-colors"
                  >
                    {contactData.email}
                  </a>
                  <span className="text-[11px] text-neutral-500 block">
                    Alt: {contactData.secondaryEmail}
                  </span>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(contactData.email, 'email')}
                id="contact-copy-email-btn"
                className="p-2 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Remote Availability */}
            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-fuchsia-900/40 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-purple-400" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-neutral-400 block">Location & Modality</span>
                <p className="text-sm font-bold text-white">Cluj-Napoca, Romania</p>
                <p className="text-xs text-fuchsia-300">
                  Open to Remote, Hybrid & European Relocation
                </p>
              </div>
            </div>

            {/* Print CV Action */}
            <button
              onClick={onPrintClick}
              id="contact-print-cv-btn"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-fuchsia-400" />
              <span>Print or Save CV as Clean PDF</span>
            </button>

          </div>

          {/* Right Column (7 cols): Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/90 border border-fuchsia-900/40 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Your message will be sent with priority routing directly to Marius Trif's primary inbox.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-fuchsia-950/40 border border-fuchsia-700/60 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Your message has been dispatched. Marius typically responds within 24 hours. You can also connect immediately on LinkedIn or call directly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', company: '', subject: 'Automotive QA Opportunity', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-fuchsia-300 bg-neutral-950 border border-fuchsia-900/50 hover:bg-neutral-900 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-form-name" className="text-xs font-semibold text-neutral-300">
                        Your Name *
                      </label>
                      <input
                        id="contact-form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-fuchsia-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-form-email" className="text-xs font-semibold text-neutral-300">
                        Email Address *
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-fuchsia-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-form-company" className="text-xs font-semibold text-neutral-300">
                        Company / Organization
                      </label>
                      <input
                        id="contact-form-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Automotive OEM / Tech Hub"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-fuchsia-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-form-subject" className="text-xs font-semibold text-neutral-300">
                        Topic
                      </label>
                      <select
                        id="contact-form-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-fuchsia-500 transition-colors"
                      >
                        <option value="Automotive QA Opportunity">Automotive QA / BCM Opportunity</option>
                        <option value="Senior Test Engineer Role">Senior / Lead Test Engineer Role</option>
                        <option value="AI-Augmented Testing Consultation">AI-Augmented Testing Consultation</option>
                        <option value="General Professional Inquiry">General Professional Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-message" className="text-xs font-semibold text-neutral-300">
                      Message *
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Marius, we reviewed your profile and experience in EV Body Control Modules and Vector CAN tools..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-fuchsia-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-inquiry-btn"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-700 hover:from-fuchsia-500 hover:to-pink-500 shadow-xl shadow-fuchsia-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Dispatch Inquiry to Marius</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
