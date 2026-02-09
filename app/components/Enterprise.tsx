import React from 'react';
import { motion } from 'framer-motion';

// --- Types ---
interface ModuleProps {
  tag: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
}

const EnterpriseAesthetic: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#f6f9fc] overflow-hidden font-sans">
      {/* The "Stripe Skew" - Creates that iconic diagonal transition */}
      <div className="absolute top-0 inset-x-0 h-[1000px] bg-white -skew-y-6 origin-top-left z-0 shadow-sm" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 1. TYPOGRAPHY HIERARCHY: The Confidence Header */}
        <div className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8"
          >
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Engineered for Scale</span>
          </motion.div>
          
          <h2 className="text-[64px] md:text-[84px] font-extrabold text-[#0a2540] tracking-[-0.04em] leading-[0.9] mb-10">
            Every capability. <br />
            <span className="text-slate-400">One integrated platform.</span>
          </h2>
          
          <p className="text-[22px] text-[#425466] leading-relaxed max-w-2xl font-medium opacity-90">
            Six powerful AI-driven tools working in perfect harmony. From discovery to conversion—engineered for the world's most demanding teams.
          </p>
        </div>

        {/* 2. THE BENTO ECOSYSTEM: Complex yet Simple */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* LARGE MODULE: Hunter Mode */}
          <Module 
            className="md:col-span-8"
            tag="Lead Discovery"
            title="Hunter Mode"
            description="Our real-time lead discovery engine identifies high-intent targets using 40+ fit factors. It's not just data; it's intelligence."
          >
            <div className="mt-12 bg-slate-50 rounded-2xl border border-slate-200 p-1 overflow-hidden shadow-inner">
              <div className="bg-white rounded-[14px] p-6 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">H</div>
                  <div>
                    <div className="text-sm font-bold text-[#0a2540]">Enterprise_Scanner_V4</div>
                    <div className="text-[10px] text-slate-400 font-mono">STATUS: ACTIVE_SCANNING</div>
                  </div>
                </div>
                <div className="flex gap-2">
                   {[...Array(3)].map((_, i) => (
                     <div key={i} className="h-1.5 w-8 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ['-100%', '100%'] }} 
                          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.4 }}
                          className="h-full w-full bg-indigo-500" 
                        />
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </Module>

          {/* DARK MODULE: Quick Approve */}
          <Module 
            className="md:col-span-4"
            isDark
            tag="Automation"
            title="Quick Approve"
            description="Slash manual review times by 98% with instant AI validation."
          >
            <div className="mt-12">
              <div className="text-[80px] font-bold tracking-tighter text-white leading-none">30<span className="text-indigo-400">s</span></div>
              <div className="h-px w-full bg-slate-700 my-6" />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                <span>Manual: 23m</span>
                <span className="text-emerald-400">Saved: 22.5m</span>
              </div>
            </div>
          </Module>

          {/* MEDIUM MODULE: Style Clone */}
          <Module 
            className="md:col-span-6"
            tag="Persona AI"
            title="Style Clone"
            description="Proprietary AI that analyzes your syntax, tone, and vocabulary to generate 1:1 matching outreach."
          >
            <div className="mt-8 flex flex-col gap-3">
               <div className="flex justify-between items-end text-[12px] font-bold text-[#0a2540]">
                  <span>TONE_MATCH_ACCURACY</span>
                  <span className="text-indigo-600">97.4%</span>
               </div>
               <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '97.4%' }} 
                    transition={{ duration: 1.5 }}
                    className="h-full bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" 
                  />
               </div>
            </div>
          </Module>

          {/* MEDIUM MODULE: Auto Learning */}
          <Module 
            className="md:col-span-6"
            tag="Neural Training"
            title="Auto Learning"
            description="Our models evolve with your feedback, reaching peak efficiency within a 30-day training cycle."
          >
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center">
                   <div className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-emerald-400' : 'bg-slate-200'}`} />
                </div>
              ))}
            </div>
          </Module>

          {/* SMALL MODULES: Lead Mining & Orchestration */}
          <Module className="md:col-span-5" tag="Data Intel" title="Lead Mining" description="Recover 15% of pipeline." >
             <div className="mt-4 text-4xl font-black text-indigo-600">+15%</div>
          </Module>
          
          <Module className="md:col-span-7" tag="Multi-Channel" title="Orchestration" description="LinkedIn, Upwork, and Email synced." >
            <div className="mt-4 flex gap-2">
              <div className="w-8 h-8 rounded bg-slate-100" />
              <div className="w-8 h-8 rounded bg-slate-100" />
              <div className="w-8 h-8 rounded bg-slate-100" />
            </div>
          </Module>

        </div>
      </div>
    </section>
  );
};

// --- Sub-component: The "Billion Dollar" Card ---

const Module: React.FC<ModuleProps> = ({ tag, title, description, children, className = "", isDark = false }) => {
  return (
    <motion.div 
      whileHover={{ y: -6, boxShadow: "0 30px 60px -12px rgba(50,50,93,0.25), 0 18px 36px -18px rgba(0,0,0,0.3)" }}
      className={`
        ${className} 
        ${isDark ? 'bg-[#0a2540] text-white border-slate-800' : 'bg-white text-[#0a2540] border-[#e6ebf1]'}
        p-10 rounded-[20px] border 
        relative transition-all duration-500 ease-out
      `}
    >
      <div className="relative z-10 flex flex-col h-full">
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
          {tag}
        </span>
        <h3 className="text-3xl font-extrabold tracking-tight mb-4">{title}</h3>
        <p className={`text-[15px] font-medium leading-relaxed mb-6 opacity-80 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
          {description}
        </p>
        <div className="mt-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default EnterpriseAesthetic;