import React from "react";

class BtnGroup extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="btn-group">
          <button
            value="about"
            onClick={this.props.switchTab}
            className="btn btn-warning btn-sm mb-2 mt-4"
          >
            About
          </button>

          <button
            value="ContactApp"
            onClick={this.props.switchTab}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Contacts
          </button>
          <button
            value="TodoAppHard"
            onClick={this.props.switchTab}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Todo Hard Coded
          </button>
          <button
            value="TodoAppApi"
            onClick={this.props.switchTab}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Todo-Axios API
          </button>
          <button
            value="DjangoReact"
            onClick={this.props.switchTab}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Django-React Integration
          </button>
          <button
            value="activities"
            onClick={this.props.switchTab}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Activities
          </button>
        </div>
      </div>
    );
  }
}

export default BtnGroup;
