import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ArticleList from "./components/ArticlesList";
import ArticleDetails from "./components/ArticleDetails";
import BtnGroup from "../../../btnGroup";

class DjangoReact extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      ListView: true
    };
  }
  switchMode = e => {
    const btnid = e.target.attributes.getNamedItem("btnid").value;
    this.setState(state => ({
      ListView: !state.ListView,
      id: btnid
    }));
    // console.log(btnid);
  };

  // getId = (e) => {
  //     console.log(e.target.attributes.getNamedItem('btnid').value)
  // }

  render() {
    if (this.state.ListView) {
      return (
        <div>
          <div className="container pt-4 pt-4">
            <hr />
          </div>
          <div className="container pt-4 pt-4">
            <ArticleList switchMode={this.switchMode} />
            <hr />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container pt-4 pt-4">
            <hr />
          </div>
          <div className="container pt-4 pt-4">
            <ArticleDetails switchMode={this.switchMode} />
            <hr />
          </div>
        </div>
      );
    }
  }
}

export default DjangoReact;
