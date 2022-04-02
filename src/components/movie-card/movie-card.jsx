import React from 'react';
import PropTypes from 'prop-types';
//import React BootStrap
import { Button, Card } from 'react-bootstrap';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    //Bootstrap Card Element
    return(
      <Card id="movie_card">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body id="movie_card-body" className="justify-content-center">
          <Card.Title id="movie_card-title">{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button variant="outline-success link" onClick ={() => onMovieClick(movie)}>Open</Button>
        </Card.Body>
      </Card>
    );
    // return (
    //   <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
    // );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};