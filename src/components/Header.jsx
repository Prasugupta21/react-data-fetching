import React, { useState } from 'react';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchTerm('');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setSearchTerm('');
    }
  };
  const clearSearchTerm = () => {
    
 
      setSearchTerm('');
    
  };


  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">Radiantly</div>
          
        
          
          <div className="flex items-center">
            <div className={`relative ${isSearchOpen ? 'w-64' : 'w-8'} transition-all duration-300 ease-in-out hidden md:block`}>
              <form  className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full py-1 px-3 pr-8 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    isSearchOpen ? 'opacity-100' : 'opacity-0 w-0'
                  } transition-all duration-300 ease-in-out`}
                />
                <button
                  type="button"
                  onClick={toggleSearch}
                  className="absolute right-0 top-0 mt-1 mr-1 text-white p-1 rounded-full hover:bg-white/20 transition duration-150 ease-in-out"
                >
                  {isSearchOpen ? <FaTimes size={16} /> : <FaSearch size={16} />}
                </button>
              </form>
            </div>
            
            <button
              onClick={toggleMobileMenu}
              className="text-white md:hidden focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
           
            <form onSubmit={handleSearchSubmit} className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 px-4 pr-10 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                
                    {!searchTerm && (
                  <button
                    type="button"
                    
                    className="absolute right-0 top-0 mt-2 mr-3 text-white"
                  >
                    <FaSearch size={16} />
                  </button>
                )}
                    {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearchTerm}
                    className="absolute right-0 top-0 mt-2 mr-3 text-white"
                  >
                    <FaTimes size={16} />
                  </button>
                )}
                
              </div>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;