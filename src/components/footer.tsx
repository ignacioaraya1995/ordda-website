import {useTranslations} from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-lg font-bold text-[#1a1f36]">Ordda</span>
        <div className="text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Ordda. {t('rights')}
        </div>
        <span className="text-sm text-gray-500">{t('made_in')} 🇨🇱</span>
      </div>
    </footer>
  );
}
