import React, { useState, useEffect } from "react"; // Importa React y hooks useState y useEffect
import "./App.css"; // Importa el archivo CSS
import { IoIosMail } from "react-icons/io"; // Importa el ícono de correo de react-icons
import { FaWhatsapp } from "react-icons/fa"; // Importa el ícono de WhatsApp de react-icons
import { FaGithub } from "react-icons/fa"; // Importa el ícono de GitHub de react-icons
import { FaDiscord } from "react-icons/fa";


const App = () => {
  // Estado para el tema del sitio (colores de fondo y texto)
  const [theme, setTheme] = useState({ bgColor: "#31363F", ltColor: "#FFFFFF" });

  // Efecto que se ejecuta cuando el estado del tema cambia
  useEffect(() => {
    // Actualiza las variables CSS con los nuevos colores
    document.documentElement.style.setProperty('--bg-color', theme.bgColor);
    document.documentElement.style.setProperty('--text-color', theme.ltColor);
    document.documentElement.style.setProperty('--link-color', theme.ltColor === "#FFFFFF" ? "black" : "white");

    // Condicional para cambiar el color de fondo y texto del header y footer
    if (theme.bgColor === "#FFFFFF") {
      document.documentElement.style.setProperty('--header-footer-bg-color', "#E0E5B6");
      document.documentElement.style.setProperty('--header-footer-text-color', "#2f333a");
    } else {
      document.documentElement.style.setProperty('--header-footer-bg-color', "#31363F");
      document.documentElement.style.setProperty('--header-footer-text-color', "#FFFFFF");
    }
  }, [theme]); // El efecto depende del estado del tema

  // Función para alternar entre los temas claro y oscuro
  const changeTheme = () => {
    setTheme((prevTheme) => ({
      bgColor: prevTheme.bgColor === "#FFFFFF" ? "#2f333a" : "#FFFFFF",
      ltColor: prevTheme.ltColor === "#FFFFFF" ? "#2f333a" : "#FFFFFF",
    }));
  };

  // Componente para mostrar los proyectos
  const Projects = () => {
    // Lista de proyectos
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

    // Renderiza la sección de proyectos
    return (
      <section id="projects">
        <h2>My proyects</h2>
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

  // Renderiza el componente principal de la aplicación
  return (
    <div className="App">
      <button className="color-button" onClick={changeTheme}>
        Theme
      </button>
      <header>
        <h1>Hey! I'm Nicolas Martinez</h1>
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
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="Green" />
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
                href="https://discord.com/channels/@spectreskill"
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
