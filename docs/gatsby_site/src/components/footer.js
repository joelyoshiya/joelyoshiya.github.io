import React from "react"
import styles from "./footer.module.css"

export default function Footer(props) {
  //want to have a bunch of iconned links (githhub, twitter, insta, etc.)
  //nothing too complicated here
  return (
    <div>
      <a href="blah.com" className={styles.a}>
        Github
      </a>
      <a href="blah.com" className={styles.a}>
        Instagram
      </a>
      <a href="blah.com" className={styles.a}>
        LinkedIn
      </a>
      <a href="blah.com" className={styles.a}>
        Spotify
      </a>
      <p>
        Built with 
        <span role="img" aria-labelledby="jsx-ally/accessible-emoji">
          💚
        </span>
        by Joel Yoshiya Foster
      </p>
    </div>
  )
}
