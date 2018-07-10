import React, { Component } from "react";
import Card from "../common/MflCard";
import banner from "../banner.png";
import footerResizer from "../helpers/footerResize";
import { FeedbackForm } from './index';

class MflFeedback extends Component {
  // TODO: show loading state upon sending user feedback
  componentDidMount() {
    footerResizer();
  }
  render() {
    return (
      <div>
        <div className="container mfl-dash-container mfl-ref">
          <img src={banner} className="mfl-abs mfl-banner-img" />
          <div className="mfl-abs mfl-parallax"><h3>Get in Touch With Us</h3></div>
        </div>
        <div className="container mfl-modal-container">
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="mfl-contact white-text">Getting in Touch</h4>
            </div>
          </div>
          <div className="row mfl-tm-10">
            <div className="col m8 s12">
              <FeedbackForm />
            </div>
            <div className="col m4 s12">
              <h5 className="mfl-contact">Contacts</h5>
              <ul className="mfl-abm">
                <li className="black-text text-lighten-2">
                  <span className="mfl-about-icon"><i className="material-icons">phone</i></span>
                  <a className="mfl-about-text" href="http://health.gov.mw">Download guidelines</a>
                </li>
                <li className="black-text text-lighten-2">
                  <span className="mfl-about-icon"><i className="material-icons">insert_link</i></span>
                  <a className="mfl-about-text" href="http://health.gov.mw">About Ministry of Health</a>
                </li>
              </ul>
              <h5 className="mfl-contact">Instructions to Provide Feedback</h5>
              <p>
                Please give us your feedback on the experience you have using this system. 
                We will be glad to assist on any problems you may be having. 
                Comments and recommendations for future improvements are also welcome
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MflFeedback;