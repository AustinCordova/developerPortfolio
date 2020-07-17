import React, { Component } from 'react';

export default class Header extends Component {
    render() {
      return (
        <>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#skills">Skills</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> 
          </nav> 

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Austin Cordova.</h1>
              <h3>I am learning the neccessary skills to become a full stack developer. 
              Making a difference not only in the tech feild but as a member of society. <a className="smoothscroll" href="#about">About Me</a></h3>
              <hr />
              <ul className="social">
                <li><a href="https://www.linkedin.com/in/austincordova"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://twitter.com/AustinCordova12"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://github.com/AustinCordova"><i className="fa fa-github"></i></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </>
      )
    }
  };
