import * as React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <><div className="about">
          <h4>About</h4>
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.
              We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
              All proceeds go towards bringing high quality CS education to college students around the country.</p>
      </div><div className="contact">
              <h5>Contact</h5>
                <p>Email: </p>
                <p>code@path.org </p>
                <p>Phone: </p>
                <p>1-800-CODEPATH</p>
                <p>Address: </p>
                <p>123 Fake Street, San Francisco, CA</p>
          </div></>
  )
}