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
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center items-start transform translate-y-[30px]">
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