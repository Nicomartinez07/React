import React, { useState, useEffect } from "react";
import "./App.css"; // Asegúrate de personalizar este archivo para tu estilo
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const App = () => {
  // Estado para el color de fondo
  const [bgColor, setBgColor] = useState("#2f333a");
  const [ltColor, setLtColor] = useState("#FFFFFF");

  // Función para cambiar el color de fondo y la letra
  const changeBackgroundColor = () => {
    const colors = ["#FFFFFF", "#2f333a"];

    // Alternar el color de fondo
    const newBgColor = bgColor === colors[0] ? colors[1] : colors[0];
    setBgColor(newBgColor);

    // Alternar el color de la letra
    const newLtColor = ltColor === colors[0] ? colors[1] : colors[0];
    setLtColor(newLtColor);
  };

  // Componente para la sección de proyectos
  const Projects = () => {
    const projects = [
      {
        title: "Pokemones",
        description: "Tarjetas de pokemones",
        link: "#",
        img: "/image.png",
      },
      {
        title: "RickAndMorty",
        description: "Tarjetas de informacion sobre rick and morty",
        link: "/rickAndMorty",
        img: "/rick.png",
      },
      {
        title: "Convertor",
        description: "Convertor de monedas",
        link: "/convertor",
        img: "/conversor.png",
      },
    ];

    return (
      <section id="projects">
        <h2>Mis Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} className="fotito" />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Componente principal del portfolio

  return (
    <div className="App" style={{ backgroundColor: bgColor, color: ltColor }}>
      <button className="color-button" onClick={changeBackgroundColor}>
        Tema
      </button>
      <header>
        <h1>Nicolas Martinez</h1>
      </header>
      <section id="about">
        <h2>Sobre Mí</h2>
        <p>
          Soy un desarrollador apasionado por la tecnología y el diseño. Aquí
          encontrarás algunos de mis proyectos más recientes.
        </p>
      </section>
      <Projects />
      <section>
        <h2>Contacto</h2>
        <nav>
          <ul>
            <li>
              <a
                className="animated-button"
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttWWlvDzgQglhFTBVrMHrjLRskpRVmFQwfrdwpmsbdPWnDbsPgSrZzLhtBDVgQqcGLPhg"
              >
                <IoIosMail color="red" />
              </a>
            </li>
            <li>
              <a
                className="animated-button"
                href="https://wa.me/541151220207/?text=Hola%20te%20quiera%20contactar"
                target="_blank"
              >
                <FaWhatsapp color="Green" />
              </a>
            </li>
            <li>
              <a
                className="animated-button"
                href="https://github.com/Nicomartinez07"
              >
                <FaGithub color="black" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <footer>
        <p>&copy; 2024 Nicolas Martinez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
