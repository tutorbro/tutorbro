import { useEffect, useState } from "react";
import BlinkingComponent from "./BlinkingComponent";
const TopHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(
      (navigator.userAgent.indexOf("like Mac") > -1 ||
        window.navigator.userAgent.indexOf("Android") > -1) &&
        window.localStorage.getItem("geo") == "IN"
    );
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <header className="top-header">
          <a
            href="https://wa.me/919685517208?text=I'd like to chat with you regarding tutor for my work and asssignments."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="container">
              <BlinkingComponent />
            </div>
          </a>

          <style jsx>{`
            a {
              text-decoration: none;
            }
            .top-header {
              background: #c8c7c7;
              height: 40px;
              padding: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .container {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          `}</style>
        </header>
      )}
    </>
  );
};

export default TopHeader;
