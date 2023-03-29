import React from "react";
import "../../App.css";
import "../../bootstrap.min.css"

const Facts = () => {
  return (
    <div
      className="container-fluid facts my-5 py-5"
      data-parallax="scroll"
      data-image-src="assets/img/carousel-1.jpg"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-4 text-white" data-toggle="counter-up">
              1234
            </h1>
            <span className="text-primary">Happy Clients</span>
          </div>
          <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <h1 className="display-4 text-white" data-toggle="counter-up">
              1234
            </h1>
            <span className="text-primary">Projects Succeed</span>
          </div>
          <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-4 text-white" data-toggle="counter-up">
              1234
            </h1>
            <span className="text-primary">Awards Achieved</span>
          </div>
          <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
            <h1 className="display-4 text-white" data-toggle="counter-up">
              1234
            </h1>
            <span className="text-primary">Team Members</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
