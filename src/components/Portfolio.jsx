import { useState } from 'react';

const Portfolio = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    "https://www.youtube.com/embed/c2R41mfidIg",
    "https://www.youtube.com/embed/c2R41mfidIg",
    "https://www.youtube.com/embed/c2R41mfidIg"
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-white mb-8">Portfolio</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-12">
          {/* Third Item: Video Editing (Text Above and Video Below in all views) */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-transparent">
            {/* Text */}
            <div className="w-full md:w-1/2 text-left mb-4">
              <h3 className="font-semibold text-white">Video Editing</h3>
              <h3 className="text-white">Professional video edits showcasing my work.</h3>
            </div>
            {/* YouTube Video Player */}
            <div className="w-full md:w-1/2 mb-4">
              <div className="relative w-full">
                <iframe
                  width="100%"
                  height="315"
                  src={videos[currentVideoIndex]}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Video"
                  className="rounded-lg shadow-md"
                ></iframe>
                {/* Slider Controls */}
                <button
                  onClick={prevVideo}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                  Prev
                </button>
                <button
                  onClick={nextVideo}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Second Item: Graphic Design */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-transparent flex-col-reverse">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
              <img
                src="https://th.bing.com/th/id/OIP.sW8DBTlGNFBolvs375oOAAHaIt?w=480&h=565&rs=1&pid=ImgDetMain"
                alt="Graphic Design"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 text-left ml-10">
              <h3 className="font-semibold text-white">Graphic Design</h3>
              <h3 className="text-white">Creative designs for various industries.</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
