import {Navbar} from '@/components/navbar';
import {Hero} from '@/components/hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
      </main>
    </>
  );
}
