export function ApiEndpoints() {
  const webhooks = [
    {method: 'POST', route: '/api/webhooks/whatsapp', provider: 'Meta', purpose: 'Inbound WhatsApp messages + status updates'},
    {method: 'GET', route: '/api/webhooks/whatsapp', provider: 'Meta', purpose: 'Webhook verification (hub.challenge)'},
    {method: 'POST', route: '/api/webhooks/twilio/sms', provider: 'Twilio', purpose: 'SMS delivery status'},
    {method: 'POST', route: '/api/webhooks/twilio/voice', provider: 'Twilio', purpose: 'Call events (answered, completed)'},
    {method: 'POST', route: '/api/webhooks/sendgrid', provider: 'SendGrid', purpose: 'Email events (delivered, opened, clicked)'},
    {method: 'POST', route: '/api/webhooks/lob', provider: 'Lob', purpose: 'Mail tracking (sent, failed)'},
    {method: 'POST', route: '/api/webhooks/scheduled-tasks', provider: 'Cloud Scheduler', purpose: 'Cron tasks (F29 reminders)'},
  ];

  const healthEndpoints = [
    {method: 'GET', route: '/api/health', purpose: 'Liveness check (always 200)'},
    {method: 'GET', route: '/api/ready', purpose: 'Readiness check (verifies Firestore + Auth)'},
    {method: 'GET', route: '/api/admin/metrics', purpose: 'Request metrics + response times (admin only)'},
  ];

  return (
    <section id="api-endpoints" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-[#1a1f36] mb-6">API Endpoints</h2>

      <h3 className="text-lg font-semibold text-[#1a1f36] mb-4">Webhook Endpoints</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-[#1a1f36]">Method</th>
              <th className="text-left py-3 px-4 font-semibold text-[#1a1f36]">Route</th>
              <th className="text-left py-3 px-4 font-semibold text-[#1a1f36]">Provider</th>
              <th className="text-left py-3 px-4 font-semibold text-[#1a1f36]">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {webhooks.map((ep, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${ep.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-[#128c3e]'}`}>
                    {ep.method}
                  </span>
                </td>
                <td className="py-3 px-4 font-mono text-xs text-[#1a1f36]">{ep.route}</td>
                <td className="py-3 px-4 text-gray-600">{ep.provider}</td>
                <td className="py-3 px-4 text-gray-500">{ep.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-[#1a1f36] mb-4">Health &amp; Monitoring</h3>
      <div className="space-y-2">
        {healthEndpoints.map((ep, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-blue-100 text-blue-700">
              {ep.method}
            </span>
            <code className="text-xs font-mono text-[#1a1f36]">{ep.route}</code>
            <span className="text-sm text-gray-500">{ep.purpose}</span>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-[#1a1f36] mt-8 mb-4">Middleware Stack</h3>
      <div className="space-y-1.5">
        {[
          'Security headers (OWASP)',
          'CORS',
          'Request ID (tracing)',
          'Logging + timing',
          'Compression',
          'Global rate limit (1000 req/min)',
          'HTTP cache headers',
          'Firebase authentication',
          'Route handler',
        ].map((layer, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-100 rounded-lg">
            <span className="text-xs font-mono text-gray-400 tabular-nums w-5">{i + 1}.</span>
            <span className="text-sm text-gray-600">{layer}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
