import React from 'react';

// import Button from 'react-bootstrap/Button';
import { Card, Col, Button, Row, Container} from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container>
      <Row>
        <Col>
        <Card id="movie-view">
          <Card.Body>
            <Card.Img className="movie-poster" src="{movie.ImagePath}" />
            <Card.Title className="movie-title text-center">{movie.Title}</Card.Title>
            <Card.Text className="movie-rating">{movie.Rating}</Card.Text>
            <Card.Text className="movie-description">{movie.Description}</Card.Text><br/>
            <Card.Text className="movie-genre">Genre: {movie.Genre.Name}</Card.Text>
            <Card.Text className="movie-director">Director: {movie.Director.Name}</Card.Text><br/>

            <Button variant="outline-info" id="button-mv button-favorite" onClick={() => {}}>Add to favorites</Button>
            <Button variant="outline-success" id="button-mv button-back" className="float-right" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
    );
  }
}