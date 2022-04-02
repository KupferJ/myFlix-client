import React from 'react';
import axios from 'axios';

//import for Bootstrap
import { Row, Col} from 'react-bootstrap';

import './main-view.scss';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }

  componentDidMount(){
    axios.get('https://movie-api-777.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // when movie is clicked, function is invoked and updates thate of "selectedMovie" property
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }


  //user registration
  onRegistration(registration) {
    this.setState({
      registration
    });
  }

  //when a user successfully logs in, function updates the "user" property in state of that particular user
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  render() {
    const { movies, selectedMovie, user, registration } = this.state;
  
    //return registration view, if user isn't registered
    if (!registration) return <RegistrationView onRegistration={(registration) => this.onRegistration(registration)} />;

    //if no user, LoginView is rendered - if logged-in user exists, user details are passed as a prop to the LoginView
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    //before movies are loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
      <Row className="main-view justify-content-md-center">
        {selectedMovie
        ? (
          <Col md={6} id="movie_view">
            <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie); }} />
          </Col>
        )
        : movies.map(movie => (
          <Col md={3}>
            <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie); }}/>
          </Col>
        ))
        }
      </Row>
    );
  }
}

export default MainView;