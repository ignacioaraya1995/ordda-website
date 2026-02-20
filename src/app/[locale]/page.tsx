import {Navbar} from '@/components/navbar';
import {Hero} from '@/components/hero';
import {Problem} from '@/components/problem';
import {Features} from '@/components/features';
import {HowItWorks} from '@/components/how-it-works';
import {Metrics} from '@/components/metrics';
import {WaitlistForm} from '@/components/waitlist-form';
import {Footer} from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Metrics />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
