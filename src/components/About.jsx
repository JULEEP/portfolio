// src/components/About.js

const About = () => {
  return (
    <section>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Side: About Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white-500 mb-4">About Me</h3>
          <h3 className="text-lg max-w-3xl mx-auto md:mx-0">
            Hi, I’m Radhika Thakur, a creative professional with 4 years of experience in video editing, graphic designing, content writing, and social media management. I specialize in crafting visually compelling designs, creating engaging content, and developing impactful digital strategies. Let’s collaborate to create something amazing together!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
