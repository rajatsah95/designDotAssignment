export default function Contact() {
  return (
    <div className="page min-h-screen relative flex items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-white/80" />

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 py-12 w-full flex justify-center m-2.5">
        
        {/* Card */}
        <div className="grid md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full p-2.5 gap-2.5">
          
          {/* Left Section */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-2.5 m-2.5 flex flex-col justify-center rounded-xl">
            <h2 className="text-3xl font-bold mb-2.5">Let's Talk</h2>
            <p className="m-2.5">We’re here to help you build something great.</p>
          </div>

          {/* Form */}
          <form className="p-2.5 m-2.5 flex flex-col gap-2.5 bg-white rounded-xl">
            
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2.5 m-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-2.5 m-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              placeholder="Your Message"
              className="border p-2.5 m-2.5 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button className="bg-cyan-500 text-white py-3 px-4 m-2.5 rounded-lg hover:bg-cyan-600 transition">
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

