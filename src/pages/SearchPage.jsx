import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ResultCard } from './ResultCard';

function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const apiKey = import.meta.env.VITE_TMDB_KEY;
  
    const onChange = (e) => {
      e.preventDefault();
  
      setQuery(e.target.value);
  
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )

      
        .then((res) => res.json())
        .then((data) => {
            if(!data.errors) {
              setResults(data.results);
            } else {
                setResults([]);
            }
        });
    };

    return (
        <section className="bg-[#212124] min-h-screen">
            <Navbar />
            <div className='input-wrapper flex justify-center items-center fade-delay'>
                <input
                    type="text"
                    placeholder='Search for movie' 
                    className='josefin-sans-semi text-[20px] w-[600px] h-[40px] px-10 rounded-[40px] mt-10 mx-10'
                    value={query}
                    onChange={onChange}
                />
            </div>
            {results.length > 0 && (
                <ul className="results text-white flex flex-col items-start justify-center md:mx-96 fade-down">
                    {results.map(movie => (
                        <li 
                            key={movie.id}
                            className=' my-4 '>
                            <ResultCard movie={movie}/>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default SearchPage;
