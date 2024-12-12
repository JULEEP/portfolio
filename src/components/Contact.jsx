import { FaEnvelope, FaWhatsapp, FaLinkedin, FaShoppingCart } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-white mb-8 mt-8">Contact Me</h3>

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

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/+916264083048" // Replace with your WhatsApp number
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
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
        {/* Place Order Button */}
        <div className="mt-4 mb-10">
          <a
            href="https://wa.me/+916264083048" // Replace with your WhatsApp number
            className="inline-flex items-center px-6 py-3 mt-4 bg-blue-700 text-white text-lg rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300 w-auto"
            aria-label="Place an Order on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaShoppingCart className="mr-2" />
            PLACE AN ORDER
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
