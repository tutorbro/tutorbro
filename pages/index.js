import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Subjects from "../components/Subjects";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { initGA, logPageView } from "../utils/analytics";
import Slider from "../components/CustomSilder/Slider";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.alertOptions = {
      offset: 14,
      position: "top right",
      theme: "dark",
      time: 5000,
      transition: "scale",
    };
  }
  componentDidMount() {
    initGA();
    logPageView();
  }
  render() {
    const AlertContainer = this.alert;
    return (
      <div>
        <Header title="TutorBro | Get Personal Tutor For Homework Help" />
        <main>
          <Slider />
          <Home />
          <Subjects />
          <Services />
          <Footer home />
        </main>
        <style jsx>
          {`
            main {
              padding-top: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
