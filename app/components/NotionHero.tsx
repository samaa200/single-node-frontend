'use client';

import TypingCode  from './TypingCode';

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
            Your AI clone.<br />
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

      {/* Trusted by section with independent sizing */}
      <div className="w-full max-w-6xl mx-auto mt-20 text-center relative z-10 px-6">
  {/* Subtitle with premium tracking */}
  <p className="text-xs font-bold text-slate-400 mb-10 uppercase tracking-[0.2em]">
    Powering modern teams at
  </p>
  
  <div className="flex items-center justify-center gap-x-12 gap-y-8 flex-wrap opacity-50 grayscale hover:opacity-100 transition-all duration-700 ease-in-out">
    
    {/* LinkedIn */}
    <svg className="h-7 text-slate-700 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>

    {/* Upwork */}
    <div className="flex items-center gap-1 text-slate-700">
      <svg className="h-7 fill-current" viewBox="0 0 24 24">
        <path d="M18.561 3.322c-2.542 0-4.162 1.441-5.03 3.696-1.012-1.446-1.722-3.022-2.104-4.22H8.583v6.161c0 1.525-1.238 2.763-2.763 2.763s-2.763-1.238-2.763-2.763V2.798H0v6.161c0 3.052 2.474 5.526 5.526 5.526 2.1 0 3.93-1.174 4.896-2.91.433 1.127 1.137 2.426 2.112 3.633l-2.302 9.094h3.13l1.625-6.41c.742.544 1.543.818 2.37.818 3.52 0 6.643-2.842 6.643-7.652s-3.052-7.746-6.439-7.746zm0 12.316c-.953 0-1.845-.394-2.53-1.108l.303-1.196c.214-1.446.753-3.084 1.581-4.266.39-.56.884-.91 1.432-.91 1.718 0 3.235 1.42 3.235 4.74s-1.42 4.74-4.02 4.74z"/>
      </svg>
      <span className="font-bold text-2xl tracking-tighter">Upwork</span>
    </div>

    {/* Fiverr */}
    <div className="text-slate-700 font-black text-3xl tracking-tighter">
      fiverr<span className="text-emerald-500">.</span>
    </div>

    {/* Gmail */}
    <div className="flex items-center gap-2 text-slate-700">
      <svg className="h-6 fill-current" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.635-1.636 1.635h-3.819V11.73L12 16.38l-6.545-4.65v9.27H1.636A1.638 1.638 0 0 1 0 19.366V5.457c0-1.356 1.509-2.154 2.622-1.383L12 10.704l9.378-6.63C22.49 3.303 24 4.101 24 5.457z"/>
      </svg>
      <span className="font-semibold text-xl tracking-tight">Gmail</span>
    </div>

    {/* Outlook */}
    <div className="flex items-center gap-2 text-slate-700">
      <svg className="h-7 fill-current" viewBox="0 0 24 24">
        <path d="M12 0L1.606 1.833v20.334L12 24V0zm.938 2.438L22.394 4.33v15.34l-9.456 1.891V2.438zM5.312 8.438v1.874h1.876V8.438H5.312zm0 3.125v1.876h1.876v-1.876H5.312zm0 3.124v1.876h1.876v-1.876H5.312z"/>
      </svg>
      <span className="font-bold text-xl tracking-tight">Outlook</span>
    </div>
    
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
