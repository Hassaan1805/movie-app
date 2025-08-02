import React, {useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import Loader from './Components/Loader';
import MovieCard from './Components/movieCard';
import Footer from './Components/Footer';
//adding api url which will help us fetch the data along with , the path to our api key
const API_BASE_URL = 'https://api.themoviedb.org/3/' 
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
import {useDebounce} from 'react-use';
import {updateSearchCouunt,getTrendingMovies} from './appwrite.js'

//options as to which method to use and in which format we have to accept out information 
//bearer will provide us the permission by using our api key as reference 
const API_OPTIONS = {
  method:'GET',
  headers:{
    accept : 'application/json' ,
    Authorization :`Bearer ${API_KEY}`
  }
}

const App = () => {

  const [searchState, setSearchState] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList , setMovieList] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [debouncedSearchTerm , setDebouncedSearchTerm] = useState('');
  const [trendingMovies , setTrendingMovies] = useState([]);
  
  //reduces load on the api calls and prevents it from overloading
  //provide search result after 500ms rather then every character which is typed 
  useDebounce(() => setDebouncedSearchTerm(searchState),250,[searchState])


   const fetchMovies = async ( query = '') =>{
    setIsLoading(true);
    setErrorMessage('');
    try{
      //creating an endpoint to start the communication from the dataset 
        const endpoint = query ?
           `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        :  `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      // taking something from the endpoint as a way of responsing 
        const response = await fetch(endpoint,  API_OPTIONS)

        if(!response.ok){
          throw new Error("Failed to fetch the movies ")
        }
        //collecting the information from response 
        const data = await response.json();
        if(data.response =='false'){
          setErrorMessage(data.Error || "Something happened");
          setMovieList([])
          return ;
        }
        setMovieList(data.results || []);
        //if the movie already exists the value should be stored in the appwrite database k
        if(query && data.results.length > 0){
          await updateSearchCouunt(query,data.results[0]);
        }

    }catch(error){
      console.error(`error message is ${error}`);
      setErrorMessage("Unable to fetch the movies from the API");
    }
    finally{
      setIsLoading(false);
    
    }
  }
  const loadTrendingMovies = async() => {
    try {
      const movies = await getTrendingMovies()

      setTrendingMovies(movies)
    }
    catch(error){
      console.log(`The error message is ${error}`)
    }
  }
  
  useEffect(
    () => {
      fetchMovies(debouncedSearchTerm);
    }
    , [debouncedSearchTerm]);

    //another use effect , we are not putting the loadTrendingMovies in the above useEffect
    //becaues whenever the user types something it will be called again
    //causing it to have too many unnecessary API calls 
  useEffect(() => {
    loadTrendingMovies()
  },[])

return(
    
<main className="m-0 p-0">
  
  {/* Navbar */}
  <Navbar searchState={searchState} setSearchState={setSearchState} />
    
  <div className="pattern"/> 
  <div className="wrapper pt-4">
    <header className="mt-2 pt-2 text-center">
      <img src='./hero-img.png' alt='heroBanner' className="mx-auto mb-4"/>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Find a good <span className='text-gradient'>Watch</span> without any nuisance
      </h1>
    </header>
    {trendingMovies.length> 0 && (
      <section id="trending" className='trending mb-12'>
        <h2 className="text-3xl font-bold text-white mb-12 ">
          Trending Movies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trendingMovies.map((movie,index) => (
            <div key={movie.$id} className="group relative">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Ranking Badge */}
                <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                
                {/* Movie Poster */}
                <img 
                  src={movie.poster_url} 
                  alt={movie.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Movie Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm line-clamp-2 drop-shadow-lg">
                    {movie.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
    
    <section id="movies" className='All Movies'>
    <h2 >
      All Movies 
    </h2> 
    <br/>
    {isLoading?(
      <Loader/>
    ) : errorMessage ?(
      <p className='text-red-500'>Error occured while fetching </p>
    ) : (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
        {movieList.map((movie)=>(
 
          <MovieCard  key={movie.id} movie={movie}/>
      
        ))}
      </div>
    )}
    </section>


  </div>
  
  {/* Footer */}
  <Footer />

</main>  


)
}
export default App;