export function EnvironmentSetup() {
  const envGroups = [
    {
      group: 'Server',
      vars: [
        {name: 'PORT', example: '8080', required: true},
        {name: 'NODE_ENV', example: 'development', required: true},
        {name: 'API_BASE_URL', example: 'http://localhost:8080', required: true},
      ],
    },
    {
      group: 'WhatsApp (Ordda)',
      vars: [
        {name: 'WHATSAPP_PHONE_NUMBER_ID', example: 'your-phone-number-id', required: true},
        {name: 'WHATSAPP_ACCESS_TOKEN', example: 'your-access-token', required: true},
        {name: 'WHATSAPP_VERIFY_TOKEN', example: 'any-secret-string', required: true},
        {name: 'WHATSAPP_APP_SECRET', example: 'your-app-secret', required: false},
      ],
    },
    {
      group: 'Firebase',
      vars: [
        {name: 'GOOGLE_APPLICATION_CREDENTIALS', example: './keys/firebase-sa.json', required: true},
        {name: 'FIRESTORE_DATABASE_ID', example: '(default)', required: false},
      ],
    },
    {
      group: 'AI (Gemini)',
      vars: [
        {name: 'GEMINI_API_KEY', example: 'your-gemini-api-key', required: true},
        {name: 'GEMINI_DEFAULT_MODEL', example: 'gemini-2.0-flash-lite', required: false},
        {name: 'AI_MOCK_MODE', example: 'false', required: false},
      ],
    },
    {
      group: 'Cloud Scheduler',
      vars: [
        {name: 'SCHEDULER_SECRET', example: 'your-scheduler-secret', required: false},
      ],
    },
  ];

  return (
    <section id="environment" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-[#1a1f36] mb-6">Environment Setup</h2>

      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <p className="text-sm text-gray-600">
          Copy <code className="px-1.5 py-0.5 bg-white rounded text-[#1a1f36] text-xs font-mono">apps/api/.env.example</code> to{' '}
          <code className="px-1.5 py-0.5 bg-white rounded text-[#1a1f36] text-xs font-mono">apps/api/.env</code> and fill in your credentials.
        </p>
      </div>

      <div className="space-y-8">
        {envGroups.map((group) => (
          <div key={group.group}>
            <h3 className="text-base font-semibold text-[#1a1f36] mb-3">{group.group}</h3>
            <div className="space-y-2">
              {group.vars.map((v) => (
                <div key={v.name} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl">
                  <code className="text-xs font-mono text-[#1a1f36] font-semibold min-w-[240px]">{v.name}</code>
                  <span className="text-xs text-gray-400 font-mono flex-1">{v.example}</span>
                  {v.required ? (
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-red-50 text-red-600 rounded-full">required</span>
                  ) : (
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-gray-50 text-gray-400 rounded-full">optional</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-[#1a1f36] mt-8 mb-4">Local Development</h3>
      <div className="space-y-3">
        {[
          {cmd: './setup.sh', desc: 'Install all dependencies'},
          {cmd: './start.sh --api', desc: 'Start API server on port 8080'},
          {cmd: 'ngrok http 8080', desc: 'Expose local server for WhatsApp webhooks'},
          {cmd: './test.sh', desc: 'Run all 404 Ordda tests'},
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
