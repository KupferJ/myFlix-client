import React from 'react';

import { Row, Col, Card, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export function FavoriteMovies({ favoriteMovieList, removeFav }) {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h3>Favorite Movies</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {favoriteMovieList.map(movie => {
          return (
            <Col xs={12} lg={4} md={6} sm={6} className="d-flex justify-content-center" key={movie._id}>
              <Card text="dark" border="dark">
                <Card.Img variant="top" crossOrigin="anonymous" height="350" src={movie.ImagePath} className="img-fluid" />

                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>

                  <Button sm={6} variant="outline-danger float-right" onClick={() => removeFav(movie._id)}>Remove</Button>
                  <Link to={`/movies/${movie._id}`}>
                    <Button md={4} variant="link">More Info</Button>
                  </Link>

                </Card.Body>
              </Card>
            </Col>
          )
        })
        }
      </Row>

    </>
  )

}
