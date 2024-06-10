import { Estado } from "./components/estado/Estado";
import { MiPrimerComponente } from "./components/miPrimerComponente/MiPrimerComponente"

const MyFunction = () => {
  return <>Hola</>;
};

//props

function App() {
  return (
    <div className="fondo">
    <> 
        <MyFunction />
        <MiPrimerComponente name={'Nicolas'} lastName={'Martinez'} />
        <Estado />
    </>
    </div>
  )
}

export default App
