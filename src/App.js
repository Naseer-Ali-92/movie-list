import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState(
    [
      {
        "id": 1,
        "title": "Avatar",
        "distributor": "20th Century Fox",
        "year": 2009,
        "amount": "$2,787,965,087",
        "img": {
          "src": "media/avatar.jpg",
          "alt": "avatar"
        },
        "ranking": 1
      },
      {
        "id": 2,
        "title": "Titanic",
        "distributor": "20th Century Fox",
        "year": 1997,
        "amount": "$2,187,463,944",
        "img": {
          "src": "media/titanic.jpg",
          "alt": "titanic"
        },
        "ranking": 2
      },
      {
        "id": 3,
        "title": "Star Wars: The Force Awakens",
        "distributor": "Walt Disney Studios Motion Pictures",
        "year": 2015,
        "amount": "$2,068,223,624",
        "img": {
          "src": "media/star_wars_the_force_awakens.jpg",
          "alt": "star_wars_the_force_awakens"
        },
        "ranking": 3
      },
      {
        "id": 4,
        "title": "Avengers: Infinity War",
        "distributor": "Walt Disney Studios Motion Pictures",
        "year": 2018,
        "amount": "$2,048,359,754",
        "img": {
          "src": "media/avengers_infinity_war.jpg",
          "alt": "avengers_infinity_war"
        },
        "ranking": 4
      },
      {
        "id": 5,
        "title": "Jurassic World",
        "distributor": "Universal Pictures",
        "year": 2015,
        "amount": "$1,671,713,208",
        "img": {
          "src": "media/jurassic_world.jpg",
          "alt": "jurassic_world"
        },
        "ranking": 5
      }
    ]
  )
  return (
    <div className="App">
      <div className='page-title'>
        <h1>Movies List</h1>
      </div>
      <div className='container'>
        {movies.map((movie) => {
          return (
            <div className='movie-card'>
              <img src="./media/img.jpg" alt={movie.img.alt} height={200} width={200} />
              <div className='movie-deatls'>
                <h2>#{movie.id} - {movie.title} ({movie.year})</h2>
                <hr />
                <p>Distributor: {movie.distributor}</p>
                <hr />
                <p>Amount: {movie.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
