import Socialicons from "./Socialicons";
function Footer() {
  return (
    <footer className="mar-bot-md">
      <div>
        <p className="logo mar-bot-sm">Sushant Nayak</p>
        <p>All rights reserved &copy; 2022</p>
        <p>
          Made by{" "}
          <a
            href="https://jaymehta.vercel.app/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Jay Mehta
          </a>{" "}
          &amp;{" "}
          <a
            href="https://tejasmane.netlify.app/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Tejas Mane
          </a>
        </p>
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
      <Socialicons />
    </footer>
  );
}

export default Footer;
