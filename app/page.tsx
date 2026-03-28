export default function Home() {
  return (
    <div className="page min-h-screen relative flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Build Something Amazing</h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8">
          We craft modern, scalable, and high-performance digital experiences for businesses worldwide.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
