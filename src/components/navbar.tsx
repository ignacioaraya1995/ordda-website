import {useTranslations} from 'next-intl';
import {LanguageToggle} from './language-toggle';

export function Navbar() {
  const t = useTranslations('nav');

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-[#1a1f36]">Ordda</span>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a
            href="#waitlist"
            className="hidden sm:inline-flex px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#20bd5a] transition-colors"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </nav>
  );
}
