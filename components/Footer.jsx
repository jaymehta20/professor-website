import { SocialIcon } from "react-social-icons";
function Footer() {
  return (
    <footer className="mar-bot-sm">
      <div>
        <p className="logo mar-bot-sm">Sushant Nayak</p>
        <p>All rights reserved &copy; 2022</p>
        <p>Made by Jay Mehta &amp; Tejas Mane </p>
      </div>
      <div>
        <p className="logo mar-bot-xs">Navigation</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#course">Courses</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="social-icons">
        <SocialIcon
          url="https://facebook.com/jaketrent"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          url="https://instagram.com/jaketrent"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          url="https://twitter.com/jaketrent"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          url="https://linkedin.com/jaketrent"
          bgColor="transparent"
          fgColor="white"
        />
      </div>
    </footer>
  );
}

export default Footer;
