import React from 'react';
import { motion } from 'framer-motion';


// --- Types ---
interface IntegrationIconProps {
  children: React.ReactNode;
  label: string;
  color: string;
  delay?: number;
}

const EnterpriseIntegrations: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#0a2540] overflow-hidden">
      {/* 1. THE "ATMOSPHERE": Subtle Mesh Gradient & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Master Typography */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] font-extrabold text-indigo-300 uppercase tracking-[0.15em]">Powered Integrations</span>
            </motion.div>

            <h2 className="text-[58px] md:text-[76px] font-black text-white tracking-[-0.03em] leading-[0.95] mb-8">
              Works with<br />
              <span className=" text-blue-300/80">everything you use.</span>
            </h2>

            <p className="text-[21px] text-slate-300 leading-[1.6] max-w-lg font-semibold">
              Selfnode plugs directly into your existing workflow—from CRM and email to project management and communication tools. Your AI revenue engine runs where you already work.
            </p>

            {/* Micro-Interaction: Security Badge */}
            <div className="mt-14 flex items-center gap-6">
             
              <div className="h-12 w-px bg-slate-700" />
              <div>
                <div className="text-white font-black text-base leading-none mb-2">Enterprise-Grade Security</div>
                <div className="text-slate-400 text-xs font-mono uppercase tracking-wide">SOC 2 • AES-256 • OAuth 2.0</div>
              </div>
            </div>
          </div>

          {/* RIGHT: The "Floating Engine" Layout */}

            {/* The Central Hub */}

            <div className="relative z-20 grid grid-cols-3 gap-7 p-10 bg-white/[0.03] border border-white/[0.15] rounded-[44px] backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
        {/* 1. LinkedIn */}
        <IntegrationIcon label="LinkedIn" color="#0077b5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </IntegrationIcon>

        {/* 2. Upwork */}
        <IntegrationIcon label="Upwork" color="#14a800" delay={0.1}>
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
        </IntegrationIcon>

        {/* 3. Fiverr */}
        <IntegrationIcon label="Fiverr" color="#1dbf73" delay={0.2}>
          <path d="M17.113 7.915h-2.333V5.592c0-.623.475-1.05 1.146-1.05h1.187V1.166H14.73c-2.57 0-4.223 1.547-4.223 4.19v2.559H8.226v3.35h2.281v9.231h3.766v-9.231h2.84zm6.887 2.231c0 1.146-.93 2.076-2.076 2.076a2.076 2.076 0 112.076-2.076z"/>
        </IntegrationIcon>

        {/* 4. Gmail */}
        <IntegrationIcon label="Gmail" color="#EA4335" delay={0.3}>
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </IntegrationIcon>

        {/* 5. Center Brand Logo */}
        <div className="flex items-center justify-center relative">
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl shadow-[0_20px_40px_rgba(79,70,229,0.4)] z-10 flex items-center justify-center border border-white/20">
            <span className="text-white text-4xl font-black italic tracking-tighter">S</span>
          </div>
        </div>

        {/* 6. Outlook */}
        <IntegrationIcon label="Outlook" color="#0078d4" delay={0.4}>
          <path d="M0 12l11-3.5v13.5l-11-2v-8zm12-3.1l9.5-2.4v13l-9.5-2.5v-8.1zm2-1.4l6-1.5v11l-6-1.5v-8zM24 6.5v11l-2 0.5v-12l2 0.5z" />
        </IntegrationIcon>

        {/* 7. Slack */}
        <IntegrationIcon label="Slack" color="#4A154B" delay={0.5}>
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.263 0a2.527 2.527 0 0 1 2.522-2.52h2.52v12.64A2.528 2.528 0 0 1 8.825 24a2.528 2.528 0 0 1-2.52-2.523v-6.312zM8.825 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.825 0a2.527 2.527 0 0 1 2.522 2.52v2.522h-2.522zm0 1.263a2.527 2.527 0 0 1 2.522 2.522v2.52H1.263A2.528 2.528 0 0 1 1.263 8.825a2.528 2.528 0 0 1 2.52-2.52h5.042zm10.133 3.86a2.528 2.528 0 0 1 2.52-2.523A2.528 2.528 0 0 1 24 8.835a2.527 2.527 0 0 1-2.522 2.52h-2.52v-2.52zm-1.263 0a2.527 2.527 0 0 1-2.522 2.52h-2.52V0c1.394 0 2.522 1.128 2.522 2.52v6.312zm-3.83 10.133a2.528 2.528 0 0 1 2.52 2.52a2.528 2.528 0 0 1-2.52 2.522a2.527 2.527 0 0 1-2.522-2.52v-2.522h2.522zm0-1.263a2.527 2.527 0 0 1-2.522-2.522v-2.52h10.043a2.528 2.528 0 0 1 0 5.042h-5.042z"/>
        </IntegrationIcon>

        {/* 8. Yahoo */}
        <IntegrationIcon label="Yahoo" color="#6001d2" delay={0.6}>
          <path d="M14.286 12.394l8.361-12.394h-5.227l-5.712 8.528-5.83-8.528h-5.352l8.471 12.333v7.273h5.289v-7.212z"/>
        </IntegrationIcon>

        {/* 9. Notion */}
        <IntegrationIcon label="Notion" color="#000000" delay={0.7}>
          <path d="M4.46 2h15.08c.806 0 1.46.654 1.46 1.46v17.08c0 .806-.654 1.46-1.46 1.46H4.46c-.806 0-1.46-.654-1.46-1.46V3.46C3 2.654 3.654 2 4.46 2zM17.15 17.5V7h-1.5l-3 4.5L9.65 7h-1.5v10.5h1.5v-7.5l3 4.5 3-4.5v7.5h1.5z" />
        </IntegrationIcon>

      </div>
    </div>

        {/* BOTTOM: High-Precision Stats */}
        <div className="mt-32 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-12">
          <Stat label="Active Integrations" value="8+" />
          <Stat label="Sync Time" value="< 150ms" />
          <Stat label="Data Security" value="SOC 2" isCode />
          <Stat label="API Uptime" value="99.99%" />
        </div>
      </div>
    </section>
  );
};

// --- Sub-components ---

const IntegrationIcon: React.FC<IntegrationIconProps & { delay?: number }> = ({ children, label, color, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ y: -8, scale: 1.05 }}
    className="group relative flex flex-col items-center gap-4"
  >
    <div 
      className="w-20 h-20 rounded-[20px] flex items-center justify-center transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-2xl"
      style={{ 
        backgroundColor: `${color}18`, 
        border: `2px solid ${color}40`,
        boxShadow: `0 4px 20px ${color}20`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <svg className="w-10 h-10 relative z-10 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" style={{ color: color }}>
        {children}
      </svg>
    </div>
    <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.1em] opacity-70 group-hover:opacity-100 group-hover:text-white transition-all">
      {label}
    </span>
  </motion.div>
);

const Stat: React.FC<{ label: string; value: string; isCode?: boolean }> = ({ label, value, isCode }) => (
  <div>
    <div className={`text-4xl font-black text-white mb-3 tracking-tight ${isCode ? 'font-mono text-3xl' : ''}`}>
      {value}
    </div>
    <div className="text-[12px] font-extrabold text-slate-400 uppercase tracking-[0.15em]">
      {label}
    </div>
  </div>
);

export default EnterpriseIntegrations;