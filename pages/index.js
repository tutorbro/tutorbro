import React from "react";
import Header from "../components/Header";
import Subjects from "../components/Subjects";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { initGA, logPageView } from "../utils/analytics";
import Slider from "../components/CustomSilder/Slider";
import TopHeader from "../components/TopHeader";
import Banner from "../components/Banner";
import HorizontalTabs from "../components/HorizontalTabs";

const tabs = [
  {
    label: "Mechanical Engineering",
    content: [
      "Statics",
      "Dynamics",
      "Mechanics of Material",
      "Fluid Mechanics",
      "Strength of Material",
      "Thermodynamics",
      "Integration",
      "Heat Transfer",
      "Machine Design",
    ],
  },
  {
    label: "Mathematics",
    content: [
      "Algebra",
      "Calculus I",
      "Calculus II",
      "Calculus III",
      "Deferential Equation",
      "Linear Algebra",
      "Trigonometry",
      "Applied mathematics",
      "Geometry",
    ],
  },
  {
    label: "Computer Science",
    content: [
      "C, C++ , PHP Programming",
      "Web Designing and Development",
      "Java Programming",
      "Database Management (Oracle, SQL)",
      "MS Access",
      "Data Structure",
      "Computer Networks",
      "Unix/ Linux",
    ],
  },
  {
    label: "Electrical Engineering",
    content: [
      "Electrical Circuits",
      "Power Electronics",
      "Signal Theory",
      "Microelectronics",
      "Introduction to Power Systems",
      "Digital Signal Processing",
      "Principle of telecommunication",
      "Electrical Machines",
    ],
  },
  { label: "Science", content: ["Chemistry", "Physics", "Biology"] },
  {
    label: "Statistics",
    content: ["Business Studies", "Elementry Statistics"],
  },
  {
    label: "Other Subjects",
    content: [
      "Civil",
      "Electrical",
      "History",
      "Geography",
      "Political Science",
    ],
  },
];
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
        <TopHeader />
        <Header title="TutorBro | Get Personal Tutor For Homework Help" />
        <main>
          <Slider />
          <Banner />
          <HorizontalTabs tabs={tabs} />
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
