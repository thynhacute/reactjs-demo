import React from 'react';

function Colors(props) {
  const { colors } = props;

  return (
    <div className="colors">
      {colors?.map((color) => (
        <button style={{ background: color }} key={color}></button>
      ))}
    </div>
  );
}

export default Colors;
