import {AdminSidebar} from '@/components/admin/sidebar';
import {ArchitectureOverview} from '@/components/admin/architecture-overview';
import {ConversationFlow} from '@/components/admin/conversation-flow';
import {ServicesSection} from '@/components/admin/services-section';
import {ApiEndpoints} from '@/components/admin/api-endpoints';
import {EnvironmentSetup} from '@/components/admin/environment-setup';
import {TestingSection} from '@/components/admin/testing-section';

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8 lg:p-12 max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-bold text-[#1a1f36]">Ordda</span>
            <span className="px-2.5 py-1 text-xs font-semibold bg-[#25D366]/10 text-[#128c3e] rounded-full">
              Admin Docs
            </span>
          </div>
          <h1 className="text-4xl font-bold text-[#1a1f36] text-balance">
            Backend Documentation
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Architecture, services, API endpoints, and setup guide for the Ordda WhatsApp AI operations agent.
          </p>
        </header>

        <ArchitectureOverview />
        <ConversationFlow />
        <ServicesSection />
        <ApiEndpoints />
        <EnvironmentSetup />
        <TestingSection />
      </main>
    </div>
  );
}
