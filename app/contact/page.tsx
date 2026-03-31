export default function Contact() {
  return (
    <>
      <div className="box relative w-full max-w-[1920px] h-[900px] overflow-hidden flex flex-col items-center justify-center px-6 md:px-16 bg-[url('/map.jpg')] bg-cover bg-center bg-no-repeat">
        
        {/* Centered Content */}
        <div className="w-full md:w-auto text-center max-w-xl z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-black-300 mb-8">
            Have questions or need support? Fill out the form below and our team will get back to you promptly.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg transition">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </>
  );
}