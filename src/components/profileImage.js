import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProfileImage = () => {
  return (
    <StaticImage
      className="m-5 mx-auto w-44 rounded-3xl shadow-lg shadow-emerald-100"
      alt="my profile image"
      src="../images/profile.jpeg"
    />
  );
};

export default ProfileImage;
