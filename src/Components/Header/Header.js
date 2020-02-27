import React from "react"
import "./Header.css"

export const Header = ({ menu, toggleMenu }) => {
   return (
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
   )
}
