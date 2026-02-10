import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Globe, 
  Cpu, 
  Search, 
  MessageSquare, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const EnterpriseAesthetic = () => {
  return (
    <section className="relative py-32 bg-[#f6f9fc] overflow-hidden font-sans text-slate-900">
      {/* Background Decor: The "Stripe" Skew */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-slate-50 -skew-y-3 origin-top-right z-0 pointer-events-none" />
      
      {/* Background Grid Pattern for Technical Feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#0a2540 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-6">
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#0a2540] tracking-tight leading-[1.05]">
                The complete stack for <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-300">automated revenue.</span>
              </h2>
            </div>
            <p className="max-w-sm text-lg text-slate-500 font-medium leading-relaxed">
              Replace fragmented tools with a unified operating system. Engineered for reliability, speed, and scale.
            </p>
          </motion.div>
        </div>

        {/* 2. HERO FEATURE: STORYTELLING LAYOUT (Hunter Mode) */}
        <div className="mb-8">
          <HunterModeFeature />
        </div>

        {/* 3. BENTO GRID: SECONDARY FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Style Clone - Span 2 */}
          <div className="md:col-span-2 group">
            <BentoCard 
              tag="Proprietary LLM" 
              title="Style Clone™" 
              description="Our AI ingests your previous correspondence to replicate your syntax, tone, and vocabulary with 99.4% accuracy."
              icon={<MessageSquare className="w-5 h-5" />}
            >
               <StyleCloneVisual />
            </BentoCard>
          </div>

          {/* Quick Approve - Span 1 */}
          <div className="md:col-span-1">
             <BentoCard 
              tag="Human-in-the-loop" 
              title="Quick Approve" 
              description="Review 50 leads in under 30 seconds."
              isDark
              icon={<ShieldCheck className="w-5 h-5 text-emerald-400" />}
            >
              <QuickApproveVisual />
            </BentoCard>
          </div>
        </div>

        {/* 4. TERTIARY ROW */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <StatCard label="Pipeline Recovered" value="+24%" sub="Month over Month" />
          </div>
          <div className="md:col-span-3">
             <BentoCard 
              tag="Orchestration" 
              title="Multi-Channel Sync" 
              description="Unified state management across LinkedIn, Upwork, and Email."
              icon={<Globe className="w-5 h-5" />}
              layout="horizontal"
            >
              <OrchestrationVisual />
            </BentoCard>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENTS & VISUALS ---

const HunterModeFeature = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[24px]  border border-slate-200 overflow-hidden relative group"
    >
      <div className="grid md:grid-cols-2 min-h-[500px]">
        {/* Text Side */}
        <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 w-fit mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></div>
            <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-widest">Hunter Mode Active</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6">Real-time lead discovery.</h3>
          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            Stop relying on static databases. Our engine scans live networks, analyzing 40+ fit factors to identify high-intent targets the moment they become available.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Real-time intent signal analysis",
              "Automated fit scoring (0-100)",
              "Direct integration with CRM"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-semibold text-[#0a2540]">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                {item}
              </li>
            ))}
          </ul>

          <button className="text-indigo-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
            View technical documentation <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Visual Side: The "Scanner" Interface */}
        <div className="bg-[#f7f9fc] border-l border-slate-100 relative overflow-hidden flex items-center justify-center p-8">
          {/* Abstract Interface */}
          <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-200/60 overflow-hidden relative">
            {/* Header */}
            <div className="h-10 border-b border-slate-100 bg-slate-50 flex items-center px-4 justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              </div>
              <div className="text-[10px] font-mono text-slate-400">SCAN_ID: 8842X</div>
            </div>
            
            {/* List */}
            <div className="p-4 space-y-3 relative">
              {/* Scanning Beam */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                className="absolute left-0 right-0 h-12 bg-indigo-500/5 border-y border-indigo-500/20 z-10 pointer-events-none backdrop-blur-[1px]"
              />

              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg border border-slate-100 bg-slate-50/50">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                    {['JD', 'AS', 'MK', 'LR'][i-1]}
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-slate-200 rounded mb-1.5"></div>
                    <div className="h-1.5 w-16 bg-slate-100 rounded"></div>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {90 + i * 2}% FIT
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 right-12 bg-[#0a2540] text-white px-4 py-3 rounded-lg shadow-xl border border-slate-700 flex items-center gap-3 z-20"
          >
            <div className="relative">
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Search className="w-5 h-5 text-slate-300" />
            </div>
            <div>
              <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">New Leads</div>
              <div className="text-sm font-bold font-mono">+12 FOUND</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

const BentoCard = ({ tag, title, description, children, className = "", isDark = false, icon, layout = "vertical" }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        h-full rounded-[20px] p-8 border relative overflow-hidden flex flex-col
        ${isDark 
          ? 'bg-[#0a2540] text-white border-slate-800 shadow-2xl' 
          : 'bg-white text-[#0a2540] border-slate-200 shadow-sm hover:shadow-lg transition-shadow'}
        ${className}
      `}
    >
      <div className={`flex ${layout === 'horizontal' ? 'flex-col md:flex-row md:items-center gap-8' : 'flex-col'} h-full relative z-10`}>
        <div className={`${layout === 'horizontal' ? 'md:w-1/2' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-indigo-50 text-indigo-600'}`}>
              {icon}
            </div>
            <span className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? 'text-indigo-300' : 'text-slate-500'}`}>
              {tag}
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-3">{title}</h3>
          <p className={`text-sm font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {description}
          </p>
        </div>
        
        <div className={`mt-auto ${layout === 'horizontal' ? 'md:mt-0 md:w-1/2' : 'pt-8'}`}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

// --- VISUALIZATIONS ---

const StyleCloneVisual = () => (
  <div className="bg-[#f7f9fc] rounded-xl p-4 border border-slate-100 font-mono text-[10px] relative overflow-hidden">
    <div className="flex justify-between text-slate-400 mb-2 uppercase tracking-wider font-bold">
      <span>Input Analysis</span>
      <span>Matched</span>
    </div>
    <div className="space-y-2">
      <div className="flex gap-2">
         <span className="text-slate-400 w-4">01</span>
         <span className="text-slate-600">Tone: Professional, Direct</span>
      </div>
      <div className="flex gap-2">
         <span className="text-slate-400 w-4">02</span>
         <span className="text-slate-600">Avg Sentence Length: 12 words</span>
      </div>
      <div className="flex gap-2 items-center">
         <span className="text-slate-400 w-4">03</span>
         <span className="text-indigo-600 font-bold bg-indigo-50 px-1 rounded">Confidence: 99.4%</span>
      </div>
    </div>
  </div>
);

const QuickApproveVisual = () => (
  <div className="relative h-24 flex items-center justify-center">
    <svg className="transform -rotate-90 w-24 h-24">
      <circle cx="48" cy="48" r="36" stroke="#1e293b" strokeWidth="6" fill="transparent" />
      <motion.circle 
        cx="48" cy="48" r="36" 
        stroke="#34d399" 
        strokeWidth="6" 
        fill="transparent"
        strokeDasharray="226.2"
        strokeDashoffset="226.2"
        animate={{ strokeDashoffset: 45 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-2xl font-bold text-white">0.5s</span>
      <span className="text-[10px] text-slate-400 uppercase tracking-widest">Latency</span>
    </div>
  </div>
);

const OrchestrationVisual = () => (
  <div className="flex items-center justify-between px-4">
    <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-lg bg-[#0077b5] flex items-center justify-center text-white shadow-md">in</div>
      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
    </div>
    
    <div className="flex-1 h-px bg-slate-200 mx-4 relative">
       <motion.div 
         animate={{ x: [-10, 100] }}
         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
         className="absolute top-1/2 -mt-1 w-2 h-2 bg-indigo-600 rounded-full"
       />
    </div>

    <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-lg bg-[#14a800] flex items-center justify-center text-white shadow-md font-bold text-xs">Up</div>
      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
    </div>

    <div className="flex-1 h-px bg-slate-200 mx-4 relative">
       <motion.div 
         animate={{ x: [-10, 100] }}
         transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
         className="absolute top-1/2 -mt-1 w-2 h-2 bg-indigo-600 rounded-full"
       />
    </div>

    <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center text-white shadow-md">M</div>
      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
    </div>
  </div>
);

const StatCard = ({ label, value, sub }: any) => (
  <div className="h-full bg-white p-6 rounded-[20px] border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">{label}</div>
    <div className="text-4xl font-extrabold text-[#0a2540] mb-1">{value}</div>
    <div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{sub}</div>
  </div>
);

export default EnterpriseAesthetic;