import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [pokemons, setPokemon] = useState([]);

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

  return (
    <div className=" bg-gradient-to-r from-pink-400 to-blue-700 grid lg:grid-cols-4 gap-8  grid-cols-3  p-8 my-10  md:grid-cols-3 sm:grid-cols-2 sm:gap-4 xs:grid-cols-1">
      {pokemons.map((pokemon) => (
        <div className="max-w-sm hover:scale-90   my-4  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
            <div className="flex flex-col text-center my-5 lg:mx-32 md:mx-28 sm:mx-24 xs:mx-20  items-start   ">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
