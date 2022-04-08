import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Button, Card, Container } from 'react-bootstrap';

export class GenreView extends React.Component {

    render() {
      const {genre, onBackClick } = this.props

    return (
      <Container>
        <Row>
          <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">{genre.Name}</Card.Title>
              <Card.Text className="movie-description">
                <span className="value">{genre.Description}</span>
              </Card.Text><br/>

              <Button variant="outline-danger float-right" onClick={() => { onBackClick(); }} >Back</Button>

            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

GenreView.proptypes = {
  genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
  }).isRequired,
};