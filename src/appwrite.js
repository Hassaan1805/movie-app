import { Client, Databases , Query , ID} from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
 .setEndpoint('https://fra.cloud.appwrite.io/v1')
 .setProject(PROJECT_ID)

 //connect the client link to our appwrite database 
const databases = new Databases(client);

export const updateSearchCouunt = async(searchTerm , movie) => {
 try{
    console.log('Attempting to store:', { searchTerm, movieId: movie.id, title: movie.title });
    
    //First check if this exact search term already exists
    const searchResult = await databases.listDocuments(DATABASE_ID,COLLECTION_ID,[
        Query.equal('searchTerm', searchTerm),
    ])
    
    if(searchResult.documents.length > 0){
        //Update existing search term count
        const doc = searchResult.documents[0];
        await databases.updateDocument(DATABASE_ID,COLLECTION_ID,doc.$id, {
            count : doc.count + 1,
        })
        console.log('Updated existing search term:', searchTerm);
    } else {
        //Create new entry for this search term
        await databases.createDocument(DATABASE_ID,COLLECTION_ID,ID.unique(),{
            searchTerm,
            count : 1,
            movie_id : movie.id,
            poster_url : `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        })
        console.log('Created new entry for:', searchTerm);
    }

 }catch(error){
    console.log('Error in updateSearchCouunt:', error);
 }
}

export const getTrendingMovies = async() => {
    try{
        //top 5 movies with highest search by the user are being fetched
        //from the appwrite database 
        const result = await databases.listDocuments(DATABASE_ID,COLLECTION_ID,[
            Query.limit(5),
            Query.orderDesc('count'),
        ])
        return result.documents;
    }
    catch(error) {
        console.log(error)
    }
}