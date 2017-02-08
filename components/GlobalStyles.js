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
      .fp__btn {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        height: 34px;
        padding: 4px 30px 5px 40px;
        position: relative;
        margin-bottom: 0;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: inherit;
        font-size: 12px;
        font-weight: 600;
        line-height: 1.42857143;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        background: #23a5cf;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ2NC43MTQsMzQuNzg2aC0yMDAuNTZ2LTQuODkyQzI2NC4xNTQsMTMuNDEsMjUwLjc0MywwLDIzNC4yNiwwaC0zNC43ODZjLTE2LjQ4MywwLTI5Ljg5NCwxMy40MS0yOS44OTQsMjkuODk0djQuODkyICAgIGgtNDguMzc0Yy00LjUwNCwwLTguMTUzLDMuNjUtOC4xNTMsOC4xNTN2NjUuNzY2SDQ3LjI4OGMtNC41MDQsMC04LjE1MywzLjY1LTguMTUzLDguMTUzdjMwNC4zNjggICAgYzAsMC4yNzEsMC4wMTQsMC41NDIsMC4wNDEsMC44MTJjMC4wMTEsMC4xMSwwLjAzMiwwLjIxNiwwLjA0NywwLjMyNWMwLjAyMiwwLjE1NSwwLjA0LDAuMzEsMC4wNzEsMC40NjQgICAgYzAuMDI1LDAuMTI5LDAuMDYxLDAuMjU0LDAuMDkyLDAuMzhjMC4wMzMsMC4xMzIsMC4wNjIsMC4yNjMsMC4xMDEsMC4zOTRjMC4wMzgsMC4xMjUsMC4wODUsMC4yNDUsMC4xMjgsMC4zNjcgICAgYzAuMDQ2LDAuMTI5LDAuMDg5LDAuMjU5LDAuMTQxLDAuMzg2YzAuMDQ4LDAuMTE0LDAuMTAzLDAuMjI0LDAuMTU1LDAuMzM2YzAuMDYxLDAuMTI5LDAuMTE4LDAuMjYsMC4xODYsMC4zODcgICAgYzAuMDU4LDAuMTA4LDAuMTIzLDAuMjA5LDAuMTg1LDAuMzEzYzAuMDc0LDAuMTI0LDAuMTQ1LDAuMjUsMC4yMjUsMC4zNzFjMC4wNzYsMC4xMTQsMC4xNjEsMC4yMjEsMC4yNDMsMC4zMzIgICAgYzAuMDc3LDAuMTAzLDAuMTQ5LDAuMjA5LDAuMjMyLDAuMzA5YzAuMTU5LDAuMTkyLDAuMzI3LDAuMzc3LDAuNTAyLDAuNTU1YzAuMDEzLDAuMDEzLDAuMDI0LDAuMDI4LDAuMDM3LDAuMDQxbDgyLjYxNiw4Mi42MTYgICAgYzAuMDExLDAuMDExLDAuMDIzLDAuMDIsMC4wMzMsMC4wMjljMC4xOCwwLjE3OCwwLjM2OCwwLjM0OSwwLjU2NSwwLjUxMWMwLjA5MSwwLjA3NSwwLjE4OCwwLjE0LDAuMjgyLDAuMjExICAgIGMwLjEyLDAuMDg5LDAuMjM2LDAuMTgyLDAuMzYsMC4yNjVjMC4xMTEsMC4wNzUsMC4yMjcsMC4xMzksMC4zNCwwLjIwOGMwLjExNCwwLjA2OCwwLjIyNiwwLjE0LDAuMzQ0LDAuMjAzICAgIGMwLjExNiwwLjA2MiwwLjIzNywwLjExNSwwLjM1NywwLjE3MmMwLjEyMiwwLjA1OCwwLjI0MSwwLjExOCwwLjM2NiwwLjE3YzAuMTE2LDAuMDQ4LDAuMjM2LDAuMDg3LDAuMzU0LDAuMTI5ICAgIGMwLjEzMywwLjA0OCwwLjI2MywwLjA5OSwwLjM5OCwwLjEzOWMwLjEyLDAuMDM2LDAuMjQsMC4wNjIsMC4zNjEsMC4wOTJjMC4xMzcsMC4wMzUsMC4yNzMsMC4wNzMsMC40MTIsMC4xICAgIGMwLjE0LDAuMDI4LDAuMjgyLDAuMDQ0LDAuNDIzLDAuMDY0YzAuMTIyLDAuMDE3LDAuMjQyLDAuMDQxLDAuMzY1LDAuMDUyYzAuMjY3LDAuMDI2LDAuNTM2LDAuMDQsMC44MDQsMC4wNGgyMzkuMTUxICAgIGM0LjUwNCwwLDguMTUzLTMuNjUsOC4xNTMtOC4xNTN2LTM1LjMyOWg4Ny41MDdjNC41MDQsMCw4LjE1My0zLjY1LDguMTUzLTguMTUzVjQyLjkzOCAgICBDNDcyLjg2NywzOC40MzYsNDY5LjIxOCwzNC43ODYsNDY0LjcxNCwzNC43ODZ6IE0xODUuODg2LDI5Ljg5NGMwLTcuNDkzLDYuMDk1LTEzLjU4OCwxMy41ODgtMTMuNTg4aDM0Ljc4NiAgICBjNy40OTMsMCwxMy41ODgsNi4wOTUsMTMuNTg4LDEzLjU4OHY0Ljg5MmgtNjEuOTYyVjI5Ljg5NHogTTE4NS44ODYsMTI1LjAxMWg0MC4yMjF2NDAuMjIxaC00MC4yMjFWMTI1LjAxMXogTTIyMy4zNjQsMTgxLjUzNyAgICBjLTIuNDgyLDMuMjkzLTYuNDEyLDUuNDM1LTEwLjg0NCw1LjQzNWgtMTMuMDQ1Yy00LjQzMiwwLTguMzYzLTIuMTQzLTEwLjg0NC01LjQzNUgyMjMuMzY0eiBNMTI5LjM2LDUxLjA5MWg0MC4yMjF2NTcuNjE0SDEyOS4zNiAgICBWNTEuMDkxeiBNMTIxLjc1MSw0NjAuMzY1djIzLjc5OWwtNTQuNzgtNTQuNzhoNTQuMjM2aDAuNTQ0VjQ2MC4zNjV6IE0zNjAuOTAxLDQ2MC4zNjV2MzUuMzI5SDEzOC4wNTZ2LTM1LjMyOXYtMzkuMTM0ICAgIGMwLTQuNTAzLTMuNjQ5LTguMTUzLTguMTUzLTguMTUzaC04LjY5Nkg1NS40NDFWMTI1LjAxMWg2NS43NjZoNDguMzc0djQwLjIyMWgtNDguMzc0aC0xNy4zOTNjLTQuNTA0LDAtOC4xNTMsMy42NS04LjE1Myw4LjE1MyAgICBzMy42NDksOC4xNTMsOC4xNTMsOC4xNTNoMTcuMzkzaDQ5LjUxM2MzLjU1OSwxMi41MzEsMTUuMDk4LDIxLjc0MSwyOC43NTUsMjEuNzQxaDEzLjA0NWMxMy42NTcsMCwyNS4xOTYtOS4yMDksMjguNzU1LTIxLjc0MSAgICBoNzUuNjAyYzQuNTA0LDAsOC4xNTMtMy42NSw4LjE1My04LjE1M3MtMy42NDktOC4xNTMtOC4xNTMtOC4xNTNoLTc0LjQ2M3YtNDAuMjIxaDExOC40ODhWNDYwLjM2NXogTTQ1Ni41NjIsNDUyLjIxMmgtNzkuMzU1ICAgIFYxMTYuODU4YzAtNC41MDMtMy42NDktOC4xNTMtOC4xNTMtOC4xNTNIMjQyLjQxM1Y2OS4wMjhjMC00LjUwMy0zLjY0OS04LjE1My04LjE1My04LjE1M3MtOC4xNTMsMy42NS04LjE1Myw4LjE1M3YzOS42NzcgICAgaC00MC4yMjFWNTEuMDkxaDI3MC42NzVWNDUyLjIxMnoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTYuODc2LDIzNC44MDNIMTIxLjIwN2gtMTcuMzkzYy00LjUwNCwwLTguMTUzLDMuNjUtOC4xNTMsOC4xNTNzMy42NDksOC4xNTMsOC4xNTMsOC4xNTNoMTcuMzkzaDE5NS42NjkgICAgYzQuNTA0LDAsOC4xNTMtMy42NSw4LjE1My04LjE1M1MzMjEuMzgsMjM0LjgwMywzMTYuODc2LDIzNC44MDN6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzE2Ljg3NiwzMDQuMzc0SDEyMS4yMDdoLTE3LjM5M2MtNC41MDQsMC04LjE1MywzLjY1LTguMTUzLDguMTUzczMuNjQ5LDguMTUzLDguMTUzLDguMTUzaDE3LjM5M2gxOTUuNjY5ICAgIGM0LjUwNCwwLDguMTUzLTMuNjUsOC4xNTMtOC4xNTNTMzIxLjM4LDMwNC4zNzQsMzE2Ljg3NiwzMDQuMzc0eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxNi44NzYsMzczLjk0NUgxMjEuMjA3aC0xNy4zOTNjLTQuNTA0LDAtOC4xNTMsMy42NS04LjE1Myw4LjE1M2MwLDQuNTAzLDMuNjQ5LDguMTUzLDguMTUzLDguMTUzaDE3LjM5M2gxOTUuNjY5ICAgIGM0LjUwNCwwLDguMTUzLTMuNjUsOC4xNTMtOC4xNTNDMzI1LjAyOSwzNzcuNTk1LDMyMS4zOCwzNzMuOTQ1LDMxNi44NzYsMzczLjk0NXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
        background-repeat: no-repeat;
        background-position: 15px 6px;
        border: 1px solid transparent;
        border-radius: 17px;
      }
      .fp__btn::after {
        position: absolute;
        content: "";
        top: 15px;
        right: 14px;
        width: 7px;
        height: 4px;
      }
      .fp__btn:hover {
        background: #4183C4;
      }
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #23a5cf;
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
        box-shadow: 0 0 10px #4183C4, 0 0 5px #4183C4;
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
        border-top-color: #4183C4;
        border-left-color: #4183C4;
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
