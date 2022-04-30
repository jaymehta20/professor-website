import { SocialIcon } from 'react-social-icons';
function Footer() {
  return (
    <footer>
      <div>
        <p className="logo">Sushant Nayak</p>
        <p>All rights reserved</p>
      </div>
      <div>
        <p className="logo">Navigation</p>
        <div className="footer-links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Courses</a>
          <a href="">Resume</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className='social-icons'>
      <SocialIcon url="https://facebook.com/jaketrent" bgColor="white" />
      <SocialIcon url="https://instagram.com/jaketrent" bgColor="white"/>
      <SocialIcon url="https://twitter.com/jaketrent" bgColor="white" />
      <SocialIcon url="https://linkedin.com/jaketrent" bgColor="white"/> 
      </div>
    </footer>
  );
}

export default Footer;
