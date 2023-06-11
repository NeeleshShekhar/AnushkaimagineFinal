import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './homecard.css';
export class Homecard extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='homecard-main'>
        <Container ><hr/><br/>
      <Row className='justify-content-center'>
          <Col md={3}>
                        <Card style={{ width: '18rem' }} className='card-main'>
                    <Card.Img className='card-img-set' variant="top" src="https://www.home-designing.com/wp-content/uploads/2014/10/vertical-indoor-garden.jpg" />
                    <Card.Body>
                    <Card.Title>Desiging Cafes</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button className='readmorebuttoncard'>Read More</Button>
                    </Card.Body>
                </Card>
          </Col>
          <Col md={3}>
          <Card style={{ width: '18rem' }} className='card-main'>
                    <Card.Img className='card-img-set' variant="top" src="https://www.home-designing.com/wp-content/uploads/2014/10/vertical-indoor-garden.jpg" />
                    <Card.Body>
                    <Card.Title>Desiging Cafes</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button className='readmorebuttoncard'>Read More</Button>
                    </Card.Body>
                </Card>
          </Col>
          <Col md={3}>
          <Card style={{ width: '18rem' }} className='card-main'>
                    <Card.Img className='card-img-set' variant="top" src="https://www.home-designing.com/wp-content/uploads/2014/10/vertical-indoor-garden.jpg" />
                    <Card.Body>
                    <Card.Title>Desiging Cafes</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button className='readmorebuttoncard'>Read More</Button>
                    </Card.Body>
                </Card>
          </Col>

          <Col md={3}>
          <Card style={{ width: '18rem' }} className='card-main'>
                    <Card.Img className='card-img-set' variant="top" src="https://www.home-designing.com/wp-content/uploads/2014/10/vertical-indoor-garden.jpg" />
                    <Card.Body>
                    <Card.Title>Desiging Cafes</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button className='readmorebuttoncard'>Read More</Button>
                    </Card.Body>
                </Card>
          </Col>
      </Row>
      
  </Container></div>
    )
  }
}

export default Homecard