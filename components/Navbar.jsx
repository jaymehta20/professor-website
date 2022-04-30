import Link from "next/link";

const Navbar = () => {
  return (
    <header className="mar-top-sm mar-bot-sm">
      <nav>
        <div>
          <p className="logo">Sushant Nayak</p>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#course">Courses</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
