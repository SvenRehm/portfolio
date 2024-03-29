import React, { Component } from "react"

import "./App.css"
import { Header } from "./Components/Header/Header"
import { Landing } from "./Components/Landing/Landing"
import { Sections } from "./Components/Section/Section"
// import { Footer } from "./Components/Footer/Footer"
import { Menu } from "./Components/Menu/Menu"
import { Contact } from "./Components/Contact/Contact"
import "react-image-lightbox/style.css"
import {
   firstSection,
   secondSection,
   thirdSection,
} from "./Components/Content/content"
import {
   firstSectionEN,
   secondSectionEN,
   thirdSectionEN,
} from "./Components/Content/content"

import ReactPageScroller from "react-page-scroller"

export class App extends Component {
   constructor(props) {
      super(props)

      this.state = {
         menu: false,
         contact: false,
         arrowhide: false,
         languageEN: false,
         activePage: 0,
      }
   }

   toggleLanguage = () => {
      const currentState = this.state.languageEN
      this.setState({ languageEN: !currentState })
   }
   toggleMenu = () => {
      const currentState = this.state.menu
      this.setState({ menu: !currentState })
   }

   toggleContact = () => {
      const currentState = this.state.contact
      this.setState({ contact: !currentState, menu: false })
   }
   closeContact = () => {
      this.setState({ contact: false, menu: false })
   }
   closeMenu = () => {
      this.setState({ menu: false })
   }

   goToPage = (pageNumber) => {
      this.reactPageScroller.goToPage(pageNumber)
   }

   disableDownArrow = (e) => {
      if (e >= 2) {
         this.setState({ arrowhide: true })
      } else {
         this.setState({ arrowhide: false })
      }
   }
   onChangeLanguage = (e) => {
      this.setState({ languageEN: e.value })
   }

   render() {
      let options = {
         animationTimer: 850,
         animationTimerBuffer: 10,
         renderAllPagesOnFirstRender: true,
         pageOnChange: this.disableDownArrow,
      }

      const language = this.state.languageEN ? firstSectionEN : firstSection
      const language2 = this.state.languageEN ? secondSectionEN : secondSection
      const language3 = this.state.languageEN ? thirdSectionEN : thirdSection

      console.log(this.state.languageEN)
      return (
         <div className={this.state.contact ? "#scroll blur" : "#scroll"}>
            <div className="bg-lines hidden">
               <svg>
                  <line x1="20%" y1="100%" x2="80%" y2="0" />
                  <line x1="80%" y1="100%" x2="20%" y2="0" />
               </svg>
            </div>
            <Header
               menu={this.state.menu}
               toggleMenu={this.toggleMenu}
               toggleLanguage={this.toggleLanguage}
               arrowhide={this.state.arrowhide}
               goToPage={this.goToPage}
               language={this.state.languageEN}
            />
            <Menu
               menu={this.state.menu}
               toggleContact={this.toggleContact}
               closeMenu={this.closeMenu}
               goToPage={this.goToPage}
               language={this.state.languageEN}
            />
            <Contact
               language={this.state.languageEN}
               contact={this.state.contact}
               closeContact={this.closeContact}
            />

            <ReactPageScroller
               {...options}
               ref={(c) => (this.reactPageScroller = c)}
            >
               <Landing
                  languageEN={this.state.languageEN}
                  menu={this.state.menu}
                  toggleContact={this.toggleContact}
                  changePage={this.changePage}
                  goToPage={this.goToPage}
                  arrowhide={this.state.arrowhide}
               />
               <Sections
                  menu={this.state.menu}
                  picture={language.picture}
                  headline={language.headline}
                  description={language.description}
                  bullets={language.bullets}
                  skills={language.skills}
                  demolink={language.demolink}
                  codelink={language.codelink}
               />

               <Sections
                  menu={this.state.menu}
                  picture={language2.picture}
                  headline={language2.headline}
                  description={language2.description}
                  bullets={language2.bullets}
                  skills={language2.skills}
                  demolink={language2.demolink}
                  codelink={language2.codelink}
               />
               <Sections
                  menu={this.state.menu}
                  picture={language3.picture}
                  headline={language3.headline}
                  description={language3.description}
                  bullets={language3.bullets}
                  skills={language3.skills}
                  demolink={language3.demolink}
                  codelink={language3.codelink}
               />
               {/* <Footer
                  menu={this.state.menu}
                  toggleContact={this.toggleContact}
                  goToPage={this.goToPage}
               /> */}
            </ReactPageScroller>
         </div>
      )
   }
}
