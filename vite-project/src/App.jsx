import { Estado } from "./components/Estado";
import GetPosts from "./components/GetPosts";
import { MiPrimerComponente } from "./components/MiPrimerComponente";
import RickAndMorty from "./components/RickAndMorty";
import Convertor from "./components/Convertor.jsx";
import Tarjetita from "./components/Tarjetita.jsx";

//props

function App() {
  return (
    <div className="fondo">
      <>
        <MiPrimerComponente name={"Nicolas"} lastName={"Martinez"} />
        <Estado />
        <GetPosts />
        <RickAndMorty />
        <Convertor />
        <Tarjetita />
      </>
    </div>
  );
}

export default App;

/*
Quiero crear un porfolio en React. 
Necesito que sea minimalista, que predomine el blanco y el negro y sea responsive.
Mi nombre es Nicolas Martinez
y me gustaria que el codigo este comentado con explicaciones del codigo 

I want an portfolio in React. 
I need it to be minimalist, with white and black predominent and it to be responsive
My name is Nicolas Martinez and i would like than the code is explained with commentaries */
