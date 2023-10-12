import { useState } from "react";
import Tabletop from "./Components/Tabletop";

function App() {
  const [ancho, setAncho] = useState(0);
  const [alto, setAlto] = useState(0);
  const [tabletop, setTabletop] = useState([]);

  const handleClick = () => {
    let tablero = [];

    for (let i = 0; i < alto; i++) {
      let fila = [];
      for (let j = 0; j < ancho; j++) {
        fila = [...fila, j];
      }
      tablero = [...tablero, fila];
    }

    setTabletop(tablero);
  };

  // Datos primitivos:
  // Number
  // String
  // Bool

  // Datos objeto:
  // objeto
  // array
  // funciones

  // const arr = [1, 2, 3];
  // console.log("Spread op. array", [4, ...arr, ...arr]);
  // // [1, 2, 3, 4]
  // const obj = { a: 1, b: 2 };
  // console.log("Spread op. objeto", { ...obj, c: 3 });
  // // { a: 1, b: 2 , c: 3 }

  return (
    <>
      <div className="form">
        <label htmlFor="ancho">Ancho</label>
        <input type="number" name="ancho" onChange={(e) => setAncho(e.target.value)} />
        <label htmlFor="alto">Alto:</label>
        <input type="number" name="alto" onChange={(e) => setAlto(e.target.value)} />
        <button onClick={handleClick}>Generar tablero</button>
      </div>
      <Tabletop tabletop={tabletop} />
    </>
  );
}

export default App;
