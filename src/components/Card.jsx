import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({searchQuery}) => {
  const [pokemons, setPokemon] = useState([]);
const [filterPokemons,setFilteredPokem]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const data = res?.data?.results;
      const pokemonDetails = await Promise.all(
        data.map(async (pokemon) => {
          const url = await axios.get(pokemon.url);
          return url;
        })
      );
      setPokemon(pokemonDetails);
      console.log(pokemonDetails);
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
    <div className=" bg-gradient-to-r from-pink-400 to-blue-700 grid lg:grid-cols-4 gap-8  grid-cols-1  p-8 my-10  md:grid-cols-3 sm:grid-cols-2 sm:gap-4">
      {filterPokemons.length >0 ? (filterPokemons.map((pokemon) => (
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
        <h1 className="flex min-h-[100vh] justify-center font-bold text-xl ">Not Found !</h1>

      ) }
    </div>
  );
};

export default Card;
