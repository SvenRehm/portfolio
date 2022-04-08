import React from "react"
import "./Contact.css"
import closeButton from "../../images/close-button.svg"

export const Contact = ({ contact, closeContact, language }) => {
   return (
      <div className="contact-modal">
         <div
            // className="contact-left"
            className={contact ? "contact-left is-open" : "contact-left"}
         >
            <h1>Contact Me</h1>
            {/* <h3>Internship proposal, freelance inquiry or ...</h3> */}
            <h3>Let’s make something special.</h3>
            <form
               className="form"
               action="https://formspree.io/rehm21@web.de"
               method="POST"
            >
               <div className="label-name">
                  <input placeholder="Name" type="text" name="name"></input>
               </div>

               <div className="label-email">
                  <input
                     placeholder="Email"
                     type="email"
                     name="_replyto"
                     required
                  ></input>
               </div>
               <div className="label-message">
                  <textarea
                     placeholder="Write a message..."
                     name="message"
                     id=""
                  ></textarea>
               </div>
               <input
                  className="form-button"
                  type="submit"
                  value="Send"
               ></input>
            </form>
         </div>
         <div
            //  className="contact-right-wrapper"
            className={
               contact
                  ? "contact-right-wrapper is-open-right"
                  : "contact-right-wrapper"
            }
         >
            <div
               className={
                  contact ? "contact-right is-open-right" : "contact-right"
               }
            >
               <div className="content-contact-right">
                  <div className="close-btn">
                     <a
                        id="close-btn"
                        href="/"
                        onClick={(event) => {
                           event.preventDefault()
                           closeContact()
                        }}
                     >
                        <img
                           className="close-contact-right"
                           src={closeButton}
                           alt=""
                        ></img>
                     </a>
                  </div>
                  {/* <h1>Sven Rehm</h1>
                  <h4>Front End Developer</h4> */}
                  {/* <h2>About Me</h2> */}
                  <h1>About Me</h1>
                  {language ? (
                     <p>
                        Hello I’m a Front-End Developer. I have genuine passion
                        in
                        <b> Front-End Developepment</b> and the{" "}
                        <b>problem solving</b> aspect of it. My current goal is
                        to learn new technologies and skills so that I can build
                        bigger and more ambitious projects in the future. In my
                        free time I work out, play games and watch TV series
                        such as Suits and House of Cards.
                        {/* Driven, self taught Front End Developer with a passion
                        for building interactive and responsive websites. Web
                        Development offers me engaging challenges to continually
                        learn, improve upon my skills and solve problems. I
                        enjoy to create new things and iterate on them until
                        even the smallest details are perfect. */}
                     </p>
                  ) : (
                     <p>
                        Hallo, ich bin ein Front-End-Entwickler. Ich habe echte
                        Leidenschaft für Front-End-Entwickler und der
                        Problemlösungsaspekt. Mein aktuelles Ziel ist es neue
                        Technologien und Fähigkeiten zu erlernen, damit ich in
                        Zukunft um in Zukunft größere und anspruchsvollere
                        Projekte durchführen zu können. In meiner Freizeit
                        trainiere ich, spiele Spiele und schaue Fernsehserien
                        wie House of Cards und Vikings.
                     </p>
                  )}

                  <ul>
                     <li>
                        <a id="twitters2" href="/">
                           <svg
                              height="60px"
                              version="1.1"
                              viewBox="0 0 60 60"
                              width="40px"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <title />
                              <desc />
                              <defs />
                              <g
                                 fill="none"
                                 fillRule="evenodd"
                                 id="soical"
                                 stroke="none"
                                 strokeWidth="1"
                              >
                                 <g
                                    id="social"
                                    transform="translate(-173.000000, -138.000000)"
                                 >
                                    <g
                                       id="slices"
                                       transform="translate(173.000000, 138.000000)"
                                    />
                                    <g
                                       fill="#000000"
                                       id="square-black"
                                       transform="translate(173.000000, 138.000000)"
                                    >
                                       <path
                                          d="M2.99593743,0 L57.0040626,0 C58.6586731,0 60,1.33730974 60,2.99593743 L60,57.0040626 C60,58.6586731 58.6626903,60 57.0040626,60 L2.99593743,60 C1.34132688,60 0,58.6626903 0,57.0040626 L0,2.99593743 C0,1.34132688 1.33730974,0 2.99593743,0 Z"
                                          id="square"
                                       />
                                    </g>
                                    <g
                                       fill="#FFFFFF"
                                       id="icon"
                                       transform="translate(182.000000, 150.000000)"
                                    >
                                       <path
                                          d="M32.0521385,6.43669427 C30.8431846,5.0622015 29.1205385,4.1864641 27.2140615,4.15473103 C23.5536,4.09380309 20.5856538,7.18692339 20.5856538,11.063116 C20.5856538,11.6132412 20.6442923,12.1496934 20.7573692,12.6646732 C15.2485846,12.3073526 10.3644692,9.43877059 7.09541538,5.1147218 C6.52486154,6.1508617 6.19790769,7.36188271 6.19790769,8.65915037 C6.19790769,11.1149884 7.36809231,13.2945272 9.14663077,14.5814174 C8.06012308,14.5334499 7.03806923,14.2045378 6.14443846,13.664952 C6.14379231,13.694445 6.14379231,13.7239449 6.14379231,13.7539625 C6.14379231,17.1835497 8.42859231,20.0607076 11.4608308,20.7309383 C10.9046538,20.888538 10.3190769,20.9710163 9.7146,20.967008 C9.28749231,20.9641758 8.87217692,20.9168118 8.46752308,20.831768 C9.31091538,23.6443777 11.7587077,25.6967663 14.6592923,25.764628 C12.3908077,27.6476963 9.53286923,28.7691933 6.42729231,28.762787 C5.89227692,28.7616833 5.36469231,28.727112 4.84615385,28.6605996 C7.77953077,30.6733139 11.2635923,31.8451711 15.0067615,31.8461531 C27.1985538,31.8493518 33.8657308,21.2395109 33.8657308,12.0367687 C33.8657308,11.7348363 33.8591077,11.4345191 33.8465077,11.135652 C35.1415615,10.1706665 36.2652231,8.96078915 37.1538462,7.57921901 C35.9652462,8.11501615 34.6876385,8.47086863 33.3470308,8.62013789 C34.7154231,7.77796518 35.7665538,6.43009607 36.2613462,4.8137584 C34.9805077,5.59049229 33.5620385,6.14751286 32.0521385,6.43669427 Z"
                                          id="twitter2"
                                       />
                                    </g>
                                 </g>
                              </g>
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a id="mails2" href="/">
                           <svg
                              height="60px"
                              version="1.1"
                              viewBox="0 0 60 60"
                              width="40px"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <title />
                              <desc />
                              <defs />
                              <g
                                 fill="none"
                                 fillRule="evenodd"
                                 id="soical"
                                 stroke="none"
                                 strokeWidth="1"
                              >
                                 <g
                                    id="social"
                                    transform="translate(-873.000000, -638.000000)"
                                 >
                                    <g
                                       id="slices"
                                       transform="translate(173.000000, 138.000000)"
                                    />
                                    <g
                                       fill="#000000"
                                       id="square-black"
                                       transform="translate(173.000000, 138.000000)"
                                    >
                                       <path
                                          d="M702.995937,500 L757.004063,500 C758.658673,500 760,501.33731 760,502.995937 L760,557.004063 C760,558.658673 758.66269,560 757.004063,560 L702.995937,560 C701.341327,560 700,558.66269 700,557.004063 L700,502.995937 C700,501.341327 701.33731,500 702.995937,500 Z"
                                          id="square-58"
                                       />
                                    </g>
                                    <g
                                       fill="#FFFFFF"
                                       id="icon"
                                       transform="translate(182.000000, 150.000000)"
                                    >
                                       <path
                                          d="M721,521.461538 L738.307692,506.461538 L703.692308,506.461538 L721,521.461538 Z M716.325177,519.801054 L721,523.63824 L725.601581,519.801054 L738.307692,530.692308 L703.692308,530.692308 L716.325177,519.801054 Z M702.538462,529.538462 L702.538462,507.615385 L715.230769,518.576923 L702.538462,529.538462 Z M739.461538,529.538462 L739.461538,507.615385 L726.769231,518.576923 L739.461538,529.538462 Z"
                                          id="mail2"
                                       />
                                    </g>
                                 </g>
                              </g>
                           </svg>
                        </a>
                     </li>

                     <li>
                        <a id="githubs2" href="/">
                           <svg
                              height="60px"
                              version="1.1"
                              viewBox="0 0 60 60"
                              width="40px"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <title />
                              <desc />
                              <defs />
                              <g
                                 fill="none"
                                 fillRule="evenodd"
                                 id="soical"
                                 stroke="none"
                                 strokeWidth="1"
                              >
                                 <g
                                    id="social"
                                    transform="translate(-1073.000000, -638.000000)"
                                 >
                                    <g
                                       id="slices"
                                       transform="translate(173.000000, 138.000000)"
                                    />
                                    <g
                                       fill="#000000"
                                       id="square-black"
                                       transform="translate(173.000000, 138.000000)"
                                    >
                                       <path
                                          d="M902.995937,500 L957.004063,500 C958.658673,500 960,501.33731 960,502.995937 L960,557.004063 C960,558.658673 958.66269,560 957.004063,560 L902.995937,560 C901.341327,560 900,558.66269 900,557.004063 L900,502.995937 C900,501.341327 901.33731,500 902.995937,500 Z"
                                          id="square-60"
                                       />
                                    </g>
                                    <g
                                       fill="#FFFFFF"
                                       id="icon"
                                       transform="translate(182.000000, 150.000000)"
                                    >
                                       <path
                                          d="M916.425274,535.516889 C916.425274,535.067173 916.409407,533.877227 916.40034,532.296831 C911.265178,533.440294 910.181705,529.758899 910.181705,529.758899 C909.3419,527.571909 908.131493,526.989719 908.131493,526.989719 C906.455284,525.81488 908.258427,525.839283 908.258427,525.839283 C910.111438,525.97292 911.08611,527.790376 911.08611,527.790376 C912.732853,530.682734 915.406401,529.848378 916.459274,529.3638 C916.627008,528.140155 917.104144,527.305798 917.631147,526.832841 C913.531857,526.355236 909.221766,524.730682 909.221766,517.477126 C909.221766,515.410989 909.941437,513.721359 911.122377,512.397777 C910.933109,511.91901 910.298439,509.994645 911.303711,507.388152 C911.303711,507.388152 912.85412,506.879172 916.37994,509.328786 C917.852149,508.909284 919.432024,508.69779 921.002833,508.690817 C922.570242,508.69779 924.148985,508.909284 925.624593,509.328786 C929.148146,506.879172 930.696289,507.388152 930.696289,507.388152 C931.703828,509.993483 931.070291,511.917848 930.87989,512.397777 C932.063096,513.721359 932.7771,515.410989 932.7771,517.477126 C932.7771,524.749274 928.460209,526.349426 924.347319,526.817735 C925.011456,527.402249 925.600793,528.557333 925.600793,530.323659 C925.600793,532.854618 925.576993,534.896351 925.576993,535.516889 C925.576993,536.023545 925.910195,536.611546 926.847467,536.426779 C934.176775,533.919061 939.461538,526.828193 939.461538,518.46836 C939.461538,508.013339 931.194958,499.538462 920.999433,499.538462 C910.805042,499.538462 902.538462,508.013339 902.538462,518.46836 C902.539595,526.830517 907.828892,533.926034 915.165,536.429103 C916.087539,536.602249 916.425274,536.017735 916.425274,535.516889 Z"
                                          id="github2"
                                       />
                                    </g>
                                 </g>
                              </g>
                           </svg>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="divTable blueTable">
                  <div className="divTableHeading">
                     <div className="divTableRow">
                        <div className="divTableHead">Front - End</div>
                        <div className="divTableHead">Back - End</div>
                        <div className="divTableHead">Other</div>
                     </div>
                  </div>
                  <div className="divTableBody">
                     <div className="divTableRow">
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                     </div>
                     <div className="divTableRow">
                        <div className="divTableCell">HTML</div>
                        <div className="divTableCell">NODE</div>
                        <div className="divTableCell">GIT</div>
                     </div>
                     <div className="divTableRow">
                        <div className="divTableCell">CSS/SASS</div>
                        <div className="divTableCell">EXPRESS</div>
                        <div className="divTableCell">POSTMAN</div>
                     </div>
                     <div className="divTableRow">
                        <div className="divTableCell">JAVASCRIPT</div>
                        <div className="divTableCell">ProgreSQL</div>
                        <div className="divTableCell"></div>
                     </div>
                     <div className="divTableRow">
                        <div className="divTableCell">REACT</div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                     </div>
                     <div className="divTableRow">
                        <div className="divTableCell">REDUX</div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
