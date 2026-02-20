import {useTranslations} from 'next-intl';

export function Metrics() {
  const t = useTranslations('metrics');

  const metrics = [
    {value: t('metric1_value'), label: t('metric1_label')},
    {value: t('metric2_value'), label: t('metric2_label')},
    {value: t('metric3_value'), label: t('metric3_label')},
  ];

  return (
    <section className="bg-[#1a1f36] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center text-balance">
          {t('title')}
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="text-5xl font-bold text-[#25D366] tabular-nums">{m.value}</div>
              <div className="mt-2 text-lg text-gray-300">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
