import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { profileImage } from "./profileImage.module.css";

const ProfileImage = () => {
  return (
    <StaticImage
      className={profileImage}
      alt="my profile image"
      src="../images/profile.jpeg"
    />
  );
};

export default ProfileImage;
