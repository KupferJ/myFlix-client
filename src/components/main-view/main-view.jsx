import React from 'react';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
              { _id: 1,  
              Title: 'Inception', 
              Rating: '8.8',
              Description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
              Genre: 'Sci-Fi', 
              Director: 'Christopher Nolan',
              ImagePath: '...'},
              { _id: 2, 
              Title: 'The Shawshank Redemption', 
              Rating: '9.3',
              Description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 
              Genre: 'Drama',
              Director: 'Frank Darabont',
              ImagePath: '...'},
              { _id: 3, 
              Title: 'Gladiator', 
              Rating:'8.5',
              Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', 
              Genre: 'Adventure',
              Director: 'Ridley Scott',
              ImagePath: '...'}
            ],
      selectedMovie: null
    };
  }

  //custom component method
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}

export default MainView;