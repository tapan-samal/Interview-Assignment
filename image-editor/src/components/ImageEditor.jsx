import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function ImageEditor({ selectedImage }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
    });

    if (selectedImage) {
      fabric.Image.fromURL(selectedImage, (img) => {
        img.set({ left: 100, top: 100, selectable: false });
        canvas.add(img);
      });
    }

    return () => canvas.dispose(); // Cleanup on unmount
  }, [selectedImage]);

  return (
    <div className="image-editor">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default ImageEditor;
