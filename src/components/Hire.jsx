const Hire = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center mt-20px">
        <h3 className="text-lg font-semibold text-white mt-8">Why Hire Me?</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-12">
          
          {/* First Item: Unlimited Revisions */}
          <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent">
            {/* Image on top for mobile, left for desktop */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img 
                src="https://kabirkapoor.carrd.co/assets/images/image01.jpg?v=10903934" 
                alt="Unlimited Revisions" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            {/* Text on bottom for mobile, right for desktop */}
            <div className="w-full md:w-1/2 text-center md:text-left m-4 ml-10">
              <h3 className="text-lg font-semibold text-white">Unlimited Revisions</h3>
            </div>
          </div>

          {/* Second Item: Express Delivery (reverse order for mobile) */}
          <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent flex-col-reverse md:flex-row">
            {/* Image on top for mobile, left for desktop */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img 
                src="https://kabirkapoor.carrd.co/assets/images/image02.jpg?v=10903934" 
                alt="Express Delivery" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            {/* Text on bottom for mobile, right for desktop */}
            <div className="w-full md:w-1/2 text-center md:text-left m-4 ml-10">
              <h3 className="text-lg font-semibold text-white">Express Delivery</h3>
            </div>
          </div>

          {/* Third Item: Premium Quality Work */}
          <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent">
            {/* Image on top for mobile, left for desktop */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img 
                src="https://kabirkapoor.carrd.co/assets/images/image05.jpg?v=10903934" 
                alt="Premium Quality Work" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            {/* Text on bottom for mobile, right for desktop */}
            <div className="w-full md:w-1/2 text-center md:text-left m-4 ml-10">
              <h3 className="text-lg font-semibold text-white">Premium Quality Work</h3>
            </div>
          </div>

          {/* Fourth Item: Masterpiece Results (reverse order for mobile) */}
          <div className="flex flex-col md:flex-row items-center justify-center p-6 rounded-lg shadow-lg bg-transparent flex-col-reverse md:flex-row">
            {/* Image on top for mobile, left for desktop */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img 
                src="https://kabirkapoor.carrd.co/assets/images/image05.jpg?v=10903934" 
                alt="Masterpiece Results" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            {/* Text on bottom for mobile, right for desktop */}
            <div className="w-full md:w-1/2 text-center md:text-left m-4 ml-10">
              <h3 className="text-lg font-semibold text-white">Masterpiece Results</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hire;
