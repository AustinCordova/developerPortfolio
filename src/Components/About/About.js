import React, {Component} from 'react';

export default class About extends Component{
    render() {
      return (
        <>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/portfolio/profile.jpg" alt="profile" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>My name is Austin Cordova. I am a recent graduate from the Road 2 Hire Tech Academy, and am a small business owner. 
              My Nonprofit is named Foster Care Awareness. It is put in place to spread awareness about foster youth and "The System". 
              I strive to make an impact on society, about real life situtions. And not just with my business, but as a new junior developer.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Austin Cordova</span><br />
                    <span>austincordova13@gmail.com</span><br />
                  </p>
                </div>
              </div>
            </div> 
          </div>
        </section> 
        </>
      );
    }
  };
