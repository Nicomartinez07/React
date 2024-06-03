import { MiPrimerComponente } from "./components/miPrimerComponente/MiPrimerComponente"

const MyFunction = () => {
  return <>Hola</>;
};

//props

function App() {
  return (
    <>
      <MyFunction />
      <MiPrimerComponente name={'Nicolas'} lastName={'Martinez'} />
    </>
  )
}

export default App
