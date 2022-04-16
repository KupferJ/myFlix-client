import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Button, Card, Container } from 'react-bootstrap';

export class DirectorView extends React.Component {

    render() {
      const {director, onBackClick } = this.props

    return (
      <Container>
        <Row>
          <Col>
          <Card id="director-view">
            <Card.Body>
              <Card.Title className="text-center">{director.Name}</Card.Title>
              <Card.Text className="movie-description">
                <span className="value">{director.Bio}</span><br/><br/>
                <span className="label">Birth: </span>
                <span className="value">{director.Birth}</span>
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
