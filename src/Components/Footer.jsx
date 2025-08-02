import React from 'react'

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-b from-purple-900/30 via-gray-900/80 to-black border-t border-purple-500/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🎬</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Mynx
              </h3>
            </div>
            <p className="text-gray-300 text-sm max-w-md leading-relaxed">
              Your ultimate movie discovery app. Find amazing movies without any hassle and discover your next perfect watch.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="group relative p-2 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg transition-all duration-300">
                <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded group-hover:scale-110 transition-transform"></div>
              </a>
              <a href="#" className="group relative p-2 bg-gray-800/50 hover:bg-blue-600/20 rounded-lg transition-all duration-300">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded group-hover:scale-110 transition-transform"></div>
              </a>
              <a href="#" className="group relative p-2 bg-gray-800/50 hover:bg-green-600/20 rounded-lg transition-all duration-300">
                <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded group-hover:scale-110 transition-transform"></div>
              </a>
            </div>
          </div>
          
          {/* Key Sections */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Key Sections</h4>
            <nav className="space-y-2">
              {['Search Movies', 'Trending Now', 'Popular Films', 'Top Rated', 'Latest Releases'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 hover:translate-x-2 transform"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Categories</h4>
            <nav className="space-y-2">
              {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'].map((category) => (
                <a 
                  key={category}
                  href="#" 
                  className="block text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-2 transform"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-gray-700/50">
          <div className="text-center group">
            <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform">10K+</div>
            <div className="text-xs text-gray-500">Movies</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform">500K+</div>
            <div className="text-xs text-gray-500">Users</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-pink-400 group-hover:scale-110 transition-transform">1M+</div>
            <div className="text-xs text-gray-500">Searches</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-green-400 group-hover:scale-110 transition-transform">99.9%</div>
            <div className="text-xs text-gray-500">Uptime</div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700/50 space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © 2025 Mynx. Made with ❤️ for movie lovers.
          </div>
          
          <div className="flex items-center space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
        
        {/* Powered by */}
        <div className="text-center pt-6">
          <p className="text-xs text-gray-600">
            Powered by{' '}
            <span className="text-yellow-400 font-semibold">TMDB</span>
            {' '}& built with{' '}
            <span className="text-cyan-400 font-semibold">React</span>
          </p>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-4 right-4 opacity-20">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
      </div>
    </footer>
  )
}

export default Footer
