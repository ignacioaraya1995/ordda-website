import {Navbar} from '@/components/navbar';
import {Hero} from '@/components/hero';
import {Problem} from '@/components/problem';
import {Features} from '@/components/features';
import {HowItWorks} from '@/components/how-it-works';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
      </main>
    </>
  );
}
