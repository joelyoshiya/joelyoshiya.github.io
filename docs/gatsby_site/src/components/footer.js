import React from "react"
import styles from "./footer.module.css"

export default function Footer(props) {
  //want to have a bunch of iconned links (githhub, twitter, insta, etc.)
  //nothing too complicated here
  return (
    <div>
      <a href="https://github.com/joelyoshiya" target="_blank" rel="noreferrer" className={styles.a}>
        Github
      </a>
      <a href="https://www.instagram.com/yoshi._j/" target="_blank" rel="noreferrer" className={styles.a}>
        Instagram
      </a>
      <a href="https://www.linkedin.com/in/joel-yoshiya-foster/" target="_blank" rel="noreferrer" className={styles.a}>
        LinkedIn
      </a>
      <a href="https://open.spotify.com/user/1229025912" target="_blank" rel="noreferrer" className={styles.a}>
        Spotify
      </a>
      <p>
        Built with{" "}  
        <span role="img" aria-labelledby="jsx-ally/accessible-emoji">
          💚
        </span>{" "}
          by Joel Yoshiya Foster
      </p>
    </div>
  )
}
