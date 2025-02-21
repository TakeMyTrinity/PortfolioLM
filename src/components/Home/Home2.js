import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ MOI ME <span className="purple"> PRESENTER </span>
            </h1>
            <p className="home-about-body">
              Je m'appelle <b className="purple">LILIAN MALINGE</b> j'ai 22 ans et
              je suis tombé amoureux du développement informatique depuis mon plus jeune âge.
              <br />
              <br />Je suis spécialisé en
              <i>
                <b className="purple"> PHP, Javascript. </b>
              </i>
              <br />
              <br />
              Mon intéret en développement informatique et de &nbsp;
              <i>
                <b className="purple">pouvoir créer de nouveaux produits  </b> et
                d'innover en lien avec{" "}
                <b className="purple">
                  l'IA.
                </b>
              </i>
              <br />
              <br />
              J'applique également ma passion pour le développement web en travaillant
              avec <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  des frameworks modernes
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js et Vue.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVER MOI SUR</h1>
            <p>
              N'hésitez pas à vous <span className="purple">connecter </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TakeMyTrinity"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lilian-malinge/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_lilian.mlg_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
