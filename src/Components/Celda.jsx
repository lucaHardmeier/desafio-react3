/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const Celda = ({ celda }) => {
  let clase = "cell";
  if (celda % 2) {
    clase += " black";
  }

  return <div className={clase}>{celda}</div>;
};

export default Celda;
