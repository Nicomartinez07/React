import { Estado } from "./components/Estado";
import GetPosts from "./components/GetPosts";
import { MiPrimerComponente } from "./components/MiPrimerComponente";
import RickAndMorty from "./components/RickAndMorty";

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
      </>
    </div>
  );
}

export default App;
