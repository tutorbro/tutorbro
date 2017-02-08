export default () => (
  <div>
    <style jsx global>
      {`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }
      body {
        position: relative;
        margin: 0;
        font-size: 16px;
        letter-spacing: 2px;
        line-height: 1.8;
        font-family: -apple-system, 
                BlinkMacSystemFont,
                "Segoe UI", 
                Roboto, 
                Oxygen-Sans, 
                Ubuntu,  
                Cantarell,
                "Fira Sans",
                "Droid Sans",
                "Helvetica Neue", 
                sans-serif;
        text-rendering: optimizeLegibility;
        background: #fff;
        color: #888;
      }
      @media (max-width: 480px) {
        #tawkchat-container {
          display: none !important;
        }
      }
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #F44336;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      /* Fancy blur effect */
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #F44336, 0 0 5px #F44336;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
      /* Remove these to get rid of the spinner */
      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }
      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: #F44336;
        border-left-color: #F44336;
        border-radius: 50%;
        animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}
    </style>
  </div>
)
//  #23a5cf
// #38ba85
// #F44336
// #4183C4
