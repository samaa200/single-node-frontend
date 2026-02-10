import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView ,useTime} from 'framer-motion';

import { 
  Database, 
  GitMerge, 
  Zap, 
  CheckCircle2, 
  Lock, 
  RefreshCw,
  TrendingUp,
  Globe,
  MessageSquare
} from 'lucide-react';
const BRAND_COLORS = {
  linkedin: '#0077b5',
  fiverr: '#1dbf73',
  upwork: '#14a800',
  gmail: '#EA4335',
  outlook: '#0078d4',
};

const INTEGRATIONS = [
  { name: 'LinkedIn', color: BRAND_COLORS.linkedin, path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" },
  { name: 'Fiverr', color: BRAND_COLORS.fiverr, path: "M23.006 6.53c-1.611-1.051-4.47-1.375-7.847.597C14.757 6.765 13.093 8.9 13.093 8.9l-2.486-3.01h-4.45v12.878h4.78v-5.851c0-1.194.518-1.821 1.352-1.821.796 0 1.144.56 1.144 1.583l.028 6.086h4.728v-7.017c0-2.437-1.434-3.727-3.752-3.727-1.592 0-2.832.852-3.355 1.463l-.725-1.092H6.157V.99H1.441L.99 11.077v7.688h4.745l.36-8.84 3.731 8.84h4.962l4.501-12.233zm-21.03 8.879c1.189 0 2.159-.954 2.159-2.136 0-1.181-.97-2.139-2.159-2.139-1.192 0-2.165.958-2.165 2.139 0 1.182.973 2.136 2.165 2.136z" },
  { name: 'Upwork', color: BRAND_COLORS.upwork, path: "M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" },
  { name: 'Gmail', color: BRAND_COLORS.gmail, path: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" },
  { name: 'Outlook', color: BRAND_COLORS.outlook, path: "M1 11.5L12.5 4L23 11.5V20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20V11.5Z" },
];
const EnterpriseWorkflow = () => {
  return (
    <section className="relative py-32 bg-[#f6f9fc] overflow-hidden font-sans text-slate-900">
      
      {/* Background: Subtle Grid & Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#0a2540 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-8 leading-[1.05]"
          >
            Autonomous revenue <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-300">
              infrastructure.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium"
          >
            Deploy a full-stack sales operation in three stages. Engineered for compliance, observability, and massive scale.
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="relative space-y-32 md:space-y-48">
          
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-[28px] top-12 bottom-12 w-px bg-slate-200 hidden md:block" />

          {/* STEP 1: INTEGRATION */}
          <WorkflowStep 
            number="01"
            title="Ingest & Sync"
            description="Establish a secure, bi-directional link with your existing stack. Our mesh network handles rate limits and data normalization automatically."
            labels={["OAuth 2.0", "SOC2 Compliant", "Real-time"]}
          >
            <IntegrationVisual />
          </WorkflowStep>

          {/* STEP 2: TRAINING */}
          <WorkflowStep 
            number="02"
            title="Neural Calibration"
            description="The model ingests historical correspondence to construct a dynamic persona graph. It learns tone, objection handling, and unique value propositions."
            labels={["NLP Engine", "Context Awareness", "99% Accuracy"]}
          >
            <TrainingVisual />
          </WorkflowStep>

          {/* STEP 3: SCALE */}
          <WorkflowStep 
            number="03"
            title="Autonomous Execution"
            description="Launch multi-threaded outreach campaigns. The system auto-regulates volume based on domain health and positive reply rates."
            labels={["Auto-scaling", "Health Monitoring", "Revenue Attribution"]}
          >
            <ScaleVisual />
          </WorkflowStep>

        </div>
      </div>
    </section>
  );
};

// --- CORE COMPONENT: Workflow Step ---

const WorkflowStep = ({ number, title, description, labels, children }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <div ref={ref} className="relative grid md:grid-cols-12 gap-12 md:gap-24 items-center group">
      
      {/* Timeline Node (Desktop) */}
      <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-[57px] h-full flex-col items-center justify-center z-10">
         <motion.div 
           initial={{ scale: 0, opacity: 0 }}
           animate={isInView ? { scale: 1, opacity: 1 } : {}}
           transition={{ duration: 0.5 }}
           className="w-4 h-4 rounded-full bg-white border-[3px] border-indigo-600 shadow-[0_0_0_4px_rgba(79,70,229,0.15)] z-10"
         />
      </div>

      {/* Content Side */}
      <div className="md:col-span-5 md:pl-24 relative order-2 md:order-1">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={isInView ? { opacity: 1, x: 0 } : {}}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">
              STEP {number}
            </span>
          </div>
          
          <h3 className="text-3xl font-bold text-[#0a2540] mb-6 tracking-tight">{title}</h3>
          <p className="text-lg text-slate-500 leading-relaxed mb-8">{description}</p>
          
          <div className="flex flex-wrap gap-3">
            {labels.map((label: string, i: number) => (
              <div key={i} className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase tracking-wide bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Visual Side */}
      <div className="md:col-span-7 relative order-1 md:order-2">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="relative rounded-2xl bg-white shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden"
        >
          {/* Window Controls (Purely Aesthetic) */}
          <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="text-[10px] font-mono text-slate-400 font-medium">SYSTEM_V4.2.0</div>
          </div>
          
          {/* The Actual Visual Component */}
          <div className="p-1 bg-slate-50/50">
             {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
const IntegrationVisual = () => {
  // Drive all rotations from a single time source to ensure perfect sync
  const time = useTime();
  const rotate = useTransform(time, [0, 20000], [0, 360], { clamp: false });
  const counterRotate = useTransform(time, [0, 20000], [0, -360], { clamp: false });

  return (
    <div className="bg-white rounded-xl border border-slate-100/80 p-8 h-[360px] relative overflow-hidden flex items-center justify-center">
      
      {/* Background Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f1f5f9_0%,_transparent_70%)] opacity-50" />
      
      {/* Central Hub */}
      <div className="relative z-30 w-24 h-24 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(79,70,229,0.15)] border border-indigo-50 flex items-center justify-center ring-1 ring-slate-100/50">
        <motion.div 
          className="absolute inset-0 bg-indigo-500/5 rounded-[2rem]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <Database className="w-10 h-10 text-indigo-600" strokeWidth={1.5} />
      </div>

      {/* Orbit Tracks - Purely Visual */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[230px] h-[230px] rounded-full border border-slate-100/60 border-dashed" />
        <div className="w-[280px] h-[280px] rounded-full border border-slate-50 border-dashed opacity-50" />
      </div>

      {/* The Unified Orbit Container */}
      <motion.div 
        style={{ rotate }} 
        className="absolute w-[230px] h-[230px] z-20"
      >
        {INTEGRATIONS.map((item, i) => {
          const angle = (i * 360) / INTEGRATIONS.length;
          return (
            <div
              key={item.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(115px) rotate(-${angle}deg)`,
              }}
            >
              {/* Perfectly Counter-rotated Satellite */}
              <motion.div 
                style={{ rotate: counterRotate }}
                className="relative"
              >
                {/* Connection Line back to center */}
                <div 
                    className="absolute top-1/2 right-1/2 h-px -z-10 origin-right"
                    style={{ 
                        width: '115px', 
                        background: `linear-gradient(90deg, transparent, ${item.color}40)`,
                        transform: 'translateY(-50%)' 
                    }} 
                />

                {/* Satellite Body */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-3 cursor-pointer transition-shadow"
                >
                    <svg viewBox="0 0 24 24" className="w-full h-full" style={{ color: item.color }}>
                      <path d={item.path} fill="currentColor" />
                    </svg>
                    
                    {/* Status Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
                </motion.div>

                {/* Flowing Data Particle */}
                <motion.div
                  className="absolute top-1/2 right-full w-1.5 h-1.5 rounded-full z-20"
                  style={{ backgroundColor: item.color }}
                  animate={{ x: [0, 115], opacity: [0, 1, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.4, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Tertiary Decoration: Infrastructure Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-indigo-100/30 blur-[80px] rounded-full" />
        <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-emerald-100/20 blur-[80px] rounded-full" />
      </div>

    </div>
  );
};

// --- VISUAL 2: The "Neural Trainer" ---
const TrainingVisual = () => {
  return (
    <div className="bg-slate-900 rounded-xl p-6 h-[320px] relative overflow-hidden font-mono text-xs">
      <div className="flex gap-8 h-full">
        
        {/* Left: Raw Data Stream */}
        <div className="w-1/2 border-r border-slate-700/50 pr-4 space-y-3 opacity-60">
          <div className="text-slate-500 uppercase tracking-widest text-[10px] mb-4">Ingesting Source</div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-2 text-slate-400">
              <span className="text-slate-600">{i + 12}</span>
              <span className="truncate">
                {["Hi John, regarding the", "contract sent on Tuesday", "would you be open to", "a quick sync regarding", "pricing tiers for v2", "Best, Sarah"][i]}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Analysis & Synth */}
        <div className="w-1/2 pl-4 flex flex-col">
          <div className="text-emerald-400 uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
            <Zap className="w-3 h-3" /> Live Model
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-800 p-3 rounded border border-slate-700">
               <div className="text-slate-400 mb-1">Tone Analysis</div>
               <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                 <motion.div 
                   className="h-full bg-indigo-500" 
                   initial={{ width: 0 }}
                   whileInView={{ width: '85%' }}
                   transition={{ duration: 1.5 }}
                 />
               </div>
               <div className="mt-1 text-right text-white">Professional (0.85)</div>
            </div>

            <div className="bg-slate-800 p-3 rounded border border-slate-700">
               <div className="text-slate-400 mb-1">Entity Extraction</div>
               <div className="flex gap-2 mt-2">
                 <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">@Price</span>
                 <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">@Contract</span>
               </div>
            </div>
          </div>
          
          {/* Scanning Animation */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
};

// --- VISUAL 3: The "Scale Dashboard" ---
const ScaleVisual = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-6 h-[320px] relative flex flex-col">
       
       {/* Top Stats Row */}
       <div className="grid grid-cols-3 gap-4 mb-6">
         {[
           { label: "Active Threads", val: "1,240", color: "text-[#0a2540]" },
           { label: "Meetings Booked", val: "86", color: "text-emerald-600" },
           { label: "Pipeline Value", val: "$420k", color: "text-indigo-600" }
         ].map((stat, i) => (
           <div key={i} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
             <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">{stat.label}</div>
             <div className={`text-xl font-extrabold ${stat.color} tracking-tight`}>{stat.val}</div>
           </div>
         ))}
       </div>

       {/* Graph Area */}
       <div className="flex-1 relative flex items-end gap-2 px-2 pb-2">
         {/* Background Grid Lines */}
         <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
           <div className="border-t border-dashed border-slate-400 w-full" />
           <div className="border-t border-dashed border-slate-400 w-full" />
           <div className="border-t border-dashed border-slate-400 w-full" />
         </div>

         {/* Animated Bars */}
         {[35, 48, 42, 58, 65, 85, 72, 90, 60, 95].map((h, i) => (
           <motion.div
             key={i}
             initial={{ height: 0 }}
             whileInView={{ height: `${h}%` }}
             transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
             className="flex-1 bg-indigo-50 rounded-t-sm relative group"
           >
             <div className="absolute bottom-0 inset-x-0 h-1 bg-indigo-200 group-hover:bg-indigo-500 transition-colors" />
             {/* Hover tooltip */}
             <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0a2540] text-white text-[10px] font-bold px-2 py-1 rounded transition-opacity">
               {h} Leads
             </div>
           </motion.div>
         ))}
       </div>

       {/* Floating Badge */}
       <motion.div 
         animate={{ y: [0, -5, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/2 right-8 bg-white shadow-xl border border-slate-100 p-3 rounded-lg flex items-center gap-3 z-10"
       >
         <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
           <TrendingUp className="w-4 h-4 text-emerald-600" />
         </div>
         <div>
           <div className="text-xs font-bold text-[#0a2540]">+14% WoW</div>
           <div className="text-[10px] text-slate-400 font-medium">Auto-Optimization</div>
         </div>
       </motion.div>
    </div>
  );
};

export default EnterpriseWorkflow;