import React from 'react';
import './App.css';
import Badge from "react-bootstrap/Badge";
import { findByLabelText, render } from '@testing-library/react';
let marked = require("marked");

export default class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        markdown: "",
      };
    }

    updateMarkdown(markdown){
      this.setState({markdown})
    }

    render(){
      return (
        <div className="App">
          <div className="title">
            <h1>
              Markdown Previewer
            </h1>
          </div>
          <div className="container">
            <div className="column">
              <h2>
                Input
              </h2>
              <div className="input">
                <textarea 
                  className="input" 
                  // style={inputStyle} 
                  value={this.state.markdown}
                  onChange ={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}> 
                </textarea>
              </div>
            </div>
            <div className="column">
              <h2>
                Output
              </h2>
              <div className="output"
                // style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      );
    }
}