// export default function About() {
//   return (
//     <div className="page min-h-screen relative flex items-center justify-center text-center px-6 overflow-hidden">
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center" />
//       <div className="absolute inset-0 bg-black/70" />

//       <div className="relative z-10 text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6">Build Something Amazing</h1>
//         <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8">
//          At MyCompany, we specialize in delivering cutting-edge digital solutions that empower businesses to grow and innovate.
//           Our team combines creativity with technology to build impactful products.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     // Main container
//     <>
//       <div className="box relative w-full max-w-[1920px] h-[500px] md:h-[650px] overflow-hidden flex items-center justify-start px-6 md:px-16">
        
//         {/* Blue gradient */}
//         <div className="absolute inset-0 bg-blue-900 z-0" />

//         {/* Masked background image (Building) */}
//         <div
//           className="absolute inset-0 bg-[url('/building.png')] bg-no-repeat bg-cover bg-right z-10"
//           style={{
//             WebkitMaskImage: "url('/Mask.png')",
//             WebkitMaskRepeat: "no-repeat",
//             WebkitMaskSize: "60%",
//             WebkitMaskPosition: "right center",

//             maskImage: "url('/Mask.png')",
//             maskRepeat: "no-repeat",
//             maskSize: "60%",
//             maskPosition: "right center",
//           }}
//         />

//         {/* Content */}
//         <div className="relative z-30 text-white max-w-xl text-left">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             About Our Company
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-8">
//             We are a forward-thinking company focused on building modern infrastructure 
//             and innovative digital solutions that shape the future of businesses.
//           </p>
//           <p className="text-gray-400 mb-8">
//             Our expertise spans across architecture, technology, and scalable systems, 
//             helping organizations grow with confidence and efficiency.
//           </p>
//           <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg transition">
//             Learn More
//           </button>
//         </div>

//       </div>

//       <div className="box2 relative w-full max-w-[1920px] overflow-hidden flex items-center justify-start px-6 md:px-16">
//         {/* About Highlights Section */}
//         <div className="w-full px-6 md:px-16 py-16 bg-gray-100">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Our Expertise
//           </h2>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Modern Architecture</h3>
//               <p className="text-gray-600">
//                 We design and build strong, scalable structures for the future.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Digital Innovation</h3>
//               <p className="text-gray-600">
//                 Leveraging technology to create impactful digital experiences.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Project Management</h3>
//               <p className="text-gray-600">
//                 Efficient planning and execution for timely project delivery.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
//               <p className="text-gray-600">
//                 Eco-friendly solutions for a better and greener tomorrow.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
//               <p className="text-gray-600">
//                 Delivering projects and services across international markets.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
//               <p className="text-gray-600">
//                 We prioritize customer satisfaction and long-term partnerships.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default function Home() {
//   return (
//     // Main container
//     <>
//       <div className="box relative w-full max-w-[1920px] h-[500px] md:h-[650px] overflow-hidden flex items-center justify-start px-6 md:px-16">
        
//         {/* Blue gradient */}
//         <div className="absolute inset-0 bg-blue-800 z-0" />

//         {/* Background image (Building - NO MASK) */}
//         <div
//           className="absolute inset-0 bg-[url('/building.png')] bg-no-repeat bg-cover bg-right z-10 opacity-70"
//         />

//         {/* Content */}
//         <div className="relative z-30 text-white max-w-xl text-left">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             About Our Company
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-8">
//             We build modern infrastructure and digital solutions that empower businesses 
//             to grow, innovate, and succeed in a rapidly evolving world.
//           </p>
//           <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg transition">
//             Learn More
//           </button>
//         </div>

//       </div>

//       <div className="box2 relative w-full max-w-[1920px] overflow-hidden flex items-center justify-start px-6 md:px-16">
//         {/* About Highlights Section */}
//         <div className="w-full px-6 md:px-16 py-16 bg-gray-100">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Our Expertise
//           </h2>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
//             {/* Card 1 */}
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Modern Architecture</h3>
//               <p className="text-gray-600">
//                 We design strong and scalable building solutions for the future.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Web Development</h3>
//               <p className="text-gray-600">
//                 Building fast, responsive, and modern web applications.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
//               <p className="text-gray-600">
//                 Scalable cloud systems powering global applications.
//               </p>
//             </div>

//             {/* Card 4 */}
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
//               <p className="text-gray-600">
//                 Protecting systems and sensitive business data.
//               </p>
//             </div>

//             {/* Card 5 */}
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
//               <p className="text-gray-600">
//                 Creating intuitive and engaging user experiences.
//               </p>
//             </div>

//             {/* Card 6 */}
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Project Management</h3>
//               <p className="text-gray-600">
//                 Efficient execution and delivery of projects.
//               </p>
//             </div>

//             {/* Card 7 */}
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
//               <p className="text-gray-600">
//                 Eco-friendly and future-ready solutions.
//               </p>
//             </div>

//             {/* Card 8 */}
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
//               <p className="text-gray-600">
//                 Delivering services across international markets.
//               </p>
//             </div>

//             {/* Card 9 */}
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
//               <p className="text-gray-600">
//                 Building long-term partnerships with clients.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function About() {
  return (
    // Main container
    <>
      <div className="box relative w-full max-w-[1920px] h-[500px] md:h-[650px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-[url('/map.jpg')] bg-cover bg-center bg-no-repeat">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-black max-w-xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl text-black-300 mb-8">
            We build modern infrastructure and digital solutions that empower businesses 
            to grow, innovate, and succeed in a rapidly evolving world.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center items-start transform translate-y-[50px]">
          <img
            src="/building.png"
            alt="Building"
            className="w-[90%] h-full object-cover rounded-3xl"
          />
        </div>

      </div>

      <div className="box2 relative w-full max-w-[1920px] overflow-hidden flex items-center justify-start px-6 md:px-16">
        {/* Hot Topics Section */}
        <div className="w-full px-6 md:px-16 py-16 bg-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
           Who We Are
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Card 1 */}
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
  <p className="text-gray-600">
    We aim to empower businesses with innovative solutions that drive growth and efficiency.
  </p>
</div>

{/* Card 2 */}
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
  <p className="text-gray-600">
    To be a global leader in digital transformation, delivering sustainable and cutting-edge services.
  </p>
</div>

{/* Card 3 */}
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
  <p className="text-gray-600">
    Integrity, innovation, collaboration, and customer success guide every decision we make.
  </p>
</div>

{/* Card 4 */}
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2">Our Team</h3>
  <p className="text-gray-600">
    A diverse group of experts passionate about technology, creativity, and client success.
  </p>
</div>

{/* Card 5 */}
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
  <p className="text-gray-600">
    We constantly embrace new technologies and ideas to stay ahead in a rapidly evolving market.
  </p>
</div>

{/* Card 6 */}
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
  <p className="text-gray-600">
    Understanding client needs is at the heart of every project we deliver.
  </p>
</div>

{/* Card 7 */}
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
  <p className="text-gray-600">
    We prioritize sustainable practices in all our operations to minimize environmental impact.
  </p>
</div>

{/* Card 8 */}
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2">Community</h3>
  <p className="text-gray-600">
    We actively contribute to our communities through outreach, mentorship, and social initiatives.
  </p>
</div>

{/* Card 9 */}
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
  <p className="text-gray-600">
    Serving clients across industries and continents, we bring global expertise to every project.
  </p>
</div>

          </div>
        </div>
      </div>
    </>
  );
}