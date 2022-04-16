import React from 'react';
import PropTypes from 'prop-types';
//import React BootStrap
import { Button, Card } from 'react-bootstrap';

import  { Link } from 'react-router-dom';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie} = this.props;

    //Bootstrap Card Element
    return(
      <Card className="movie_card">
        <Card.Img variant="top" height="500" crossOrigin="anonymous" src={movie.ImagePath} />
        <Card.Body id="movie_card-body" className="justify-content-center">
          <Card.Title id="movie_card-title">{movie.Title}</Card.Title>
          <Link to ={`/movies/${movie._id}`}>
          <Button variant="outline-success link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
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
  }).isRequired
};