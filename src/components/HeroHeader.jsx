import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import '../styles/HeroHeader.css';
import ProfileImg from '../assets/Sarang.png';

function HeroHeader() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Use loadFull if you install '@tsparticles/full'
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  return (
    <section id="home" className="hero" data-aos="fade-up">

      <Container>
        <Row className="align-items-center">
          <Col md={7} className="hero-left">
            <h1 data-aos="fade-right">
              Hi,<br />
              I'm <span className="highlight-y">S</span>arang Lakadkar,<br />
              Software Engineer
            </h1>

            <TypeAnimation
              sequence={[
                'Full-stack Developer',
                2000,
                'Software Tester',
                2000,
                'Dev-Ops',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="p"
              className="subheading"
            />

            <div className="hero-contact-box">
              <p className="contact-label">Contact Me</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/sarang-lakadkar/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/Saranglak04" target="_blank" rel="noreferrer">
                  <SiX />
                </a>
                <a href="https://github.com/saranglakadkar" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/ssarang_04dec/" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>

          <Col md={5} className="hero-right" data-aos="zoom-in">
            <img src={ProfileImg} alt="Profile" className="profile-img" />
          </Col>
        </Row>
      </Container>

      <div className="scroll-down">
        <span></span>
      </div>
    </section>
  );
}

export default HeroHeader;
