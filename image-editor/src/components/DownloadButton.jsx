import React from 'react';

function DownloadButton({ canvas }) {
  const downloadImage = () => {
    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1,
    });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'modified-image.png';
    link.click();
  };

  return (
    <button onClick={downloadImage}>Download Image</button>
  );
}

export default DownloadButton;
