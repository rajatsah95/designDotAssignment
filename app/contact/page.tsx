// export default function Contact() {
//   return (
//     <div className="page min-h-screen relative flex items-center justify-center text-center px-6 overflow-hidden">
      
//       {/* Background */}
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
//       <div className="absolute inset-0 bg-white/80" />

//       {/* Content Wrapper */}
//       <div className="relative z-10 px-6 py-12 w-full flex justify-center m-2.5">
        
//         {/* Card */}
//         <div className="grid md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full p-2.5 gap-2.5">
          
//           {/* Left Section */}
//           <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-2.5 m-2.5 flex flex-col justify-center rounded-xl">
//             <h2 className="text-3xl font-bold mb-2.5">Let's Talk</h2>
//             <p className="m-2.5">We’re here to help you build something great.</p>
//           </div>

//           {/* Form */}
//           <form className="p-2.5 m-2.5 flex flex-col gap-2.5 bg-white rounded-xl">
            
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="border p-2.5 m-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />

//             <input
//               type="email"
//               placeholder="Your Email"
//               className="border p-2.5 m-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />

//             <textarea
//               placeholder="Your Message"
//               className="border p-2.5 m-2.5 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />

//             <button className="bg-cyan-500 text-white py-3 px-4 m-2.5 rounded-lg hover:bg-cyan-600 transition">
//               Send Message
//             </button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Contact() {
//   return (
//     // Main container
//     <>
//       <div className="box relative w-full max-w-[1920px] h-[1100px] md:h-[1100px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-[url('/map.jpg')] bg-cover bg-center bg-no-repeat">
        
//         {/* Left Content */}
//         <div className="w-full md:w-1/2 text-black max-w-xl text-left z-10">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Get in Touch
//           </h1>
//           <p className="text-lg md:text-xl text-black-300 mb-8">
//             Have questions or need support? Fill out the form below and our team will get back to you promptly.
//           </p>
//           <form className="flex flex-col gap-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows={4}
//               className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg transition">
//               Send Message
//             </button>
//           </form>
//         </div>

      

//       </div>

   
//     </>
//   );
// }

// 

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