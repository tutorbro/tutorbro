import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
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
const Tab = ({ label, isActive, onClick }) => (
  <div className={`links tab${isActive ? "-active" : ""}`} onClick={onClick}>
    <ul>
      <li>
        <h4>{label}</h4>
      </li>
    </ul>
    <style jsx>
      {`
        .links {
          margin: 0px;
          justify-content: center;
        }
        ul {
          display: flex;
          padding: 0px;
          margin: 0 10px;
        }
        li {
          list-style: none;
          margin: 0px 5px;
        }
        h4 {
          color: grey;
        }
        .links:hover {
          cursor: pointer;
          color: #2ca5ce;
        }
        .tab-active {
          border-bottom: 3px solid #2ca5ce;
        }
        .tab-active h4 {
          color: #2ca5ce;
        }
      `}
    </style>
  </div>
);

const TabContent = ({ children }) => (
  <div>
    <div className="tab-content">
      <ul className="tab-item">
        {children.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            <div>
              <CheckIcon
                style={{ paddingRight: 5, paddingTop: 5, color: "#2ca5ce" }}
              />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <style jsx>{`
      .tab-content {
        margin: 50px;
        padding-bottom: 150px;
      }
      .tab-content li {
        list-style: none;
        width: 25%;
        float: left;
        padding: 0px;
        margin: 10px 0px;
        display: flex;
      }
      .tab-content li:hover {
        cursor: pointer;
        color: #2ca5ce;
      }
      a {
        text-decoration: none;
      }
      @media only screen and (max-width: 1000px) {
        .tab-content li {
          width: 33%;
        }
      }
      @media only screen and (max-width: 800px) {
        .tab-content li {
          width: 50%;
        }
      }
      @media only screen and (max-width: 600px) {
        .tab-content li {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

const HorizontalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__text">
          <h1>All the requirements you need in one place</h1>
          <span>
            Here are the most popular subjects we deal with, but don’t worry if
            yours is not here—just drop us a line, and we’ll find an expert for
            your task.
          </span>
        </div>
        <div className="content">
          <div className="tab-header">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                isActive={index === activeTab}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
        </div>
        <div className="tab-container">
          <TabContent>{tabs[activeTab].content}</TabContent>
        </div>
      </div>
      <style jsx>
        {`
          .banner {
            position: relative;
          }
          .banner__container {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }
          .tab-container {
            width: 100%;
          }
          .banner__text {
            padding-left: 20px;
          }
          .banner__text span {
            font-size: 18px;
            color: grey;
          }
          .tab-header {
            display: contents;
          }
          .link {
            text-decoration: none;
          }

          .content {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #2ca5ce;
            overflow-x: auto;
            background: #fff;
            width: 100%;
          }
        `}
      </style>
    </section>
  );
};
export default HorizontalTabs;
