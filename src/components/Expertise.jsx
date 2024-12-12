import { FaPen, FaCameraRetro, FaFilm, FaApple, FaAutoprefixer, FaSketch } from 'react-icons/fa'; // Replace with available icons

const Expertise = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4 ml-4 mt-8">My Software Skills</h3>
        <h3 className="text-lg text-white mb-6 ml-4">I use a wide range of tools and software to bring your ideas to life.</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-12">
          
          {/* First Item: Video Editing */}
          <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img 
                src="https://th.bing.com/th/id/OIP.5tInCLyrwLR7g3pdqXlN8AHaFj?rs=1&pid=ImgDetMain" 
                alt="Video Editing" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-lg font-semibold text-white ml-10">Video Editing</h3>
              <ul className="list-disc text-left pl-5 text-white mt-4">
                <li className="ml-8">
                <FaFilm className="inline-block text-white text-sm mr-2" /> Adobe After Effects - 95%
                </li>
                <li className="ml-8">
                <FaFilm className="inline-block text-white text-xs mr-2" /> Adobe Premiere Pro - 90%
                </li>
                <li className="ml-8">
                  <FaApple className="inline-block text-white mr-2" /> Final Cut Pro - 85%
                </li>
              </ul>
            </div>
          </div>

          {/* Second Item: Graphic Design */}
          <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img 
                src="https://th.bing.com/th/id/OIP.G7jnGdCLc2R6RQsszO-WiQHaGa?rs=1&pid=ImgDetMain" 
                alt="Graphic Design" 
                className="w-full h-full object-cover rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-lg font-semibold text-white ml-10">Graphic Design</h3>
              <ul className="list-disc text-left pl-5 text-white mt-4">
                <li className="ml-10">
                  <FaPen className="inline-block text-white mr-2" /> Adobe Photoshop - 95%
                </li>
                <li className="ml-10">
                  <FaPen className="inline-block text-white mr-2" /> Adobe Illustrator - 90%
                </li>
                <li className="ml-10">
                  <FaAutoprefixer className="inline-block text-white mr-2" /> Corel Draw - 80%
                </li>
                <li className="ml-10">
                  <FaSketch className="inline-block text-white mr-2" /> Sketch - 75%
                </li>
              </ul>
            </div>
          </div>

          {/* Third Item: CGI-VFX */}
          <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img 
                src="https://vfxacademy.in/wp-content/uploads/2023/03/animation-banner.jpg" 
                alt="CGI-VFX" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-lg font-semibold text-white ml-10">CGI-VFX</h3>
              <ul className="list-disc text-left pl-5 text-white mt-4">
                <li className="ml-8">
                  <FaAutoprefixer className="inline-block text-white mr-2" /> Autodesk Maya - 95%
                </li>
                <li className="ml-8">
                  <FaAutoprefixer className="inline-block text-white mr-2" /> Blender - 95%
                </li>
                <li className="ml-8">
                  <FaApple className="inline-block text-white mr-2" /> Houdini - 90%
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
