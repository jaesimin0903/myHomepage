import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, Container, NavDropdown, Card} from 'react-bootstrap';
import akko from '../img/아코짤.jpg';
import frontend from '../img/frontend.png';
import backend from '../img/backend.png';
import other from '../img/other.png';
function stack() {
  return (
    <div>
      <div  id="detail"className=" detailBox text-center">
        <div>
          <h1>STACK</h1>
        </div>
        <div className="stackBox">
          <Card className="card-box">
            <Card.Header>Frontend</Card.Header>
            <Card.Body>
            <Card.Img variant="top" src={frontend} />
            </Card.Body>
          </Card>
          <Card className="card-box">
            <Card.Header>Backend</Card.Header>
            <Card.Body>
            <Card.Img variant="top" src={backend} />
            </Card.Body>
          </Card>
          <Card className="card-box">
            <Card.Header>Other</Card.Header>
            <Card.Body>
            <Card.Img variant="top" src={other} />
            </Card.Body>
          </Card>
        </div>
      
      </div>
    </div>
  )
}

export default stack