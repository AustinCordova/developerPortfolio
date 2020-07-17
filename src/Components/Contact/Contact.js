import React, {Component} from 'react';

export default class Contact extends Component{
    render() {
      return (
        <>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">If you would like to get ahold of me for any reason or have any questions about my Nonprofit and/or developements. 
              Please fill out the form below and I'll get back to you as soon as possible. Thank You!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form method="post" id="contactForm" name="contactForm" data-netlify="true">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input type="text" defaultValue={""} size={35} id="contactName" name="contactName" required/>
                  </div>
                  <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input type="text" defaultValue={""} size={35} id="contactEmail" name="contactEmail" required/>
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
                    <input type="text" defaultValue={""} size={35} id="contactSubject" name="contactSubject" required/>
                  </div>
                  <div>
                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} required/>
                  </div>
                  <div>
                    <button className="submit" type="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form> {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning"> Error</div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />Your message was sent successfully, Thank You!<br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Email Address</h4>
                <p className="address">
                  <span>austincordova13@gmail.com</span><br />
                </p>
              </div>
            </aside>
          </div>
        </section>
        </>
      );
    }
  };
