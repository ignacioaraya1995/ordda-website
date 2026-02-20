export function ArchitectureOverview() {
  return (
    <section id="architecture" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-[#1a1f36] mb-6">Architecture Overview</h2>

      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <p className="text-gray-600 leading-relaxed">
          Ordda is a conversational AI platform for Chilean SMEs built on <strong>Hono.js</strong> with{' '}
          <strong>WhatsApp Cloud API</strong> integration. The system processes natural language in Chilean
          Spanish to automate invoicing, payments, tax compliance, and cash flow management.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-[#1a1f36] mb-4">Core Flow</h3>
      <div className="flex flex-wrap items-center gap-2 text-sm mb-8">
        {[
          'WhatsApp Message',
          'Webhook',
          'Intent Classifier (Gemini)',
          'Action Router',
          'Handler',
          'Firestore + SII',
          'WhatsApp Response',
        ].map((step, i, arr) => (
          <span key={i} className="flex items-center gap-2">
            <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg font-medium text-[#1a1f36]">
              {step}
            </span>
            {i < arr.length - 1 && <span className="text-gray-400">&rarr;</span>}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-[#1a1f36] mb-4">Tech Stack</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {layer: 'Backend', tech: 'Hono.js + TypeScript + Cloud Run'},
          {layer: 'Database', tech: 'Firestore (writes) + BigQuery (analytics)'},
          {layer: 'AI', tech: 'Google Gemini (intent classification)'},
          {layer: 'Messaging', tech: 'WhatsApp Cloud API'},
          {layer: 'Tax/Invoicing', tech: 'SII DTE Pipeline (electronic invoicing)'},
          {layer: 'Auth', tech: 'Firebase Authentication (RBAC)'},
          {layer: 'Email', tech: 'SendGrid'},
          {layer: 'SMS/Voice', tech: 'Twilio'},
        ].map((item) => (
          <div key={item.layer} className="flex gap-3 p-3 bg-white border border-gray-100 rounded-xl">
            <span className="text-sm font-semibold text-[#1a1f36] min-w-[80px]">{item.layer}</span>
            <span className="text-sm text-gray-600">{item.tech}</span>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-[#1a1f36] mt-8 mb-4">Project Structure</h3>
      <pre className="bg-[#1a1f36] text-gray-300 text-sm p-6 rounded-2xl overflow-x-auto">
{`apps/api/src/
├── index.ts              # Main Hono app, routes, middleware
├── middleware/            # Auth, rate-limit, cache, security
├── lib/                  # 40+ utilities (WhatsApp, AI, Firestore, etc.)
├── services/
│   ├── conversation/     # WhatsApp conversational engine (CORE)
│   ├── invoicing/        # Invoice CRUD + status management
│   ├── payments/         # Payment CRUD + matching + aging
│   ├── tax/              # Tax summaries + F29 reminders
│   ├── sii/              # Chilean DTE electronic invoicing
│   ├── cashflow/         # Cash flow aggregation + forecasting
│   └── whatsapp/         # Message sending + activity logging
├── routes/
│   ├── webhooks/         # WhatsApp, Twilio, SendGrid, Lob
│   └── ...               # 50+ API endpoints
└── scripts/              # Beta setup, seeds, migrations`}
      </pre>
    </section>
  );
}
