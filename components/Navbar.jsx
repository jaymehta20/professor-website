import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <p className="logo">Sushant Nayak</p>
        </div>
        <div className="nav-links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Courses</a>
          <a href="">Resume</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
