import React from "react";

class BtnGroup extends React.Component {
  classStart = "btn btn-warning btn-sm mb-2 mt-4";
  state = {
    buttonInfo: [
      {
        value: "about",
        name: "about",
        style: this.props.styline,
        class: this.classStart
      }
    ]
  };

  render() {
    // let btnInfo = [
    //   {
    //     value: "about",
    //     name: "about",
    //     style: this.props.styline,
    //     class: this.classStart
    //   },
    //   {
    //     value: "about",
    //     name: "about",
    //     style: this.props.styline,
    //     class: this.classStart
    //   },
    //   {
    //     value: "about",
    //     name: "about",
    //     style: this.props.styline,
    //     class: this.classStart
    //   }
    // ];
    // let btn = [];

    // let btnElement = btnInfo.map(btn => {
    //   <button
    //     value={btn.value}
    //     name={btn.name}
    //     style={btn.style}
    //     onClick={btn.class}
    //   >
    //     About
    //   </button>;
    // });

    // for (let i = 0; i <= btnInfo.length; i++) {
    //   btn.push(btnElement);
    // }
    return (
      <div className="container">
        {/* {btn} */}

        <div className="btn-group">
          <button
            value="about"
            name="about"
            style={this.props.styline}
            onClick={this.props.switchTab}
            className="btn btn-warning btn-sm mb-2 mt-4"
          >
            About
            {/* {this.props.btntext} */}
          </button>

          <button
            value="ContactApp"
            name="ContactApp"
            style={this.props.styline}
            onClick={this.props.switchTab}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Contacts
            {/* {this.props.btntext} */}
          </button>
          <button
            value="TodoAppHard"
            name="TodoAppHard"
            onClick={this.props.switchTab}
            style={this.props.styline}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Todo app with hard coded data
            {/* {this.props.btntext} */}
          </button>
          <button
            value="TodoAppApi"
            name="TodoAppApi"
            onClick={this.props.switchTab}
            style={this.props.styline}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Todo app with axios API
            {/* {this.props.btntext} */}
          </button>
          <button
            value="DjangoReact"
            name="DjangoReact"
            onClick={this.props.switchTab}
            style={this.props.styline}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Django-React integration
            {/* {this.props.btntext} */}
          </button>
          <button
            value="activities"
            name="activities"
            onClick={this.props.switchTab}
            style={this.props.styline}
            className="btn btn-warning btn-sm mb-2 mt-4 ml-3"
          >
            Activities
            {/* {this.props.btntext} */}
          </button>
        </div>
      </div>
    );
  }
}

export default BtnGroup;
