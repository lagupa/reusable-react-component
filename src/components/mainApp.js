import React from "react";
//Put your apps here
import ContactApp from "./apps/contact/ContactApp";
import TodoAppHard from "./apps/todo/TodoApp";
import TodoAppApi from "./apps/todo/todoApp_api";
import About from "./apps/About";
import Activities from "./apps/Activities";
import DjangoReact from "./apps/django-react/frontend/DjangoReact";
import BtnGroup from "./btnGroup";

class MainApp extends React.Component {
  state = {
    btnTab: "DjangoReact",
    userStyle: {
      backgroundColor: "brown",
      color: "white"
    }
  };

  userGridStyle = {
    backgroundColor: "red",
    color: "white"
  };

  switchTab = e => {
    // console.log(this.state, e.target.value);

    switch (e.target.name) {
      case "ContactApp":
        this.setState({
          btnTab: "ContactApp",
          userStyle: this.userGridStyle
        });
        break;
      case "TodoAppHard":
        this.setState({
          btnTab: "TodoAppHard",
          userStyle: this.userGridStyle
        });
        break;
      case "TodoAppApi":
        this.setState({
          btnTab: "TodoAppApi",
          userStyle: this.userGridStyle
        });
        break;
      case "about":
        this.setState({
          btnTab: "about",
          userStyle: this.userGridStyle
        });
        break;
      case "activities":
        this.setState({
          btnTab: "activities",
          userStyle: this.userGridStyle
        });
        break;
      case "DjangoReact":
        this.setState({
          btnTab: "DjangoReact",
          userStyle: this.userGridStyle
        });
        break;
      default:
        this.setState({
          btnTab: "DjangoReact",
          userStyle: {}
        });
        break;
    }
  };

  render() {
    switch (this.state.btnTab) {
      case "ContactApp":
        return (
          <div>
            <BtnGroup
              styline={this.state.userStyle}
              switchTab={this.switchTab}
            />
            <ContactApp />
          </div>
        );
      case "TodoAppHard":
        return (
          <div>
            <BtnGroup
              btntext="Todo app with hard coded data"
              styline={this.state.userStyle}
              switchTab={this.switchTab}
            />
            <TodoAppHard />
          </div>
        );
      case "TodoAppApi":
        return (
          <div>
            <BtnGroup
              btntext="Todo app with axios"
              switchTab={this.switchTab}
              styline={this.state.userStyle}
            />
            <TodoAppApi />
          </div>
        );
      case "about":
        return (
          <div>
            <BtnGroup
              btntext="About"
              switchTab={this.switchTab}
              styline={this.state.userStyle}
            />
            <About />
          </div>
        );
      case "activities":
        return (
          <div>
            <BtnGroup
              btntext="Activities"
              switchTab={this.switchTab}
              styline={this.state.userStyle}
            />
            <Activities />
          </div>
        );
      case "DjangoReact":
        return (
          <div>
            <BtnGroup
              btntext="Django-React Integration"
              switchTab={this.switchTab}
              styline={this.state.userStyle}
            />
            <DjangoReact />
          </div>
        );
      //delete or comment out the default or use it for debugging
      default:
        return (
          <div>
            <BtnGroup
              switchTab={this.switchTab}
              styline={this.state.userStyle}
              btntext="Please create something"
            />
            <TodoAppApi />
          </div>
        );
    }
  }
}

export default MainApp;
