import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Cpu, 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  FileCode, 
  ShieldCheck, 
  BrainCircuit,
  MessageSquare
} from 'lucide-react';
import { faqData } from '../data/cvData';
import { Language } from '../types';

export const AiQaSpecialization: React.FC<{ currentLang: Language }> = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState<number>(0);
  const [customQuestion, setCustomQuestion] = useState('');
  const [customAnswer, setCustomAnswer] = useState<string | null>(null);

  const handleQuickQuestion = (index: number) => {
    setSelectedFaqIndex(index);
    setCustomAnswer(null);
  };

  const handleAskCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    // Intelligent answer matching based on keywords in Marius's CV
    const q = customQuestion.toLowerCase();
    let response = "";

    if (q.includes('ev') || q.includes('bcm') || q.includes('vehicle') || q.includes('car')) {
      response = "Marius has extensive experience with Electric Vehicle Body Control Modules (BCM) at AUMOVIO and Instrument Clusters at Marelli. He validates lighting, locks, power distribution, and diagnostics over CAN networks conforming to ISO 26262 and ASPICE.";
    } else if (q.includes('ai') || q.includes('agent') || q.includes('gpt') || q.includes('model')) {
      response = "Marius utilizes AI agents to accelerate test analysis, formulate boundary matrices from IBM DOORS specifications, automate Python SWIT script generation in VS Code, and optimize test coverage for zero-escape releases.";
    } else if (q.includes('vector') || q.includes('canoe') || q.includes('canalyzer') || q.includes('can')) {
      response = "Marius is an expert in Vector CANoe and CANalyzer. He conducts in-vehicle bus traffic logging, frame timing validation, signal decoding, and automated test bench runs for electric vehicle platforms.";
    } else if (q.includes('safety') || q.includes('iso') || q.includes('26262') || q.includes('aspice')) {
      response = "With 7+ years across ASPICE-certified automotive programs, Marius conducts functional safety testing compliant with ISO 26262 (ASIL-B and ASIL-D), ensuring 100% bidirectional traceability between requirements in DOORS and executed test cases.";
    } else if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('hire') || q.includes('interview')) {
      response = "You can reach Marius directly at +40745221158 or via email at trif_marius1@yahoo.com / trifmarius1@gmail.com. You can also connect directly on LinkedIn at linkedin.com/in/marius-trif-239aa8104.";
    } else {
      response = "Marius Trif is a Senior Software Test Engineer with 10+ years in automotive and IT QA (16+ years total). He specializes in EV Body Control Modules, Instrument Clusters, Vector CAN tools, ASPICE, ISO 26262, and AI-assisted Python testing.";
    }

    setCustomAnswer(response);
  };

  return (
    <section id="ai-qa" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-800/40">
            <Bot className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Modern QA Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI-Augmented Test Engineering & Verification
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            How Marius combines classical engineering rigor with state-of-the-art AI agents to maximize test coverage, eliminate human oversight, and accelerate delivery.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            {
              icon: <BrainCircuit className="w-5 h-5 text-fuchsia-400" />,
              title: "AI Test Matrix Synthesis",
              desc: "Automating the decomposition of multi-tier system requirements in DOORS into exhaustive combinatorial test vectors."
            },
            {
              icon: <FileCode className="w-5 h-5 text-pink-400" />,
              title: "Python SWIT Acceleration",
              desc: "Deploying AI workflows inside VS Code to scaffold repetitive SWIT/SWT automation scripts, reducing boilerplate development time."
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
              title: "Edge-Case & Hazard Detection",
              desc: "Leveraging agentic evaluation to identify subtle timing corner-cases and race conditions in CAN-FD communication loops."
            },
            {
              icon: <Cpu className="w-5 h-5 text-rose-400" />,
              title: "Defect Trend Analytics",
              desc: "Clustering regression bug logs to pinpoint root causes, accelerating defect triage in JIRA and ensuring zero escape bugs."
            }
          ].map(feature => (
            <div 
              key={feature.title}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-fuchsia-900/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-fuchsia-900/50 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Recruiter Q&A Terminal */}
        <div className="rounded-2xl p-1 bg-gradient-to-b from-fuchsia-950/60 via-purple-950/40 to-neutral-950 border border-fuchsia-900/50 shadow-2xl">
          <div className="rounded-[14px] bg-neutral-950 p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-fuchsia-400" />
                <h3 className="text-lg font-bold text-white">
                  Ask About Marius's Experience & Expertise
                </h3>
              </div>
              <span className="text-xs text-fuchsia-400 font-mono">
                Verified Candidate Knowledge Base
              </span>
            </div>

            {/* Quick Questions Chips */}
            <div className="space-y-2">
              <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                Select a Question to Review Instant Answers:
              </p>
              <div className="flex flex-wrap gap-2">
                {faqData.map((faq, index) => (
                  <button
                    key={faq.question}
                    id={`faq-btn-${index}`}
                    onClick={() => handleQuickQuestion(index)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer ${
                      selectedFaqIndex === index && !customAnswer
                        ? 'bg-fuchsia-600 text-white shadow-md shadow-fuchsia-600/30'
                        : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                    }`}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Display Box */}
            <div className="p-5 rounded-xl bg-neutral-900/90 border border-fuchsia-950/60 min-h-[110px] flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-fuchsia-950 border border-fuchsia-800/60 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider block">
                  {customAnswer ? "Verified Answer" : faqData[selectedFaqIndex].category}
                </span>
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                  {customAnswer || faqData[selectedFaqIndex].answer}
                </p>
              </div>
            </div>

            {/* Custom Question Input */}
            <form onSubmit={handleAskCustom} className="flex gap-2">
              <input
                type="text"
                id="recruiter-custom-question-input"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder="Ask anything (e.g. 'What tools did he use at Marelli?' or 'Is he available remote?')..."
                className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-fuchsia-500 transition-colors"
              />
              <button
                type="submit"
                id="recruiter-ask-submit-btn"
                className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Ask</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};
