import React from "react"
import "./Header.css"
import Select from "react-select"

const options = [
   { value: true, label: "English" },
   { value: false, label: "German" },
]
const customStyles = {
   option: (provided, state) => ({
      ...provided,
      borderBottom: "none",
      padding: "11px",
      color: state.isSelected ? "#c0a426" : "black",
      cursor: "pointer",
      backgroundColor: "rgba(51, 170, 51,  0)",
   }),

   container: () => ({
      position: "fixed",
      // right: "7%",
      // cursor: "pointer",
   }),

   dropdownIndicator: () => ({
      display: "none",
   }),
   control: () => ({
      width: "100%",
      backgroundColor: "rgba(51, 170, 51,  0)",
   }),

   singleValue: (provided, state) => {
      return {
         ...provided,
         backgroundColor: "rgba(51, 170, 51,  0)",

         zIndex: 500,
      }
   },

   menu: (provided, state) => {
      return {
         ...provided,
         backgroundColor: "rgba(51, 170, 51,  0)",

         boxShadow: "0px 0px teal",
         margin: "0",
         borderRadius: 0,
         border: "0px solid",
         borderColor: "rgba(51, 170, 51,  0)",
      }
   },
   menuList: (provided, state) => {
      return { ...provided, marginTop: "0" }
   },

   indicatorSeparator: (provided, state) => {
      return { ...provided, display: "none" }
   },
}

export const Header = ({
   menu,
   toggleMenu,
   arrowhide,
   goToPage,

   onChangeLanguage,
}) => {
   return (
      <div>
         <header className="header">
            <div className="header-container">
               <a className="logo" href="/portfolio">
                  SR
               </a>
               <div />

               <Select
                  className="react-select-container"
                  styles={customStyles}
                  defaultValue={options[0]}
                  onChange={onChangeLanguage}
                  options={options}
                  isSearchable={false}
               />
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
         {!menu ? (
            <a
               // className="uparrow"

               className={arrowhide || menu ? "uparrow" : "uparrowhide"}
               href="/"
               onClick={(event) => {
                  event.preventDefault()
                  goToPage(0)
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
         ) : null}
      </div>
   )
}
