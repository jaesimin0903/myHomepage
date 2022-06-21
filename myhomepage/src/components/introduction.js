import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, Container, NavDropdown, Card} from 'react-bootstrap';
import akko from '../img/아코짤.jpg';

function introduction() {
  return (
    <div id="home" className=" introduction row">
        <div  className="col-md-12 text-center">
          <h1>안녕하세요!</h1>
          <h1>최재민의 포트폴리오 웹사이트입니다.</h1>
          <img src={akko}></img>
        </div>
        <div className="  p-5 intro-group row">
          <div className="d-flex col-md-6 introBox">
              <div className="col-md-3 p-1 m-1 intro-img">대충이미지</div>
              <div className="col-md-8 p-1 m-1 intro-content">
                <div><h3>이름</h3></div>
                <div>최재민</div>
              </div>
          </div>
          <div className="d-flex col-md-6 introBox">
              <div className="col-md-3 p-1 m-1 intro-img">대충이미지</div>
              <div className="col-md-3 p-1 m-1 intro-content">
                <div><h3>이름</h3></div>
                <div>최재민</div>
              </div>
          </div>
          <div className="d-flex col-md-6 introBox">
              <div className=" p-1 m-1 intro-img">대충이미지</div>
              <div className=" p-1 m-1 intro-content">
                <div><h3>이름</h3></div>
                <div>최재민</div>
              </div>
          </div>
          <div className="d-flex col-md-6 introBox">
              <div className="col-md-3 p-1 m-1 intro-img">대충이미지</div>
              <div className="col-md-3 p-1 m-1 intro-content">
                <div><h3>이름</h3></div>
                <div>최재민</div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default introduction