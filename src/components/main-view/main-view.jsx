import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

//import for Bootstrap
import { Row, Col, Container, Button} from 'react-bootstrap';

import './main-view.scss';

import { Navbar } from '../navbar/navbar';
import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      user: null
    };
  }

  getMovies(token) {
    axios.get('https://movie-api-777.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        //Assign the result to the state
        this.setState({
          movies: response.data

        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //when a user successfully logs in, function updates the "user" property in state of that particular user
  onLoggedIn(authData) {
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  render() {
    const { movies, user } = this.state;

    return (
      <Router>
        <Container className="justify-content-md-center" >
          <Row>
            <Navbar />
          </Row>  
          <Row className="main-view">
            <Route exact path='/' render={() => {
              if (!user) return (
                <Col md={8}>
                  <LoginView onLoggedIn ={user => this.onLoggedIn(user)} />
                </Col>
              )
              if (movies.length === 0) return <div className="main-view"/>;
              
              return movies.map(m => (
                <Col md={4} sm={6} xs={12} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ))
            }} />


            <Route path="/register" render={() => {
              if (user) return <Redirect to="/" />
              return (
                <Col md={8}>
                  <RegistrationView />
                </Col>
              )
            }} />

            <Route path={"/users/${user}"} render={({ history }) => {
              if (!user) return <Redirect to="/" />
              return (
                <Col xs={12} md={10}>
                  <ProfileView user={user} movies={movies} onBackClick={() => history.goBack()} />
                </Col>
              )
            }} />


            <Route path='/movies/:movieId' render={({ match, history }) => {
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>

              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={{ span: 8, offset: 2 }}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
              </Col>
            }} />

            <Route path='/directors/:name' render={({ match, history }) => {
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>

              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={{ span: 6, offset: 3 }}>
                <DirectorView director={movies.find(m=> m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
              </Col>
            }} />

            <Route path='/genres/:name' render={({ match, history }) => {
              if (!user) return <Col>
               <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>

              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={{ span: 6, offset: 3 }}>
                <GenreView genre={movies.find(m=> m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
              </Col>
            }} /> 
          
          </Row>
      </Container>
      </Router>
    );
  }
}

export default MainView;