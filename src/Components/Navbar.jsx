import React from 'react'

const Navbar = ({ searchState, setSearchState }) => {
  return (
    <nav className="w-full bg-transparent py-6">
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto">
        
        {/* Brand Name - Left */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
          Mynx
        </div>
        
        {/* Search Bar - Center */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg 
                className="w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
              placeholder="Movies & Shows"
              className="w-full pl-12 pr-6 py-3 bg-gray-800/70 border border-gray-600/30 rounded-full text-white text-sm placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm"
            />
          </div>
        </div>
        
        {/* Right side spacer */}
        <div className="w-16"></div>
        
      </div>
    </nav>
  )
}

export default Navbar
