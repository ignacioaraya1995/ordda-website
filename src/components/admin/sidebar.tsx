const sections = [
  {id: 'architecture', label: 'Architecture'},
  {id: 'conversation-flow', label: 'Conversation Flow'},
  {id: 'services', label: 'Services'},
  {id: 'api-endpoints', label: 'API Endpoints'},
  {id: 'environment', label: 'Environment Setup'},
  {id: 'testing', label: 'Testing'},
];

export function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-[#1a1f36] text-white p-6 overflow-y-auto">
      <div className="mb-8">
        <a href="/" className="text-xl font-bold hover:text-[#25D366] transition-colors">
          Ordda
        </a>
        <p className="text-xs text-gray-400 mt-1">Admin Documentation</p>
      </div>

      <nav className="space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-xs text-gray-500">Stack</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {['Hono', 'Firestore', 'Gemini', 'WhatsApp', 'SII', 'Cloud Run'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[10px] font-medium bg-white/10 rounded-full text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
