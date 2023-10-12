import React from "react";

const tabletof = () => {
  const getTabletop = () => {
    const arr = [];
    for (let i = 0; i < height; i++) {
      const line = [];
      for (let j = 0; j < width; j++) {
        line.push(i + j);
        line;
      }
      arr.push(line);
    }
    return arr;
  };

  return (
    <>
      <div className="form">
        <input type="number" onChange={(e) => setWidth(e.target.value)} />
        <input type="number" onChange={(e) => setHeight(e.target.value)} />
        <button onClick={() => setTabletop(getTabletop())}>Click</button>
      </div>
      <div>
        <div className="tabletop">
          {tabletop.map((line) => {
            return (
              <div key={line[0]} className="line">
                {line.map((cell) => (
                  <div key={cell} className="cell">
                    {cell}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default tabletof;
