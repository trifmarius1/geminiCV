/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { InteractiveBCMSimulator } from './components/InteractiveBCMSimulator';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { AiQaSpecialization } from './components/AiQaSpecialization';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { PrintableView } from './components/PrintableView';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const handlePrint = () => {
    window.print();
  };

  const navigateToDemo = () => {
    const el = document.getElementById('bcm-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-fuchsia-600 selection:text-white">
      
      {/* Top Header & Navbar */}
      <Navbar 
        currentLang={currentLang} 
        onSelectLang={setCurrentLang} 
        onPrintClick={handlePrint} 
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full no-print">
        
        {/* Executive Hero & LinkedIn Profile Showcase */}
        <HeroSection 
          currentLang={currentLang} 
          onNavigateToDemo={navigateToDemo} 
          onPrintClick={handlePrint} 
        />

        {/* Engineering Philosophy & Overview */}
        <AboutSection currentLang={currentLang} />

        {/* Live Interactive Automotive EV BCM & Vector CAN Lab */}
        <InteractiveBCMSimulator currentLang={currentLang} />

        {/* Comprehensive Career History & Timeline */}
        <ExperienceSection currentLang={currentLang} />

        {/* Deep Skill Matrix & Filterable Tool Stack */}
        <SkillsSection currentLang={currentLang} />

        {/* Modern AI Agents in Test Engineering & Recruiter Q&A */}
        <AiQaSpecialization currentLang={currentLang} />

        {/* Academic Foundations, Languages & Recommendations */}
        <EducationSection currentLang={currentLang} />

        {/* Direct Inquiries, Verified LinkedIn Connect & vCard */}
        <ContactSection currentLang={currentLang} onPrintClick={handlePrint} />

      </main>

      {/* Print-optimized layout (only active when printing / exporting PDF) */}
      <PrintableView />

      {/* Footer */}
      <Footer />

    </div>
  );
}
