export function ServicesSection() {
  const services = [
    {
      name: 'Conversation Engine',
      path: 'services/conversation/',
      description: 'Core WhatsApp AI orchestrator. Classifies intents via Gemini, routes to handlers, manages conversation state in Firestore.',
      files: ['intent-classifier.ts', 'action-router.ts', 'context-manager.ts', 'invoice-handler.ts', 'payment-handler.ts', 'cashflow-handler.ts', 'boleta-handler.ts', 'sii-compliance-handler.ts', 'onboarding.ts'],
      color: 'bg-green-50 text-[#128c3e]',
    },
    {
      name: 'Invoicing',
      path: 'services/invoicing/',
      description: 'Invoice CRUD with IVA calculation (19%), status transitions (draft → submitted → accepted → paid), and SII folio integration.',
      files: ['crud.ts', 'types.ts'],
      color: 'bg-blue-50 text-blue-700',
    },
    {
      name: 'Payments',
      path: 'services/payments/',
      description: 'Payment recording, fuzzy invoice matching by client name/folio, aging analysis (0-30, 31-60, 60+ days), and reminder generation.',
      files: ['crud.ts', 'matcher.ts', 'aging.ts', 'reminders.ts', 'types.ts'],
      color: 'bg-purple-50 text-purple-700',
    },
    {
      name: 'SII Pipeline',
      path: 'services/sii/',
      description: 'Chilean electronic invoicing (DTE). Handles certificate parsing, SII authentication, XML generation, 3-layer digital signing, submission, and PDF rendering.',
      files: ['certificate.ts', 'auth.ts', 'folio-manager.ts', 'dte-builder.ts', 'dte-signer.ts', 'submission.ts', 'pdf-renderer.ts', 'invoice-pipeline.ts'],
      color: 'bg-red-50 text-red-700',
    },
    {
      name: 'Tax',
      path: 'services/tax/',
      description: 'F29 IVA reporting, boleta de honorarios CRUD, monthly filing deadline calculation, and tax reminder generation.',
      files: ['summary.ts', 'boletas.ts', 'reminders.ts', 'types.ts'],
      color: 'bg-orange-50 text-orange-700',
    },
    {
      name: 'Cash Flow',
      path: 'services/cashflow/',
      description: 'Aggregates invoices and payments into monthly summaries with 3-month forecasting.',
      files: ['summary.ts', 'types.ts'],
      color: 'bg-teal-50 text-teal-700',
    },
    {
      name: 'WhatsApp',
      path: 'services/whatsapp/',
      description: 'Message sending via Cloud API (text + documents/PDFs) with activity logging to Firestore.',
      files: ['single-sender.ts', 'activity-logger.ts', 'types.ts'],
      color: 'bg-emerald-50 text-emerald-700',
    },
  ];

  return (
    <section id="services" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-[#1a1f36] mb-6">Services</h2>

      <div className="space-y-6">
        {services.map((service) => (
          <div key={service.name} className="border border-gray-100 rounded-2xl p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-[#1a1f36]">{service.name}</h3>
                <code className="text-xs text-gray-400 font-mono">{service.path}</code>
              </div>
              <span className={`px-2.5 py-1 text-[10px] font-semibold rounded-full ${service.color}`}>
                {service.files.length} files
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {service.files.map((file) => (
                <span key={file} className="px-2 py-0.5 text-[11px] font-mono bg-gray-50 text-gray-500 rounded">
                  {file}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
