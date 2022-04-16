import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom'

import { Card, Col, Button, Row, Container} from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {


  addFavMovie() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    axios.post (`https://movie-api-777.herokuapp.com/users/${username}/movies/${this.props.movie._id}`, {}, {
    })
    .then(response => {
      alert('Added to favorites')
    })
    .catch(function(error) {
      console.log(error)
    });
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container>
      <Row>
        <Col>
        <Card id="movie-view">
          <Card.Body>
            <Card.Img className="movie-poster img-fluid" crossOrigin="anonymous" src={movie.ImagePath} />
            <Card.Title className="movie-title text-center">{movie.Title}</Card.Title>
            <Card.Text className="movie-description">{movie.Description}</Card.Text><br/>
            <Link to={`/genres/${movie.Genre.Name}`}>
            <Card.Text className="movie-genre">Genre: {movie.Genre.Name}</Card.Text>
            </Link>
            <Link to={`/directors/${movie.Director.Name}`}>
            <Card.Text className="movie-director">Director: {movie.Director.Name}</Card.Text><br/>
            </Link>

            <Button variant="outline-info" id="button-mv button-favorite" onClick={(e) => this.addFavMovie(e, movie)}>Add to favorites</Button>
            <Button variant="outline-danger" id="button-mv button-back" className="float-right" onClick={() => { onBackClick(); }}>Back</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
    );
  }
}