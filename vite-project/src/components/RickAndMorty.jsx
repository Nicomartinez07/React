import { useEffect } from "react";
import { useState } from "react";

export default function GetPosts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results));
  }, []);

  return (
    <>
      <div className="grilla">
        {data.map((data, index) => (
          <div className="fondoGrilla" key={index}>
            <h2>Full name: {data.name}</h2>
            <p>Gender: {data.gender}</p>
            <p>Planet: {data.origin.name} </p>
            <div className="alineamientoFoto ">
              <img src={data.image} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
