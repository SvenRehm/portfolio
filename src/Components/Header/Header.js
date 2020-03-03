import React from "react"
import "./Header.css"

export const Header = ({ menu, toggleMenu }) => {
   return (
      <div>
         <header className="header">
            <div className="header-container">
               <a className="logo" href="/">
                  SR
               </a>
               <div />
               <button
                  // className="nav-toggle"
                  id="nav-toggle"
                  className={menu ? "opened nav-toggle" : "nav-toggle"}
                  onClick={toggleMenu}
               >
                  <svg
                     className="icon icon-nav-toggle"
                     x="0px"
                     y="0px"
                     viewBox="0 0 100 100"
                  >
                     <g className="svg-nav-toggle">
                        <path className="line line-1" d="M5 13h90v14H5z" />
                        <path className="line line-2" d="M5 43h90v14H5z" />
                        <path className="line line-3" d="M5 73h90v14H5z" />
                     </g>
                  </svg>
               </button>
            </div>
         </header>
         <a
            className="uparrow vs-anchor"
            href="#home"
            onClick={() => {
               // goToPage(0)
            }}
         >
            <svg
               width="32"
               height="32"
               viewBox="0 0 48 48"
               xmlns="http://www.w3.org/2000/svg"
            >
               <g>
                  <rect
                     fill="none"
                     id="canvas_background"
                     height="402"
                     width="582"
                     y="-1"
                     x="-1"
                  />
               </g>
               <g>
                  <path
                     transform="rotate(-180 24,25) "
                     id="svg_1"
                     d="m14,20l10,10l10,-10l-20,0z"
                  />
                  <path
                     id="svg_2"
                     fill="none"
                     d="m0,0l48,0l0,48l-48,-48zl0,48"
                  />
               </g>
            </svg>
         </a>
      </div>
   )
}
