import React from "react"
import "./Menu.css"

export const Menu = ({
   menu,
   toggleContact,
   closeMenu,
   goToPage,
   language,
}) => {
   return (
      <div className={menu ? "menu-overlay closed" : "menu-overlay"}>
         <div className="menu-all">
            <ul className="menu-list">
               <li className="menu-item-1">
                  <a
                     href="/"
                     className="vs-anchor"
                     onClick={(event) => {
                        closeMenu()
                        event.preventDefault()
                        goToPage(0)
                     }}
                  >
                     Home
                  </a>
               </li>
               <li className="menu-item-2">
                  <a
                     href="/"
                     className="vs-anchor"
                     onClick={(event) => {
                        event.preventDefault()
                        closeMenu()
                        goToPage(1)
                     }}
                  >
                     Portfolio
                  </a>
               </li>

               <li className="menu-item-4">
                  <a
                     href="/"
                     onClick={(event) => {
                        event.preventDefault()
                        toggleContact()
                     }}
                  >
                     {language ? " Contact | About" : " Kontakt | über mich"}
                  </a>
               </li>
            </ul>
         </div>
      </div>
   )
}
