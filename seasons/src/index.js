import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./style/App.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // THIS IS THE ONLY TIME we direct assignment
  //   // to this.state
  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),

      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request " />;
  }

  // React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

root.render(<App />);
