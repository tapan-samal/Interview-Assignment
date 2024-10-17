import React, { useState } from 'react';

function CaptionInput({ canvas }) {
  const [caption, setCaption] = useState('');

  const addCaption = () => {
    const text = new fabric.Text(caption, {
      left: 150,
      top: 150,
      fontSize: 24,
      fill: 'black',
    });
    canvas.add(text);
  };

  return (
    <div className="caption-input">
      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Enter caption..."
      />
      <button onClick={addCaption}>Add Caption</button>
    </div>
  );
}

export default CaptionInput;
