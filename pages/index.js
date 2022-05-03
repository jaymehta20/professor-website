import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Layout from "../components/Layout";
import Socialicons from "../components/Socialicons";

export default function Home() {
  return (
    <>
      <Layout>
        <main id="home">
          <div className="hero">
            <div className="hero-content">
              <h1>Sushant Nayak</h1>
              <p className="subtitle mar-bot-sm">Assistant Professor</p>
              <p className="mar-bot-sm">
                To utilize my teaching skills towards a challenging career in
                growth oriented and leading edge that will provide mutual
                benefits and where from I can utilize my capabilities to the
                fullest benefits of the organization and society.
              </p>
              <div className="mar-bot-sm buttons">
                <a className="btn btn-filled" href="#course">
                  Courses
                </a>
                <a className="btn btn-outline" href="#contact">
                  Contact
                </a>
              </div>
              <Socialicons />
            </div>
            <div>
              <Image
                src="/images/1.jpg"
                alt="Professor"
                width={600}
                height={400}
                quality={100}
                placeholder="blur"
                blurDataURL
              />
            </div>
          </div>
        </main>
        <section>
          <h2 className="mar-bot-md">Qualification</h2>
          <div className="info-cards mar-bot-md">
            <div className="info-card">
              <h3>MCA</h3>
              <p>Master of Computer Applications</p>
            </div>
            <div className="info-card">
              <h3>MBA</h3>
              <p>Master of Business Administrations (HR)</p>
            </div>
            <div className="info-card">
              <h3>PHD</h3>
              <p>
                Hybrid Recommender System for Assessment In Multi-Constraint
                Academic Paradigm
              </p>
            </div>
          </div>
          <div className="exp-count mar-bot-md">
            <div>
              <h2>16+</h2>
              <p className="subtitle">Teaching & Industrial Experiences</p>
            </div>
            <div>
              <h2>9+</h2>
              <p className="subtitle">
                Professional Training and Certifications
              </p>
            </div>
            <div>
              <h2>19+</h2>
              <p className="subtitle">Papers PublishedExperiences</p>
            </div>
          </div>
        </section>
        <section id="course">
          <h2 className="mar-bot-sm">Courses</h2>
          <div className="iframe-container__video course-cards mar-bot-md">
            <iframe
              className="iframe-video"
              src="https://youtube.com/embed/RyHbrCnha1s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="iframe-container__video">
              <iframe
                className="iframe-video"
                src="https://youtube.com/embed/37IBoCyMNxE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="iframe-container__video">
              <iframe
                className="iframe-video"
                src="https://youtube.com/embed/9v1oA_FQ7tg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
          <a
            className="btn btn-filled mar-bot-md center"
            href="https://www.youtube.com/channel/UCdoNRGom4u6G4bbeZ_EQ61g"
            target="_blank"
            rel="noreferrer"
          >
            Open Youtube Channel
          </a>
        </section>
        <section className="about mar-bot-md" id="about">
          <div className="about-content">
            <h2 className="mar-bot-xs">About</h2>
            <p className="mar-bot-xs">
              To utilize my teaching skills towards a challenging career in
              growth oriented and leading edge that will provide mutual benefits
              and where from I can utilize my capabilities to the fullest
              benefits of the organization and society. To utilize my teaching
              skills towards a challenging career in growth oriented and leading
              edge that will provide mutual benefits and where from I can
              utilize my capabilities to the fullest benefits of the
              organization and society.
            </p>
            <p>
              To utilize my teaching skills towards a challenging career in
              growth oriented and leading edge that will provide mutual benefits
              and where from I can utilize my capabilities to the fullest
              benefits of the organization and society.
            </p>
          </div>
          <div>
            <Image
              src="/images/2.jpg"
              width={600}
              height={400}
              quality={100}
              placeholder="blur"
              blurDataURL
              alt="Professor"
            />
          </div>
        </section>
        {/* <section className="resume mar-bot-md" id="resume">
          <h2>Resume</h2>
          <div className="info-cards">
            <div className="info-card"></div>
            <div className="info-card"></div>
            <div className="info-card"></div>
          </div>
        </section> */}
        <section className="contact mar-bot-md" id="contact">
          <div className="contact-form">
            <h2 className="mar-bot-sm">Contact</h2>
            <form
              action="https://airform.io/susanta.nayak@bharatividyapeeth.edu"
              method="POST"
            >
              <div>
                <p>Full name</p>
                <input type="text" name="name" />
              </div>
              <div>
                <p>Email</p>
                <input type="email" name="email" />
              </div>
              <div>
                <p>Message</p>
                <textarea name="message" />
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-details">
            <div className="mar-bot-sm">
              <h3 className="mar-bot-xs">Email</h3>
              <p>
                <a href="mailto:susanta.nayak@bharatividyapeeth.edu">
                  susanta.nayak@bharatividyapeeth.edu
                </a>
              </p>
              <p>
                <a href="mailto:chhuanna@gmail.com">chhuanna@gmail.com</a>
              </p>
            </div>
            <div>
              <h3 className="mar-bot-xs">Based in</h3>
              <p>Kolhapur, Maharashtra.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
