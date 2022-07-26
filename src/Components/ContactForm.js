import React, { useState, useRef } from "react"
import emailjs from "emailjs-com"

export const ContactForm = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")
   const [emailSent, setEmailSent] = useState(false)
   const form = useRef()

   const isValidEmail = (email) => {
      const regex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(String(email).toLowerCase())
   }

   const sendEmail = (e) => {
      e.preventDefault()

      if (name && email && message) {
         const serviceId = "service_ux20mgn"
         const templateId = "template_zydincy"
         const userId = "kODhK5BQqj8wiVmlI"
         const templateParams = {
            name,
            email,
            message,
         }

         emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then((response) => console.log(response))
            .then((error) => console.log(error))

         setName("")
         setEmail("")
         setMessage("")
         setEmailSent(true)
      } else {
         alert("Please fill in all fields.")
      }
   }
   return (
      <>
         <span className={emailSent ? "visible" : null}>
            Thank you for your message, we will be in touch in no time!
         </span>
         <form ref={form} onSubmit={sendEmail}>
            <div className="label-name">
               <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>

            <div className="label-email">
               <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="label-message">
               <textarea
                  placeholder="Write a message..."
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               />
            </div>
            <button
               className="form-button"
               type="submit"
               //  onClick={sendEmail}
            >
               Submit
            </button>
         </form>
      </>
   )
}

export default ContactForm
