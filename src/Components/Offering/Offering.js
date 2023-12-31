import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './offering.css';
export class Offering extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Container>
        <div className='offer-head'>We offer a Plethora of solutions !</div>
        
        <br/>
        <Row>
            <Col md={4} className='grid1'>
            <strong><h3>Design Consultation: </h3></strong>
            <br/><br/>
            Expert guidance to transform your space with personalized interior design recommendations.
            </Col>

            <Col md={4} className='grid2'>
            <strong><h3>Furniture Selection: </h3></strong>
            <br/><br/>
            Access to a curated collection of stylish furniture options to enhance your interior decor.
            </Col>

            <Col md={4} className='grid3'>
            <strong><h3>Space Planning:</h3></strong> 
            <br/><br/>
            Strategic layout optimization to maximize functionality and create harmonious living or working environments.
            </Col>

        </Row>


        <Row>
            <Col md={4} className='grid1'>
            <img className='img-set' variant="top" src="https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2019/01/modern-luxury-bedroom-design-by-top-interior-designers-in-delhi.jpg" />
                    
            </Col>
            <Col md={4} className='grid2'>
            <img className='img-set' variant="top" src="https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2019/01/modern-luxury-bedroom-design-by-top-interior-designers-in-delhi.jpg" />
            
            </Col>
            <Col md={4} className='grid3'>
            <img className='img-set' variant="top" src="https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2019/01/modern-luxury-bedroom-design-by-top-interior-designers-in-delhi.jpg" />
            
            </Col>

        </Row>
        </Container>
      </div>
    )
  }
}

export default Offering