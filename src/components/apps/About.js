import React from "react";

class About extends React.Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div>
          <div className="mb-2 mt-4">
            <h4>About Information</h4>
          </div>

          <div>
            <p>
              The useful react components is about deeply learning react by
              examples of doing...
            </p>
            <p>
              You it in action and then you get to code, after which you compare
              your results with the code in the project to cross check if you
              have learn it or you need to study how that particular solution
              was implemented
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
