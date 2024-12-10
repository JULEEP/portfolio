import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-white mb-8">Contact Me</h3>
        
        {/* Icons with Links */}
        <div className="flex justify-center space-x-8 text-3xl mb-8 mt-8">
          {/* Email Icon */}
          <a
            href="mailto:youremail@example.com"
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          {/* Phone Icon */}
          <a
            href="tel:+123456789"
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label="Phone"
          >
            <FaPhoneAlt />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/your-profile"
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Text below icons */}
        <h3 className="text-lg text-white mx-auto max-w-xl">
          I'm always open to new projects, collaborations, or simply connecting! Feel free to reach out.
        </h3>
      </div>
    </section>
  );
};

export default Contact;
