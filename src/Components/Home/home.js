import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mayhair1 from '../../Assets/Mayhair1.jpg'

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='home-main'>
         <Container className='row-test' >
      <Row >
        <Col >
        <div className='modernint'>
                Make Room 
            </div>
            
            <div className='mixmatch'>
                for better
            </div>
            <div className='modernint'>
                Living.
            </div>
            <br></br><br></br>
            <div className='leftpls'>
            <a><span className='startnowbutton'>Start Now</span></a>
            <a><span className='readmorebutton'>Read More</span></a>
            </div>

            </Col>
        <Col  md={6}>
            <br></br>
           <img className='image-firstbox' src={mayhair1}></img> 
{/* <CaraouselMain/> */}

        </Col>
      </Row>
      
    </Container>

    

      </div>
    )
  }
}

export default Home