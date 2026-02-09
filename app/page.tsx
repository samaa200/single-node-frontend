'use client';

import { useState } from 'react';
import TypingCode from './components/TypingCode';
import WaveVisualization from './components/WaveVisualization';
import { Bot } from 'lucide-react';
import NotionHero from './components/NotionHero';
import EnterpriseAesthetic from './components/Enterprise';
import EnterpriseIntegrations from './components/Integrations';

export default function Home() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [primaryChannel, setPrimaryChannel] = useState('');
  const [useCase, setUseCase] = useState('');
  const [goals, setGoals] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const codeLines = [
    [
      { text: '@workflow', color: 'text-slate-500' },
      { text: '.defn', color: 'text-slate-500' },
    ],
    [
      { text: 'class ', color: 'text-purple-600' },
      { text: 'SelfnodeOutboundWorkflow', color: 'text-indigo-600' },
      { text: '(', color: 'text-slate-800' },
      { text: 'workflow.Workflow', color: 'text-slate-700' },
      { text: '):', color: 'text-slate-800' },
    ],
    [
      { text: '    # Nurture every warm lead automatically', color: 'text-slate-500' },
    ],
    [
      { text: '    # Send a sequence every 30 days, for the year', color: 'text-slate-500' },
    ],
    [
      { text: '    @workflow', color: 'text-slate-500' },
      { text: '.run', color: 'text-slate-500' },
    ],
    [
      { text: '    async ', color: 'text-purple-600' },
      { text: 'def ', color: 'text-purple-600' },
      { text: 'run', color: 'text-indigo-600' },
      { text: '(self)', color: 'text-slate-800' },
      { text: ' -> ', color: 'text-slate-800' },
      { text: 'None', color: 'text-emerald-600' },
      { text: ':', color: 'text-slate-800' },
    ],
    [
      { text: '        for ', color: 'text-purple-600' },
      { text: 'i ', color: 'text-amber-600' },
      { text: 'in ', color: 'text-purple-600' },
      { text: 'range', color: 'text-amber-600' },
      { text: '(', color: 'text-slate-800' },
      { text: '12', color: 'text-emerald-600' },
      { text: '):', color: 'text-slate-800' },
    ],
    [
      { text: '            # Activities have built-in retries and SLAs', color: 'text-slate-500' },
    ],
    [
      { text: '            await ', color: 'text-purple-600' },
      { text: 'workflow', color: 'text-amber-600' },
      { text: '.', color: 'text-slate-800' },
      { text: 'execute_activity', color: 'text-indigo-600' },
      { text: '(', color: 'text-slate-800' },
    ],
    [
      { text: '                send_outbound_email,', color: 'text-slate-800' },
    ],
    [
      { text: '                start_to_close_timeout=', color: 'text-amber-600' },
      { text: 'timedelta', color: 'text-amber-600' },
      { text: '(', color: 'text-slate-800' },
      { text: 'seconds', color: 'text-amber-600' },
      { text: '=10', color: 'text-emerald-600' },
      { text: '),', color: 'text-slate-800' },
    ],
    [
      { text: '            )', color: 'text-slate-800' },
    ],
    [
      { text: '', color: '' },
    ],
    [
      { text: '        # Sleep for 30 days (yes, really)', color: 'text-slate-500' },
    ],
    [
      { text: '        await ', color: 'text-purple-600' },
      { text: 'workflow', color: 'text-amber-600' },
      { text: '.', color: 'text-slate-800' },
      { text: 'sleep', color: 'text-indigo-600' },
      { text: '(', color: 'text-slate-800' },
      { text: 'timedelta', color: 'text-amber-600' },
      { text: '(', color: 'text-slate-800' },
      { text: 'days', color: 'text-amber-600' },
      { text: '=30', color: 'text-emerald-600' },
      { text: '))', color: 'text-slate-800' },
    ],
  ];

  const handleJoinBetaClick = () => {
    const betaSection = document.getElementById('beta');
    if (betaSection) {
      betaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('http://localhost:5000/api/beta-signups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email,
          company,
          role,
          teamSize,
          primaryChannel,
          useCase,
          goals,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({} as any));
        const message = (data as any).error || 'Failed to submit. Please try again.';
        setSubmitError(message);
        return;
      }

      setSubmitted(true);
      setShowModal(false);
      setFullName('');
      setCompany('');
      setRole('');
      setTeamSize('');
      setPrimaryChannel('');
      setUseCase('');
      setGoals('');
      setEmail('');
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Premium Minimalist */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl transition-all duration-300 group-hover:scale-110 bg-gradient-to-tr from-blue-400 to-blue-600`}>
              <Bot className="w-6 h-6 text-white" />
            </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-700 tracking-tight leading-none">Selfnode</span>
              </div>
            </div>

            {/* Join Beta Button */}
            <button
              onClick={handleJoinBetaClick}
              className="group relative px-6 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-900/25 hover:shadow-xl hover:shadow-gray-900/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Join Beta</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </nav>
      <NotionHero onJoinBetaClick={handleJoinBetaClick} />
      
        {/* Large Code Block - Instead of video */}
        
      {/* Hero Section - Stripe Style */}
      
<EnterpriseAesthetic/>
     
<br/>
<br/>

<hr/>
{/* Use Cases Section - Notion Style */}
      <section className="py-24 bg-slate/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-[64px] md:text-[84px] font-extrabold text-[#0a2540] tracking-[-0.04em] leading-[0.9] mb-10">
            Let Your AI Clone. <br />
            <span className="text-slate-400">Handle The Busy Work.</span>
          </h2>
              <p className="text-xl text-gray-600 mb-6">
                Pick a use case to see how automation drives revenue for you.
              </p>
             
            </div>
            
            {/* Decorative characters */}
          </div>

          {/* Use Case Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {/* Card 1 */}
            <a href="#solutions" className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-10 transition-all hover:shadow-2xl hover:border-gray-300 min-h-[260px] flex flex-col justify-between">
              <div className="w-16 h-16 mb-6 text-gray-400 group-hover:text-gray-600 transition-colors flex items-center justify-center">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Hunt opportunities 24/7
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Card 2 */}
            <a href="#solutions" className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-10 transition-all hover:shadow-2xl hover:border-gray-300 min-h-[260px] flex flex-col justify-between">
              <div className="w-16 h-16 mb-6 text-gray-400 group-hover:text-gray-600 transition-colors flex items-center justify-center">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Clone your writing style
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Card 3 */}
            <a href="#solutions" className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-10 transition-all hover:shadow-2xl hover:border-gray-300 min-h-[260px] flex flex-col justify-between">
              <div className="w-16 h-16 mb-6 text-gray-400 group-hover:text-gray-600 transition-colors flex items-center justify-center">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Send proposals instantly
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Card 4 */}
            <a href="#solutions" className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-10 transition-all hover:shadow-2xl hover:border-gray-300 min-h-[260px] flex flex-col justify-between">
              <div className="w-16 h-16 mb-6 text-gray-400 group-hover:text-gray-600 transition-colors flex items-center justify-center">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Track revenue metrics
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Card 5 */}
            <a href="#solutions" className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-10 transition-all hover:shadow-2xl hover:border-gray-300 min-h-[260px] flex flex-col justify-between">
              <div className="w-16 h-16 mb-6 text-gray-400 group-hover:text-gray-600 transition-colors flex items-center justify-center">   <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Orchestrate campaigns
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Card 6 */}
            <a href="#solutions" className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-10 transition-all hover:shadow-2xl hover:border-gray-300 min-h-[260px] flex flex-col justify-between">
              <div className="w-16 h-16 mb-6 text-gray-400 group-hover:text-gray-600 transition-colors flex items-center justify-center">  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
              <div className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Mine inbox for leads
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Card 7 */}
         <a href="#solutions" className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-10 transition-all hover:shadow-2xl hover:border-gray-300 min-h-[260px] flex flex-col justify-between">
              <div className="w-16 h-16 mb-6 text-gray-400 group-hover:text-gray-600 transition-colors flex items-center justify-center">    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Configure smart filters
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Card 8 */}
           <a href="#solutions" className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-10 transition-all hover:shadow-2xl hover:border-gray-300 min-h-[260px] flex flex-col justify-between">
              <div className="w-16 h-16 mb-6 text-gray-400 group-hover:text-gray-600 transition-colors flex items-center justify-center">   <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Learn from every decision
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

<EnterpriseIntegrations/>

      {/* Getting Started Steps - Vertical Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold mb-8 uppercase tracking-wider">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-6">
            Autonomous revenue in three steps.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deploy an enterprise-grade sales operation without the headcount.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

            {/* Step 1 */}
            <div className="relative mb-32 grid lg:grid-cols-2 gap-16 items-center">
              {/* Center Dot */}
              <div className="hidden lg:flex absolute left-1/2 top-10 w-8 h-8 bg-white border border-gray-200 rounded-full -translate-x-1/2 items-center justify-center z-10 shadow-sm">
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
              </div>
              
              {/* Text */}
              <div className="lg:text-right order-1">
                <div className="text-blue-600 font-semibold mb-2">01</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Connect your stack</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Integrate seamlessly with your existing tools. Our secure OAuth flow connects LinkedIn, Gmail, and CRM platforms in seconds, not months.
                </p>
              </div>

              {/* Visual */}
              <div className="order-2 pl-8">
                <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 w-full max-w-sm mx-auto lg:mx-0">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'LinkedIn', color: '#0077B5' },
                      { name: 'Salesforce', color: '#00A1E0' },
                      { name: 'Gmail', color: '#EA4335' },
                      { name: 'HubSpot', color: '#FF7A59' }
                    ].map((app) => (
                      <div key={app.name} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: app.color + '20' }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: app.color }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{app.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-sm">
                    <span className="text-gray-500">Status</span>
                    <span className="text-emerald-600 font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      Connected
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-32 grid lg:grid-cols-2 gap-16 items-center">
              {/* Center Dot */}
              <div className="hidden lg:flex absolute left-1/2 top-10 w-8 h-8 bg-white border border-gray-200 rounded-full -translate-x-1/2 items-center justify-center z-10 shadow-sm">
                <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
              </div>
              
              {/* Visual */}
              <div className="order-2 lg:order-1 lg:text-right pr-8">
                <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto lg:ml-auto">
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="flex gap-2 text-gray-400 mb-1">
                      <span>&gt;</span>
                      <span className="text-purple-400">analyzing_voice_patterns</span>
                    </div>
                    <div className="pl-4 mb-4 text-gray-500 text-xs">
                      Processing 5,000+ emails...
                    </div>
                    <div className="space-y-2">
                       <div className="bg-gray-800/50 p-2 rounded border border-gray-700/50 flex justify-between items-center">
                        <span className="text-gray-300">Tone</span>
                        <span className="text-green-400">98% Match</span>
                       </div>
                       <div className="bg-gray-800/50 p-2 rounded border border-gray-700/50 flex justify-between items-center">
                        <span className="text-gray-300">Vocabulary</span>
                        <span className="text-green-400">Professional</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2">
                <div className="text-purple-600 font-semibold mb-2">02</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Train your twin</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our AI analyzes your communication history to create a stylistic fingerprint. It learns your nuances so it can speak with your voice.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative grid lg:grid-cols-2 gap-16 items-center">
              {/* Center Dot */}
              <div className="hidden lg:flex absolute left-1/2 top-10 w-8 h-8 bg-white border border-gray-200 rounded-full -translate-x-1/2 items-center justify-center z-10 shadow-sm">
                <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></div>
              </div>
              
              {/* Text */}
              <div className="lg:text-right order-1">
                <div className="text-emerald-600 font-semibold mb-2">03</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Scale autonomously</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Set your parameters and watch it run. The system identifies opportunities, engages prospects, and books meetings while you sleep.
                </p>
              </div>

              {/* Visual */}
              <div className="order-2 pl-8">
                <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 w-full max-w-sm mx-auto lg:mx-0">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-500 font-medium">Pipeline Value</div>
                      <div className="text-2xl font-bold text-gray-900">$124,500</div>
                    </div>
                    <div className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full border border-emerald-100">
                      +12.5%
                    </div>
                  </div>
                  <div className="h-24 flex items-end justify-between gap-1 mb-4">
                    {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                      <div key={i} className="w-full bg-blue-50 rounded-t-sm relative group overflow-hidden" style={{ height: `${h}%` }}>
                         <div className="absolute inset-x-0 bottom-0 bg-blue-500 transition-all duration-1000" style={{ height: '0%', animation: `fillChart 1s ease-out forwards ${i * 0.1}s` }}></div>
                         <style jsx>{`
                            @keyframes fillChart {
                              to { height: 100%; }
                            }
                         `}</style>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 font-medium">
                    <span>Mon</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Workflow Integration Section - Dark Navy with Animated Diagram */}
      <section className="py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Connect to existing systems.{' '}
              <span className="text-blue-300/80 font-normal">
                Orchestrate outreach across multiple platforms, build custom workflows, and connect to third parties using APIs, partner apps, or prebuilt integrations.
              </span>
            </h2>
          </div>

          {/* Workflow Diagram */}
          <div className="relative min-h-[600px]">
            {/* Animated connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Top row to center connections */}
              <line x1="20%" y1="15%" x2="50%" y2="40%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <line x1="38%" y1="15%" x2="50%" y2="40%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
              <line x1="62%" y1="15%" x2="50%" y2="40%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
              <line x1="80%" y1="15%" x2="50%" y2="40%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
              
              {/* Left side to center */}
              <line x1="8%" y1="45%" x2="42%" y2="48%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
              
              {/* Center to right side */}
              <line x1="58%" y1="48%" x2="75%" y2="35%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
              <line x1="58%" y1="48%" x2="92%" y2="48%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
              
              {/* Center to orchestration */}
              <line x1="50%" y1="55%" x2="50%" y2="68%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              {/* Orchestration to execution layers */}
              <line x1="45%" y1="78%" x2="38%" y2="88%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
              <line x1="55%" y1="78%" x2="62%" y2="88%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
            </svg>

            {/* Top Row - Input Sources */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-8" style={{ zIndex: 2 }}>
              <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-500 transition-all cursor-pointer">
                LinkedIn
              </div>
              <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-500 transition-all cursor-pointer">
                Email (Gmail)
              </div>
              <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-500 transition-all cursor-pointer">
                Upwork
              </div>
              <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-500 transition-all cursor-pointer">
                Slack
              </div>
            </div>

            {/* Second Row - SDK and Processing */}
            <div className="absolute top-32 left-[5%]" style={{ zIndex: 2 }}>
              <div className="bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-600 transition-all cursor-pointer">
                AI Style Clone
              </div>
            </div>

            {/* Left Side - Integration Logos */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-3" style={{ zIndex: 2 }}>
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all cursor-pointer">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all cursor-pointer">
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all cursor-pointer">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all cursor-pointer">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5z"/>
                </svg>
              </div>
            </div>

            {/* Center - Main Platform Box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 3 }}>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-12 py-6 rounded-2xl font-bold text-2xl shadow-2xl border-2 border-indigo-400 hover:scale-105 transition-all cursor-pointer">
                selfnode
              </div>
            </div>

            {/* Right Side - Processing Nodes */}
            <div className="absolute top-28 right-[8%]" style={{ zIndex: 2 }}>
              <div className="bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-600 transition-all cursor-pointer mb-3">
                Lead Scoring
              </div>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2" style={{ zIndex: 2 }}>
              <div className="bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-600 transition-all cursor-pointer">
                Analytics Pipeline
              </div>
            </div>

            {/* Far Right - External Integration */}
            <div className="absolute top-1/2 right-0 translate-x-20 -translate-y-1/2" style={{ zIndex: 2 }}>
              <div className="w-14 h-14 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                <div className="text-2xl font-bold text-indigo-600">A</div>
              </div>
            </div>

            {/* Bottom - Orchestration Layer */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2" style={{ zIndex: 2 }}>
              <div className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-600 transition-all cursor-pointer">
                Orchestration Engine
              </div>
            </div>

            {/* Bottom Row - Execution Layers */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-6" style={{ zIndex: 2 }}>
              <div className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-700 transition-all cursor-pointer">
                Celery Workers
              </div>
              <div className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:bg-indigo-700 transition-all cursor-pointer">
                LangGraph
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="py-32 bg-[#0a1628] relative overflow-hidden">
      <style>{`
        @keyframes drift {
          0% { transform: translateX(0); }
          50% { transform: translateX(-40px); }
          100% { transform: translateX(0); }
        }
        .stripe-wave {
          animation: drift 8s ease-in-out infinite;
          mix-blend-mode: screen;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight max-w-6xl">
            Scale with confidence.{' '}
            <span className="text-blue-200/70 font-normal">
              Handle thousands of leads per month with consistent performance and reliability.
            </span>
          </h2>
        </div>

        {/* Wave Visualization Container */}
        <WaveVisualization />
      </div>
    </section>
      {/* FAQ Section - Beta Focused - Dark Navy */}
      <section className="py-32 bg-[#0a1628] relative overflow-hidden border-t border-indigo-900/20">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left Column - Header & CTAs */}
            <div className="lg:col-span-2">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Frequently asked questions
              </h2>

              {/* CTA Cards */}
              <div className="space-y-4 mt-12">
                {/* Live Chat */}
                <a href="#beta" className="group flex items-start gap-4 p-6 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl hover:border-indigo-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-indigo-300 transition-colors">Contact live chat support</h3>
                    <p className="text-indigo-300 text-sm">24/7 available. No chatbots</p>
                  </div>
                </a>

                {/* Help Center */}
                <a href="#" className="group flex items-start gap-4 p-6 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl hover:border-indigo-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-indigo-300 transition-colors">Visit help center</h3>
                    <p className="text-indigo-300 text-sm">Check out tutorials</p>
                  </div>
                </a>

                {/* Book Demo */}
                <a href="#beta" className="group flex items-start gap-4 p-6 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl hover:border-indigo-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-indigo-300 transition-colors">Book a demo</h3>
                    <p className="text-indigo-300 text-sm">1:1 talk with a tax specialist</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Collapsible Questions */}
            <div className="lg:col-span-3 space-y-4">
              {/* Question 1 */}
              <details className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">How does it work?</h3>
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-indigo-700/30 pt-4">
                  Sign up for beta access, complete onboarding (5 min to 1 week depending on tier), connect your accounts (Gmail, LinkedIn, etc.), train the AI on your writing style, and launch your first automated outreach campaign. Our AI handles lead discovery, personalized messaging, and follow-ups 24/7.
                </div>
              </details>

              {/* Question 2 */}
              <details className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">Is my data secure during the beta?</h3>
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-indigo-700/30 pt-4">
                  Absolutely. We use OAuth 2.0 for all integrations (no password storage), AES-256 encryption for data at rest, and TLS 1.3 for data in transit. All infrastructure runs on SOC 2 compliant AWS servers. Your data is isolated per account and never used to train models without explicit consent.
                </div>
              </details>

              {/* Question 3 */}
              <details className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">What happens to my data if I leave the beta?</h3>
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-indigo-700/30 pt-4">
                  You can export all your data anytime (CSV/JSON formats). If you leave, we'll delete your data within 30 days per your request, or retain it encrypted until you return. No lock-in—you own your data 100%.
                </div>
              </details>

              {/* Question 4 */}
              <details className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">Can I register in the middle of the year?</h3>
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-indigo-700/30 pt-4">
                  Yes! Beta access is open year-round. Join anytime and your 3-month free premium period starts on our official product launch date (Q2 2026). The earlier you join, the more you can shape our roadmap and the more features you'll test early.
                </div>
              </details>

              {/* Question 5 */}
              <details className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">What's the cancellation policy?</h3>
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-indigo-700/30 pt-4">
                  During beta, there's no commitment—leave anytime with zero penalties. After launch, you can cancel monthly subscriptions anytime with no fees. Your 3-month free premium benefit is non-refundable (it's already free!) but you can pause or cancel after that period ends.
                </div>
              </details>

              {/* Question 6 */}
              <details className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">What kind of support can I expect?</h3>
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-indigo-700/30 pt-4">
                  All beta users get access to our community Slack (response time &lt;12h). Pilot Partners get priority email support (&lt;24h response) and a dedicated Slack channel. Dev Partners get technical support and architecture reviews. We're highly responsive during beta—your feedback drives our product.
                </div>
              </details>

              {/* Question 7 */}
              <details className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">Will my beta pricing be honored after launch?</h3>
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-indigo-700/30 pt-4">
                  Yes. All beta users get 3 months premium free after launch. Pilot Partners also receive lifetime 50% discount. Your benefits are locked in and grandfathered—you'll never pay more than launch pricing. Early adopters are rewarded forever.
                </div>
              </details>

              {/* Question 8 */}
              <details className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm border border-indigo-600/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">What integrations are available now vs. coming soon?</h3>
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-indigo-700/30 pt-4">
                  <strong className="text-white">Available now:</strong> Gmail, LinkedIn, Upwork, Slack, HubSpot (CRM sync). <strong className="text-white">Coming in 30 days:</strong> Salesforce, Zapier, Notion, Twitter/X. <strong className="text-white">Q2 2026:</strong> Custom webhooks, GraphQL API, Pipedrive, Intercom. Beta users test all integrations first.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Beta CTA Section - Light Mode */}
      <section id="beta" className="relative py-40 bg-[#f9fafb] overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Beta badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700 tracking-wider">LIMITED BETA ACCESS</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-gray-900">
            Join our beta
          </h2>
          
          <p className="text-xl text-gray-700 mb-3 font-medium tracking-wide">
            Get free premium on go live
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Early access to autonomous revenue generation. No credit card required. First 100 users get lifetime premium features.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Join Beta
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="py-6 px-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl max-w-xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-900 font-semibold">You're on the list! Check your inbox for next steps.</p>
              </div>
            </div>
          )}

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
                onClick={() => setShowModal(false)}
              />
              
              {/* Modal Content */}
              <div className="relative mt-20 bg-white rounded-2xl shadow-2xl max-w-2xl w-full animate-fade-in-up overflow-hidden">
                {/* Close button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Header */}
                <div className="px-8 pt-8 pb-4 text-center bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Join Beta
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Enter your details to get early access<br/>to your autonomous revenue engine
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
                  {/* Name */}
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:border-gray-900 transition-all"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Work Email"
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:border-gray-900 transition-all"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company Name"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:border-gray-900 transition-all"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Use Case */}
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        value={useCase}
                        onChange={(e) => setUseCase(e.target.value)}
                        placeholder="What will you automate?"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:border-gray-900 transition-all"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Link/Troubleshoot text */}
                  <div className="text-center">
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      Having trouble? Contact support
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-gray-900/20"
                  >
                    {submitting ? 'Requesting Access...' : 'Request Beta Access'}
                  </button>

                  {submitError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600 text-center">{submitError}</p>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    
                  </div>

                  {/* Footer text */}
                  <p className="text-center text-xs text-gray-500 pt-2">
                    Don't have an account? <a href="#" className="font-semibold text-gray-900 hover:underline">Request Now</a>
                  </p>
                </form>
              </div>
            </div>
          )}

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-1">100</div>
              <div className="text-sm text-gray-500">Beta spots</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-1">$0</div>
              <div className="text-sm text-gray-500">Setup cost</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-1">90 days</div>
              <div className="text-sm text-gray-500">Premium access</div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer - Enterprise Minimal */}
      <footer className="relative bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl transition-all duration-300 group-hover:scale-110 bg-gradient-to-tr from-blue-400 to-blue-600`}>
              <Bot className="w-6 h-6 text-white" />
            </div>
              <span className="text-xl font-bold text-white tracking-tight">Selfnode</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Docs</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
            Â© 2026 Selfnode. Enterprise-grade autonomous revenue platform.
          </div>
        </div>
      </footer>
    </div>
  );
}
