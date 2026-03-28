export default function About() {
  return (
    <div className="page min-h-screen relative flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Build Something Amazing</h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8">
         At MyCompany, we specialize in delivering cutting-edge digital solutions that empower businesses to grow and innovate.
          Our team combines creativity with technology to build impactful products.
        </p>
      </div>
    </div>
  );
}
