import React from "react";
import "./App.css";
import Field from "./components/Field/Field";

class App extends React.Component<any, {}> {
state = {
  score: 0,
  prevScore: 0
}

  render() {
    return (
      <div className="app">
        <Field />
      </div>
    );
  }
}

export default App;
