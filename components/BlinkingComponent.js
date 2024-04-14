import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const BlinkingComponent = () => {
  return (
    <>
      <div className="chat">
        <FiberManualRecordIcon style={{ fontSize: 15 }} />
        LIVE CHAT
      </div>
      <div className="whatsapp-icon">
        <WhatsAppIcon /> +919958156558
      </div>
      <style jsx>
        {`
          .chat {
            display: flex;
            align-items: center;
            color: red;
            font-weight: 800;
            font-size: 15;
            animation: blink-animation 3s infinite;
            &:hover {
              animation-play-state: paused;
            }
          }
          @keyframes blink-animation {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          .whatsapp-icon {
            display: flex;
            align-items: center;
            color: #25d366;
            font-weight: 800;
            font-size: 15;
          }
        `}
      </style>
    </>
  );
};

export default BlinkingComponent;
