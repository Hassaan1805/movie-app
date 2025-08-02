import React, {useEffect, useState } from 'react'
import Search from './Components/Search';
import Loader from './Components/Loader';
import MovieCard from './Components/movieCard';
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
  useDebounce(() => setDebouncedSearchTerm(searchState),500,[searchState])


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
    
<main className="m-0 p-0 ">
    
  <div className="pattern"/> 
  <div className="wrapper pt-0">
    <header className="mt-0 pt-0">

      <img src='./hero-img.png'  alt='heroBanner'/>
      <h1>
        Find a good <span className='text-gradient'>Watch</span> without any nuisance
      </h1>
    <Search searchState={searchState} setSearchState={setSearchState}/>
    </header>
    {trendingMovies.length> 0 && (
      <section className='trending '>
        <h2>
          Trending Movies
        </h2>
        <ul>
          {trendingMovies.map((movie,index) => (
            <li key={movie.$id}>
              <p>
                {index + 1}
              </p>
              <img src={movie.poster_url} alt/>
            </li>
          ))}
        </ul>
      </section>
    )}
    
    <section className='All Movies'>
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

</main>  


)
}
export default App;