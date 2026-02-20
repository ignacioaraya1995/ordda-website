export function TestingSection() {
  const modules = [
    {name: 'conversation', tests: 133, description: 'Intent classifier, action router, all handlers'},
    {name: 'invoicing', tests: 25, description: 'Invoice CRUD, status transitions, IVA calculation'},
    {name: 'payments', tests: 35, description: 'Payment CRUD, matcher, aging, reminders'},
    {name: 'tax', tests: 30, description: 'Tax summary, boletas, F29 reminders'},
    {name: 'sii', tests: 80, description: 'Certificate, auth, DTE builder, signer, submission'},
    {name: 'cashflow', tests: 15, description: 'Monthly aggregation, forecasting'},
    {name: 'whatsapp', tests: 40, description: 'Client, webhook, send service, integration'},
    {name: 'infra', tests: 12, description: 'Beta workspace setup, scheduled tasks'},
  ];

  return (
    <section id="testing" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-[#1a1f36] mb-6">Testing</h2>

      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-6">
          <div>
            <div className="text-3xl font-bold text-[#25D366] tabular-nums">404</div>
            <div className="text-sm text-gray-500">total tests</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#1a1f36] tabular-nums">23</div>
            <div className="text-sm text-gray-500">test files</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#1a1f36] tabular-nums">5</div>
            <div className="text-sm text-gray-500">sprints</div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#1a1f36] mb-4">Test Modules</h3>
      <div className="space-y-2">
        {modules.map((mod) => (
          <div key={mod.name} className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-xl">
            <code className="text-xs font-mono text-[#1a1f36] font-semibold min-w-[110px]">
              ./test.sh {mod.name}
            </code>
            <span className="text-sm text-gray-600 flex-1">{mod.description}</span>
            <span className="px-2.5 py-1 text-xs font-semibold bg-green-50 text-[#128c3e] rounded-full tabular-nums">
              ~{mod.tests}
            </span>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-[#1a1f36] mt-8 mb-4">Commands</h3>
      <div className="space-y-2">
        {[
          {cmd: './test.sh', desc: 'Run all Ordda tests with AI-friendly summary'},
          {cmd: './test.sh conversation', desc: 'Run conversation engine tests only'},
          {cmd: './test.sh sii', desc: 'Run SII pipeline tests only'},
          {cmd: './validate.sh --mode unit', desc: 'Run CRM app unit tests'},
          {cmd: 'npm run test:e2e', desc: 'Run Playwright E2E tests (16 suites)'},
        ].map((item) => (
          <div key={item.cmd} className="flex items-center gap-4 p-3 bg-[#1a1f36] rounded-xl">
            <code className="text-sm font-mono text-[#25D366]">$ {item.cmd}</code>
            <span className="text-sm text-gray-400">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
