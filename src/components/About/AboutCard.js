import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour tous le monde, Je suis <span className="purple">Lilian Malinge </span>
            j'habite à <span className="purple"> Cholet, France.</span>
            <br />
            Je suis actuellement freelance, mais je souhaite également trouver un CDI.
            <br />
            J'ai terminé mes étude cette année en <span className="purple">Développement informatique général</span> au CNAM à Cholet
            <br />
            <br />
            En plus du code j'aime aussi :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Joué au jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Combat et Cascade de spectacle au Puy du Fou
            </li>
            <li className="about-activity">
              <ImPointRight /> Apprendre de nouvelle technologie
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Efforcez-vous de construire des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
