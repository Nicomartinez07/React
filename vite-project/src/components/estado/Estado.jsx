//Hooks
import { useEffect, useState } from "react";

//camelcase es la manera de escribir en la cual cada palabra nueva arranca con Mayuscula

export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  //--------------------------------------------------------------------------------------------------------------
  //El useEffect se va a ejecutar la cantidad de veces que las dependencias se actualicen

  //Si no le pasan dependencias se ejecuara solo al principio de la app en el primer render

  //Si no se le pasa el array de dependencias siempre se va a ejecutar

  //useEffect(() => {
  //
  //},[])

  useEffect(() => {
    console.log("Se actualizo el contador");
  }, [contador]);

  //-----------------------------------------------------------------------------------------------------------

  const arrayPersonajes = [
    {
      name: "Rick",
      lastName: "Sanchez",
      planet: "Earth",
      photo: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      photo: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      name: "Jhonny",
      lastName: "Deep",
      planet: "Earth",
      photo: "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
    },
  ];

  //-----------------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="grilla">
        {
          //Cuando despues de la funcion flecha hay parentesis significaque el return es implicito (el programa)
          //retorna todo lo que esta adentro del parentesis
          arrayPersonajes.map((item, index) => (
            <>
              <div className="fondoGrilla">
                <h2>
                  Full name {item.name} {item.lastName}
                </h2>
                <p>Planet: {item.planet} </p>
                <div className="alineamientoFoto ">
                  <img src={item.photo} />
                </div>
              </div>
            </>
          ))
        }
      </div>

      <div>
        <button onClick={handleClick}>Aumentar</button>
        <p>{contador}</p>
      </div>
    </>
  );
};
