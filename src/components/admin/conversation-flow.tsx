export function ConversationFlow() {
  const intents = [
    {intent: 'create_invoice', description: 'Generate factura/boleta via SII', example: '"Factura para Juan por $150.000"'},
    {intent: 'record_payment', description: 'Log incoming payment', example: '"Juan pago $100.000"'},
    {intent: 'check_payments', description: 'Check who owes money', example: '"Quien me debe?"'},
    {intent: 'get_cashflow', description: 'Monthly cash flow summary', example: '"Como va la caja?"'},
    {intent: 'sii_compliance', description: 'Tax compliance questions', example: '"Cuando vence el F29?"'},
    {intent: 'create_boleta', description: 'Boleta de honorarios', example: '"Boleta por $500.000"'},
    {intent: 'set_reminder', description: 'Payment reminders', example: '"Recordar cobro a Juan"'},
    {intent: 'onboarding', description: 'Business setup', example: 'First-time interaction'},
    {intent: 'help', description: 'What can Ordda do', example: '"Que puedes hacer?"'},
  ];

  return (
    <section id="conversation-flow" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-[#1a1f36] mb-6">Conversation Flow</h2>

      <h3 className="text-lg font-semibold text-[#1a1f36] mb-4">Message Processing Pipeline</h3>
      <div className="space-y-3 mb-8">
        {[
          {step: '1', title: 'Webhook Receives Message', desc: 'Meta sends POST to /api/webhooks/whatsapp. Signature verified (HMAC-SHA256).'},
          {step: '2', title: 'Workspace Resolution', desc: 'Phone number ID mapped to workspace. Conversation context loaded from Firestore.'},
          {step: '3', title: 'Intent Classification', desc: 'Gemini AI analyzes Chilean Spanish text. Returns intent, entities, confidence score.'},
          {step: '4', title: 'Action Routing', desc: 'Router dispatches to the appropriate handler based on classified intent.'},
          {step: '5', title: 'Handler Execution', desc: 'Handler validates entities, calls business logic (invoicing/payments/tax/cashflow).'},
          {step: '6', title: 'Response Sent', desc: 'Response formatted in Chilean Spanish, sent back via WhatsApp Cloud API.'},
        ].map((item) => (
          <div key={item.step} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl">
            <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#25D366] text-[#1a1f36] text-sm font-bold">
              {item.step}
            </div>
            <div>
              <h4 className="font-semibold text-[#1a1f36]">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-[#1a1f36] mb-4">Supported Intents</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-[#1a1f36]">Intent</th>
              <th className="text-left py-3 px-4 font-semibold text-[#1a1f36]">Description</th>
              <th className="text-left py-3 px-4 font-semibold text-[#1a1f36]">Example</th>
            </tr>
          </thead>
          <tbody>
            {intents.map((item) => (
              <tr key={item.intent} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <code className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono text-[#1a1f36]">
                    {item.intent}
                  </code>
                </td>
                <td className="py-3 px-4 text-gray-600">{item.description}</td>
                <td className="py-3 px-4 text-gray-500 italic">{item.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
