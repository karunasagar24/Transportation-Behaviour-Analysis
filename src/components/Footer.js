import React from "react";
import "../styles/Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TwitterIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; All Rights are Reserved </p>
    </div>
  );
}

export default Footer;