'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

export function WaitlistForm() {
  const t = useTranslations('waitlist');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, phone}),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
        setPhone('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" className="bg-white py-16 sm:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f36]">
          {t('title')}
        </h2>
        <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>

        {status === 'success' ? (
          <div className="mt-8 p-6 bg-green-50 rounded-2xl text-green-800 font-medium" role="status" aria-live="polite">
            {t('success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('email_placeholder')}
              aria-label={t('email_placeholder')}
              autoComplete="email"
              name="email"
              spellCheck={false}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t('phone_placeholder')}
              aria-label={t('phone_placeholder')}
              autoComplete="tel"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-[#25D366] text-[#1a1f36] text-lg font-semibold rounded-xl hover:bg-[#20bd5a] transition-colors disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1a1f36]"
            >
              {status === 'loading' ? '\u2026' : t('button')}
            </button>
            {status === 'error' && (
              <p className="text-red-600 text-sm" role="alert" aria-live="polite">{t('error')}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
