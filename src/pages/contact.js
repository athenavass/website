import React from "react"
import SVG from "react-inlinesvg"
import iconac from "../images/academia-edu.svg"
import iconlk from "../images/linkedin.svg"
import iconfb from "../images/facebook.svg"
import iconcoop from "../images/agreement.svg"
import SEO from "../components/seo.js"

const Contact = props => {
  return (
    <>
      <SEO title="Contact | Anna Theodorides, Guide Conferencier en histoire de l'art" />
      <div className="contact">
        <h4> Travaillons ensemble!</h4>
        <div className="iconcoop">
          {" "}
          <SVG src={iconcoop} />
        </div>
        <p>annatheoconf@gmail.com</p>
        <p>+33 615 488 692</p>

        <div className="allicons">
          <a
            href="https://ehess.academia.edu/AnnaTheodorides"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <SVG src={iconac} />
          </a>
          <a
            href="https://www.facebook.com/lespetitesconfinees"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <SVG src={iconfb} />
          </a>
          <a
            href="https://www.linkedin.com/in/anna-theodorides-639816bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <SVG src={iconlk} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
