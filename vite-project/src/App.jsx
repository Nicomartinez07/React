import { Estado } from "./components/Estado";
import GetPosts from "./components/GetPosts";
import { MiPrimerComponente } from "./components/MiPrimerComponente";
import RickAndMorty from "./components/RickAndMorty";
import Convertor from "./components/Convertor.jsx";

const MyFunction = () => {
  return <>Hola</>;
};

//props

function App() {
  return (
    <div className="fondo">
      <>
        <MyFunction />
        <MiPrimerComponente name={"Nicolas"} lastName={"Martinez"} />
        <Estado />
        <GetPosts />
        <RickAndMorty />
        <Convertor />
      </>
    </div>
  );
}

export default App;
