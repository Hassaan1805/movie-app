import React from 'react'

const MovieCard = ({movie:{title,vote_average ,poster_path , release_date , original_language}}) => {
    return (
        <div className='group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20'>
            {/* Movie Poster */}
            <div className="relative overflow-hidden">
                <img 
                    src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/No-Poster.png'}
                    alt={title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating Badge */}
                {vote_average && (
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                        <img src='./Vector.svg' alt='Star Icon' className="w-3 h-3"/>
                        <span className="text-yellow-400 text-xs font-semibold">{vote_average.toFixed(1)}</span>
                    </div>
                )}
            </div>
            
            {/* Movie Info */}
            <div className='p-4 space-y-3'>
                <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-blue-300 transition-colors leading-tight">
                    {title}
                </h3>
                
                <div className='flex items-center justify-between text-xs text-gray-400'>
                    <div className="flex items-center space-x-2">
                        <span className="bg-gray-700/50 px-2 py-1 rounded uppercase font-mono">
                            {original_language}
                        </span>
                        <span>•</span>
                        <span className="font-medium">
                            {release_date ? release_date.split('-')[0] : 'N/A'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard