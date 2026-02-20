import {useTranslations} from 'next-intl';

export function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {num: '1', title: t('step1_title'), desc: t('step1_desc')},
    {num: '2', title: t('step2_title'), desc: t('step2_desc')},
    {num: '3', title: t('step3_title'), desc: t('step3_desc')},
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f36] text-center">
          {t('title')}
        </h2>
        <div className="mt-12 flex flex-col md:flex-row items-start gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#25D366] text-white text-2xl font-bold">
                {step.num}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#1a1f36]">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
