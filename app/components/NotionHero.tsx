'use client';

import TypingCode  from './TypingCode';
import { FaLinkedin, FaSlack, FaYahoo } from "react-icons/fa";
import {
  SiUpwork,
  SiFiverr,
  SiGmail,
  SiNotion,
} from "react-icons/si";

const integrations = [
  { Icon: FaLinkedin, color: "#0A66C2", name: "LinkedIn" },
  { Icon: SiUpwork, color: "#14A800", name: "Upwork" },
  { Icon: SiFiverr, color: "#1DBF73", name: "Fiverr" },
  { Icon: SiGmail, color: "#EA4335", name: "Gmail" },
  { Icon: FaSlack, color: "#4A154B", name: "Slack" },
  { Icon: FaYahoo, color: "#6001D2", name: "Yahoo" },
  { Icon: SiNotion, color: "#000000", name: "Notion" },
];

export default function NotionHero({ onJoinBetaClick }: { onJoinBetaClick: () => void }) {
 const codeLines = [
  [
    { text: '@workflow.defn', color: 'text-slate-500' },
  ],
  [
    { text: 'class ', color: 'text-purple-600' },
    { text: 'AutonomousRevenueEngine', color: 'text-indigo-600' },
    { text: '(', color: 'text-slate-800' },
    { text: 'workflow.Workflow', color: 'text-slate-700' },
    { text: '):', color: 'text-slate-800' },
  ],
  [
    { text: '    # Discover, engage, and convert — automatically', color: 'text-slate-500' },
  ],
  [
    { text: '    # Self-improving pipeline orchestration', color: 'text-slate-500' },
  ],
  [
    { text: '    @workflow.run', color: 'text-slate-500' },
  ],
  [
    { text: '    async ', color: 'text-purple-600' },
    { text: 'def ', color: 'text-purple-600' },
    { text: 'run', color: 'text-indigo-600' },
    { text: '(self)', color: 'text-slate-800' },
    { text: ' -> ', color: 'text-slate-800' },
    { text: 'RevenueOutcome', color: 'text-emerald-600' },
    { text: ':', color: 'text-slate-800' },
  ],

  [
    { text: '        opportunities = await ', color: 'text-purple-600' },
    { text: 'workflow.execute_activity', color: 'text-indigo-600' },
    { text: '(', color: 'text-slate-800' },
  ],
  [
    { text: '            discover_high_intent_prospects,', color: 'text-slate-800' },
  ],
  [
    { text: '        )', color: 'text-slate-800' },
  ],

  [
    { text: '        signals = await ', color: 'text-purple-600' },
    { text: 'workflow.execute_activity', color: 'text-indigo-600' },
    { text: '(mine_inbox_for_buying_signals)', color: 'text-slate-800' },
  ],

  [
    { text: '        qualified = await ', color: 'text-purple-600' },
    { text: 'workflow.execute_activity', color: 'text-indigo-600' },
    { text: '(apply_intelligent_filters, opportunities + signals)', color: 'text-slate-800' },
  ],

  [
    { text: '        voice_model = await ', color: 'text-purple-600' },
    { text: 'workflow.execute_activity', color: 'text-indigo-600' },
    { text: '(replicate_founder_voice)', color: 'text-slate-800' },
  ],

  [
    { text: '        proposals = await ', color: 'text-purple-600' },
    { text: 'workflow.execute_activity', color: 'text-indigo-600' },
    { text: '(generate_conversion_ready_proposals)', color: 'text-slate-800' },
  ],

  [
    { text: '        await ', color: 'text-purple-600' },
    { text: 'workflow.execute_activity', color: 'text-indigo-600' },
    { text: '(launch_multichannel_outreach)', color: 'text-slate-800' },
  ],

  [
    { text: '        revenue_metrics = await ', color: 'text-purple-600' },
    { text: 'workflow.execute_activity', color: 'text-indigo-600' },
    { text: '(track_pipeline_performance)', color: 'text-slate-800' },
  ],

  [
    { text: '        await ', color: 'text-purple-600' },
    { text: 'workflow.execute_activity', color: 'text-indigo-600' },
    { text: '(continuously_optimize_decisions, revenue_metrics)', color: 'text-slate-800' },
  ],

  [
    { text: '        return ', color: 'text-purple-600' },
    { text: 'RevenueOutcome.accelerated()', color: 'text-emerald-600' },
  ],
];

  return (
    <section className="relative bg-[#fafaf9] min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main hero content wrapper */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated character icons - Notion style */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl animate-float" style={{animationDelay: '0s'}}>📚</div>
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-xl animate-float" style={{animationDelay: '0.2s'}}>👨‍💼</div>
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white text-xl animate-float" style={{animationDelay: '0.4s'}}>👩‍💻</div>
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl animate-float" style={{animationDelay: '0.6s'}}>💡</div>
          <div className="w-14 h-14 rounded-full bg-white border-4 border-gray-900 flex items-center justify-center text-2xl animate-float" style={{animationDelay: '0.8s'}}>🤖</div>
          <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white text-xl animate-float" style={{animationDelay: '1s'}}>🎯</div>
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-xl animate-float" style={{animationDelay: '1.2s'}}>👩‍🔧</div>
          <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white text-xl animate-float" style={{animationDelay: '1.4s'}}>⚡</div>
          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xl animate-float" style={{animationDelay: '1.6s'}}>✓</div>
        </div>

        {/* Headline - Notion style */}
        <div className="text-center mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-700 leading-none mb-6 tracking-tight">
            Your AI Twin.<br />
            Zero manual work.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selfnode runs your entire revenue workflow — sourcing high-intent opportunities, replicating your communication style, generating persuasive proposals, orchestrating outreach, filtering signal from noise, tracking performance, and continuously learning to improve outcomes.
          </p>
        </div>

        {/* CTA Buttons - Notion style */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={onJoinBetaClick}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Join Beta
          </button>
        </div>
      </div>

      {/* Code block with independent sizing, directly below CTA */}
      <div className=" w-full max-w-[90%] lg:max-w-[70%] mx-auto my-5 relative z-15">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-1xl border border-gray-200">
          {/* macOS window bar */}
          <div className="bg-gray-50 px-6 py-4 flex items-center gap-2 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
            </div>
            <span className="ml-4 text-sm font-medium text-gray-600"></span>
          </div>
          {/* Code content */}
          <div className="w-full px-4 py-4 sm:px-10 sm:py-12 md:px-12 md:py-14 bg-white min-h-[600px] sm:min-h-[600px] overflow-hidden">
            <TypingCode
              lines={codeLines}
              typingSpeed={35}
              pauseBeforeFade={1200}
              fadeDuration={600}
              restartDelay={400}
            />
          </div>
        </div>
      </div>

    <div className="w-full max-w-6xl mx-auto mt-20 text-center px-6">
      {/* Subtitle */}
      <p className="text-xs font-bold text-slate-400 mb-10 uppercase tracking-[0.2em]">
        Powering modern teams at
      </p>

      {/* Logo row */}
      <div className="flex justify-center flex-wrap gap-x-16 gap-y-12">
        {integrations.map(({ Icon, color, name }, i) => (
          <div
            key={i}
            className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <Icon size={42} color={color} title={name} />
          </div>
        ))}
      </div>
    </div>


      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
