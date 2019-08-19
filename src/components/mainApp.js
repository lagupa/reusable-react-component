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
    btnTab: "DjangoReact"
  };

  switchTab = e => {
    console.log(this.state, e.target.value);

    switch (e.target.value) {
      case "ContactApp":
        this.setState(state => ({
          btnTab: "ContactApp"
        }));
        break;
      case "TodoAppHard":
        this.setState(state => ({
          btnTab: "TodoAppHard"
        }));
        break;
      case "TodoAppApi":
        this.setState(state => ({
          btnTab: "TodoAppApi"
        }));
        break;
      case "about":
        this.setState(state => ({
          btnTab: "about"
        }));
        break;
      case "activities":
        this.setState(state => ({
          btnTab: "activities"
        }));
        break;
      case "DjangoReact":
        this.setState(state => ({
          btnTab: "DjangoReact"
        }));
        break;
      default:
        break;
    }
  };

  render() {
    switch (this.state.btnTab) {
      case "ContactApp":
        return (
          <div>
            <BtnGroup switchTab={this.switchTab} />
            <ContactApp />
          </div>
        );
      case "TodoAppHard":
        return (
          <div>
            <BtnGroup switchTab={this.switchTab} />
            <TodoAppHard />
          </div>
        );
      case "TodoAppApi":
        return (
          <div>
            <BtnGroup switchTab={this.switchTab} />
            <TodoAppApi />
          </div>
        );
      case "about":
        return (
          <div>
            <BtnGroup switchTab={this.switchTab} />
            <About />
          </div>
        );
      case "activities":
        return (
          <div>
            <BtnGroup switchTab={this.switchTab} />
            <Activities />
          </div>
        );
      case "DjangoReact":
        return (
          <div>
            <BtnGroup switchTab={this.switchTab} />
            <DjangoReact />
          </div>
        );
      //delete or comment out the default or use it for debugging
      default:
        return (
          <div>
            <BtnGroup switchTab={this.switchTab} />
            <TodoAppApi />
          </div>
        );
    }
  }
}

export default MainApp;
