import React from 'react';

function ShapePicker({ canvas }) {
  const addRectangle = () => {
    const rect = new fabric.Rect({
      left: 50,
      top: 50,
      fill: 'blue',
      width: 100,
      height: 100,
    });
    canvas.add(rect);
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      left: 200,
      top: 200,
      radius: 50,
      fill: 'green',
    });
    canvas.add(circle);
  };

  return (
    <div className="shape-picker">
      <button onClick={addRectangle}>Add Rectangle</button>
      <button onClick={addCircle}>Add Circle</button>
    </div>
  );
}

export default ShapePicker;
