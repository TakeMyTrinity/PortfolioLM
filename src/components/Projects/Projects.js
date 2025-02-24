import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skywarsPlugin from "../../Assets/Projects/skywarsPlugin.png";
import zooAPP from "../../Assets/Projects/zooApp.png";
import meteo from "../../Assets/Projects/meteo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici la liste de plusieurs projet que j'ai développé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skywarsPlugin}
              isBlog={false}
              title="Plugin Java pour le jeu Minecraft"
              description="Plugin pour les serveurs Minecraft de SkyWars 100% JAVA8"
              technologies={['Java 8']}
              ghLink="https://github.com/TakeMyTrinity/SkyWarsPlugin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zooAPP}
              isBlog={false}
              title="Projet Application android ZOO"
              description="Projet de fin d'année de Bac+2 ou j'ai créer une application android de gestion de zoo avec une base de donnée SQLite et une api en php qui faisait le lien entre l'application mobile et le site web en Symfony."
              technologies={['Java', 'SQLite', 'Gradle']}
              ghLink="https://github.com/TakeMyTrinity/Zoo-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meteo}
              isBlog={false}
              title="WeatherAPP Flutter"
              description="Application mobile personnel de météo avec Flutter et l'api openweathermap.org, cette application permet de voir la météo de chez soit grâce à la géolocalisation et permet de voir la météeo des villes les plus connues du monde."
              technologies={['Flutter', 'Dart', 'API']}
              ghLink="https://github.com/TakeMyTrinity/weatherApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
