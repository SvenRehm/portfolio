import React from "react"
import "./Landing.css"
import img from "../../images/hero.jpg"

export const Landing = ({
   menu,
   contact,
   toggleContact,
   arrowhide,
   goToPage,
   languageEN,
}) => {
   return (
      <div className={menu || contact ? "fadeout-landing landing" : "landing"}>
         <div className="fullwidth-wrapper">
            <img className="heroimg" src={img} alt="heroimg"></img>
            <div className="landing-headings">
               <h1>Sven Rehm</h1>
               <h3>
                  {languageEN
                     ? "I am a Germany based Frontend Web Developer with a passion for building clean and user friendly experiences"
                     : "Ich bin ein Frontend-Webentwickler mit einer Leidenschaft für die Erstellung von sauberen und benutzerfreundlichen Webseiten."}
               </h3>

               <a
                  className="btn btn-portfolio"
                  href="/"
                  onClick={(event) => {
                     event.preventDefault()
                     goToPage(1)
                  }}
               >
                  {languageEN ? "My Work" : "Portfolio"}
               </a>
               <a
                  className="btn btn-about-me"
                  href="#aboutme"
                  onClick={() => {
                     toggleContact()
                  }}
               >
                  {languageEN ? "contact" : "Kontakt"}
               </a>
            </div>

            <a
               className="landing-down-arrow vs-anchor"
               href="/"
               onClick={(event) => {
                  event.preventDefault()
                  goToPage(1)
               }}
            >
               <svg
                  className={arrowhide ? "arrowhide" : ""}
                  width="48"
                  height="48"
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
                        fill="#272727"
                        id="svg_1"
                        d="m14,20l10,10l10,-10l-20,0z"
                     />
                     <path
                        id="svg_2"
                        fill="none"
                        d="m0.000002,-0.092307l48,0l0,48l-48,0l0,-48z"
                     />
                  </g>
               </svg>
            </a>
            {/* </div> */}
         </div>
      </div>
   )
}
