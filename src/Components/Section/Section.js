// import React from "react"
import React, { Component } from "react"
import "./Section.css"
// import picture from "../../images/champion-akali-headhunter-splash.jpg"

export class Sections extends Component {
   link = () => {
      const currentState = this.state.menu
      this.setState({ menu: !currentState })
   }

   render() {
      const {
         menu,
         headline,
         description,
         skills = [],
         bullets = [],
         codelink,
         demolink,
         picture,
      } = this.props

      const allskills = skills.map((item, key) => <li key={key}>{item}</li>)
      const projectBulllets = bullets.map((item, key) => (
         <li key={key}>{item}</li>
      ))

      return (
         <div>
            <div>
               <div className="grid">
                  <div className="style-element"></div>
                  <div
                     className={menu ? "img-card img-slideup" : "img-card"}
                     href="/"
                     onClick={(event) => {
                        event.preventDefault()
                        this.setState({ isOpen: true })
                     }}
                  >
                     <img alt={"projectimage"} src={picture} />
                     <div className="content "></div>
                     {/* <h4>Skills Used</h4> */}
                     <ul className="skills">{allskills}</ul>
                     <div className="seporator"></div>
                     <div
                        className={
                           menu ? "img-card-text img-slideup" : "img-card-text"
                        }
                     >
                        <h1>{headline}</h1>
                        <h3 className="desctiption-link">{description}</h3>

                        <ul className="projectBulllets">{projectBulllets}</ul>
                     </div>
                     <div className="viewbuttons">
                        <a
                           onClick={() => window.open(demolink, "_blank")}
                           className="viewdemo"
                           href={demolink}
                        >
                           _View Demo
                        </a>

                        <a
                           className="viewcode"
                           href={codelink}
                           onClick={() => window.open(codelink, "_blank")}
                        >
                           _View Code
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
