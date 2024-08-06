import { useEffect, useState } from "react";

export default function GetPosts() {
  const [data, setData] = useState([]);
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results);
        setPersonaje(responseData.results[0]); // Assuming you want the first character for demonstration
      });
  }, []);

  /* useEffect(() => {
    if (personaje && personaje.episode) {
      personaje.episode.forEach((item) => {
        console.log(item);
      });
    }
  }, [personaje]); */

  const handleClick = (character) => {
    if (character && character.episode) {
      console.log(character.name);
      console.log(character.gender);
      console.log(character.origin.name);
      character.episode.forEach((episode) => {
        console.log(episode);
      });
    }
  };

  return (
    <>
      {!data.length ? (
        <p>Loading...</p>
      ) : (
        <div className="grillaRickAndMorty">
          {data.map((character, index) => (
            <div
              className="fondoGrilla"
              key={index}
              onClick={() => handleClick(character)}
            >
              <h2>Full name: {character.name}</h2>
              <p>Gender: {character.gender}</p>
              <p>Planet: {character.origin.name}</p>
              <div className="alineamientoFoto">
                <img src={character.image} alt={`${character.name}`} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
