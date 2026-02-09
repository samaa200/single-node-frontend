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
          <div className="relative">
            {/* The Central Hub */}
            <div className="relative z-20 grid grid-cols-3 gap-7 p-10 bg-white/[0.03] border border-white/[0.15] rounded-[44px] backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
              <IntegrationIcon label="LinkedIn" color="#0A66C2">
                 <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </IntegrationIcon>
              
              <IntegrationIcon label="Salesforce" color="#00A1E0" delay={0.1}>
                 <path d="M10.005 5.116a4.876 4.876 0 0 1 4.856-4.371 4.68 4.68 0 0 1 3.359 1.394 6.7 6.7 0 0 1 1.699-.216c3.588 0 6.597 2.827 6.763 6.383a5.14 5.14 0 0 1 1.318 3.403c0 2.855-2.426 5.291-5.391 5.291H6.77c-3.294 0-5.77-2.536-5.77-5.601a5.6 5.6 0 0 1 3.828-5.303 4.84 4.84 0 0 1 5.177-1.98z"/>
              </IntegrationIcon>

              <IntegrationIcon label="Slack" color="#E01E5A" delay={0.2}>
                 <path d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5z" />
              </IntegrationIcon>

              <IntegrationIcon label="HubSpot" color="#FF7A59" delay={0.3}>
                 <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.084A2.197 2.197 0 0017.237.828h-.084a2.197 2.197 0 00-2.194 2.194v.084a2.198 2.198 0 001.267 1.978V7.93a5.036 5.036 0 00-2.734 1.279L9.573 6.29a2.437 2.437 0 10-1.152 1.269l3.923 2.876a5.028 5.028 0 101.532-4.146" />
              </IntegrationIcon>

              {/* Center Logo - Your Brand */}
              <div className="flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-3xl animate-pulse" />
                 <div className="w-20 h-20 bg-gradient-to-br from-white to-slate-100 rounded-[20px] shadow-[0_0_60px_rgba(99,102,241,0.6),0_0_100px_rgba(168,85,247,0.3)] z-10 flex items-center justify-center font-black text-3xl text-indigo-600 border border-white/20">
                    S
                 </div>
              </div>

              <IntegrationIcon label="Upwork" color="#14A800" delay={0.4}>
                 <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703" />
              </IntegrationIcon>

              <IntegrationIcon label="Gmail" color="#EA4335" delay={0.5}>
                 <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </IntegrationIcon>

              <IntegrationIcon label="Zapier" color="#FF4A00" delay={0.6}>
                 <path d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2" />
              </IntegrationIcon>

              <IntegrationIcon label="Notion" color="#000000" delay={0.7}>
                 <path d="M4 4L12 2L20 4V20L12 22L4 20V4Z" />
              </IntegrationIcon>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/[0.08] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/[0.04] rounded-full pointer-events-none" />
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