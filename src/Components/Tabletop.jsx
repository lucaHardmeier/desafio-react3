/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Celda from "./Celda";

const Tabletop = ({ tabletop }) => {
  return (
    <div className="tabletop">
      {tabletop.map((fila, index) => (
        <div className="line" key={index}>
          {fila.map((celda) => (
            <Celda celda={celda + index} key={celda} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tabletop;
