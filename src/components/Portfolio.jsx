const Portfolio = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Portfolio</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-12">
  
            {/* First Item: Reels */}
            <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent">
              {/* Image on top for mobile, left for desktop */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <img 
                  src="https://th.bing.com/th/id/OIP.ilPg1UNGb9tcz2RfRTRIoAHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain" 
                  alt="Reels" 
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Text on bottom for mobile, right for desktop */}
              <div className="w-full md:w-1/2 text-left ml-10"> {/* Added margin-left here */}
              <h3 className="font-semibold text-white">Reels</h3>
                <h3 className="font-semibold text-white">10 curated video reels showcasing my expertise in storytelling and editing.</h3>

              </div>
            </div>
  
            {/* Second Item: Graphic Design (reverse order for mobile) */}
            <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent flex-col-reverse md:flex-row">
              {/* Image on top for mobile, left for desktop */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <img 
                  src="https://th.bing.com/th/id/OIP.sW8DBTlGNFBolvs375oOAAHaIt?w=480&h=565&rs=1&pid=ImgDetMain" 
                  alt="Graphic Design" 
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Text on bottom for mobile, right for desktop */}
              <div className="w-full md:w-1/2 text-left ml-10"> {/* Added margin-left here */}
                <h3 className="font-semibold text-white">Graphic Design</h3>
                <h3 className="text-white">Creative designs for various industries.</h3>
              </div>
            </div>
  
            {/* Third Item: Video Editing */}
            <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent">
              {/* Image on top for mobile, left for desktop */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <img 
                  src="https://as2.ftcdn.net/v2/jpg/04/92/92/31/1000_F_492923157_c7ofA0yP8mNBA8RZ7Zg0J5FpHdvld9Kw.jpg" 
                  alt="Video Editing" 
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Text on bottom for mobile, right for desktop */}
              <div className="w-full md:w-1/2 text-left ml-10"> {/* Added margin-left here */}
                <h3 className="font-semibold text-white">Video Editing</h3>
                <h3 className="text-white">Professional video edits showcasing my work.</h3>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  