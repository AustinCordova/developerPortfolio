import React, {Component} from 'react';

export default class Footer extends Component{
    render() {
      return (
        <>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
               <li><a href="https://www.linkedin.com/in/austincordova"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://twitter.com/AustinCordova12"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://github.com/AustinCordova"><i className="fa fa-github"></i></a></li>
              </ul>
              <ul className="copyright">
                <li>© Copyright 2020</li>
                <li>Design by Austin Cordova</li>
                <li>Last edited July 17th 2020</li>    
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
        </>
      );
    }
  };
