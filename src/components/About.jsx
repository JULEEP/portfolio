const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left Side: About Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-3xl font-semibold text-white mb-4 mt-4">About Me</h3>
          <h3 className="text-lg text-gray-300 max-w-4xl mx-auto md:mx-0">
            Hi, I’m Radhika Thakur, a creative professional with 4 years of experience in video editing, graphic designing, content writing, and social media management. I specialize in crafting visually compelling designs, creating engaging content, and developing impactful digital strategies. Let’s collaborate to create something amazing together!
          </h3>
        </div>
        {/* You can add an image or additional content on the right side if needed */}
      </div>
    </section>
  );
};

export default About;
