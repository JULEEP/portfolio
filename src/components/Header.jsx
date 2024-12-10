// src/components/Header.js

const Header = () => {
    return (
      <header className="text-center py-6 text-white"> {/* Apply text-white to the entire header */}
        {/* Image with round corners, increased size, and shadow */}
        <img 
          src="https://img.freepik.com/premium-vector/doctor-hospital-uniform-sitting-table-with-laptop-woman-working_1135642-908.jpg" 
          alt="Radhika Thakur" 
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" 
        />
  
        {/* Name */}
        <h1 className="text-3xl font-bold">RADHIKA THAKUR</h1>
  
        {/* Profession/Skills */}
        <h3 className="text-lg mt-2 text-white">Video Editing | Graphic Design | Content Writing | Social Media Management</h3>
      </header>
    );
  };
  
  export default Header;
  