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
         picture
      } = this.props

      const allskills = skills.map((item, key) => <li key={key}>{item}</li>)
      const projectBulllets = bullets.map((item, key) => (
         <li key={key}>{item}</li>
      ))

      console.log(picture)
      return (
         <div>
            <div
               vs-anchor="view-4"
               className="mainview view-4 page section"
               id="four"
            >
               <div className="grid">
                  <div
                     // className="img-card"
                     className={menu ? "img-card img-slideup" : "img-card"}
                     href="/"
                     onClick={event => {
                        event.preventDefault()
                        this.setState({ isOpen: true })
                     }}
                  >
                     <a
                        onClick={() => window.open(demolink, "_blank")}
                        className="viewdemo"
                        href={demolink}
                     >
                        View Demo
                     </a>

                     <a
                        className="viewcode"
                        href={codelink}
                        onClick={() => window.open(codelink, "_blank")}
                     >
                        View COde
                     </a>

                     <img alt={"projectimage"} src={picture} />
                     <div className="content "></div>
                     <h4>Skills Used</h4>
                     <ul className="skills">{allskills}</ul>
                     <div
                        className={
                           menu ? "img-card-text img-slideup" : "img-card-text"
                        }
                     >
                        <h1>{headline}</h1>
                        <h3 className="desctiption-link">{description}</h3>

                        <h2>What I have Learned</h2>
                        <ul className="projectBulllets">{projectBulllets}</ul>
                        {/* <p>{paragraph1}</p> */}
                        {/* <p>
                           Lorem ipsum dolor sit amet, consetetur sadipscing
                           elitr, sed diam nonumy eirmod tempor invidunt ut
                           labore et dolore magna aliquyam erat, sed diam
                           voluptua. At vero eos et accusam et justo duo dolores
                           et ea rebum. Stet clita kasd gubergren, no sea
                           takimata sanctus est Lorem ipsum dolor sit amet.
                           Lorem ipsum dolor sit amet, consetetur sadipscing
                        </p> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
