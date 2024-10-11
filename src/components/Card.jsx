import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({searchQuery}) => {
  const [pokemons, setPokemon] = useState([]);
const [filterPokemons,setFilteredPokem]=useState([]);
const [loading,setLoading]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const data = res?.data?.results;
      const pokemonDetails = await Promise.all(
        data.map(async (pokemon) => {
          const url = await axios.get(pokemon.url);
          return url;
        })
      );
      setPokemon(pokemonDetails);
        
      } catch (e) {
        console.error('Error in fetching pokemons', e)
      }
      finally{
        setLoading(false)
      }
      
      
    
    };
    fetchData();
  }, []);


  useEffect(() => {
    const filtered=pokemons.filter((item)=>
      item?.data?.name.toLowerCase().includes(searchQuery.toLowerCase())

    )
    setFilteredPokem(filtered);
  }, [searchQuery,pokemons]);
  
  return (
    <div className="  grid lg:grid-cols-4 gap-8   grid-cols-1  p-8 my-10  md:grid-cols-3 sm:grid-cols-2 sm:gap-4">
      { loading ? (

<div role="status" className="h-[80vh] w-full col-span-4 flex justify-center items-center ">
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>

      ):
      
      filterPokemons.length >0 ? (filterPokemons.map((pokemon) => (
        <div className="max-w-sm hover:scale-105   my-4  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={"/"}>
            <img
              className="rounded-t-lg w-64 h-56 object-cover text-center mx-auto"
              src={pokemon?.data?.sprites?.front_default}
              alt=""
            />
          </Link>
          <div className=" ">
            <Link to={"/"}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {pokemon?.data?.name}
              </h5>
            </Link>
            <div className="flex flex-col text-center my-5 lg:mx-32 md:mx-28 mx-24 items-start   ">
              <h6 className="font-bold">
              
                <span className=" text-blue-600"> Order:</span>
                {pokemon?.data?.order}
              </h6>
              <h6 className="font-bold">
                
                <span className=" text-blue-600"> Height:</span>
                {pokemon?.data?.height}{" "}
              </h6>
              <h6 className="font-bold">
             
                <span className=" text-blue-600"> Weight:</span>
                {pokemon?.data?.weight}
              </h6>
            </div>
            <Link to={'/'} className="flex justify-center max-w-48  my-4 mx-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
          </div>
        </div>
      ))):(
        <>
                <h1 className="h-[80vh] w-full col-span-4 flex justify-center items-center font-bold text-xl text-white ">Not Found !</h1>
                </>

      ) }
    </div>
  );
};

export default Card;
