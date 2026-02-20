import {Navbar} from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1a1f36]">Ordda</h1>
          <p className="mt-4 text-lg text-gray-600">Landing page coming soon...</p>
        </div>
      </main>
    </>
  );
}
