import React, { useState, useEffect } from "react";
import "./App.css";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp, FaGithub, FaDiscord } from "react-icons/fa";
import { CiDark } from "react-icons/ci";

/* ---------------------------------------------------------------------------- */
// Componente de Proyectos
const Projects = () => {
  const projects = [
    {
      title: "Pokemons",
      description: "Pokemon cards",
      link: "#",
      img: "/image.png",
    },
    {
      title: "Rick And Morty",
      description: "Rick and Morty cards",
      link: "/rickAndMorty",
      img: "/rick.png",
    },
    {
      title: "Convertor",
      description: "Currency convertor",
      link: "/convertor",
      img: "/conversor.png",
    },
  ];

  return (
    <section id="projects">
      <h2>My projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.img} className="fotito" alt={project.title} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------------------------------------------------------------------------- */

const App = () => {


  /* ---------------------------------------------------------------------------- */
  /* Tema de la pagina */
  const [theme, setTheme] = useState({ bgColor: "#31363F", ltColor: "#FFFFFF" });

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', theme.bgColor);
    document.documentElement.style.setProperty('--text-color', theme.ltColor);
    document.documentElement.style.setProperty('--link-color', theme.ltColor === "#FFFFFF" ? "black" : "white");

    if (theme.bgColor === "#FFFFFF") {
      document.documentElement.style.setProperty('--header-footer-bg-color', "#FEFAE0");
      document.documentElement.style.setProperty('--header-footer-text-color', "#2f333a");
    } else {
      document.documentElement.style.setProperty('--header-footer-bg-color', "#31363F");
      document.documentElement.style.setProperty('--header-footer-text-color', "#FFFFFF");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => ({
      bgColor: prevTheme.bgColor === "#FFFFFF" ? "#2f333a" : "#FFFFFF",
      ltColor: prevTheme.ltColor === "#FFFFFF" ? "#2f333a" : "#FFFFFF",
    }));
  };

  /* ---------------------------------------------------------------------------- */
  /* Funcionamiento de la pagina */

  return (
    <div className="App">
      <header>
        <h1>Hey! I'm Nicolas Martinez</h1>
        <button className="color-button " onClick={changeTheme}>
        <CiDark />
        </button>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am an Tics student at the Escuela Tecnica UBA in Lugano. 
          Here you will find some of my most recent projects.
        </p>
      </section>
      <Projects />
      <footer>
        <nav>
          <h2>Contact me</h2>
          <ul>
            <li>
              <a
                className="animated-button"
                href="mailto:nicolasmartinezalfonso@gmail.com"
              >
                <IoIosMail color="red" />
              </a>
            </li>
            <li>
              <a
                className="animated-button"
                href="https://wa.me/541151220207/?text=Hola%20te%20quiera%20contactar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="green" />
              </a>
            </li>
            <li>
              <a
                className="animated-button"
                href="https://github.com/Nicomartinez07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="black" />
              </a>
            </li>
            <li>
              <a
                className="animated-button"
                href="https://discordapp.com/users/spectreskill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord color="black" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default App;
