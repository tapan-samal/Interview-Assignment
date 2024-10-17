import React, { useState, useRef } from 'react';
import SearchBar from './components/SearchBar';
import ImageEditor from './components/ImageEditor';
import CaptionInput from './components/CaptionInput';
import ShapePicker from './components/ShapePicker';
import DownloadButton from './components/DownloadButton';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const canvasRef = useRef(null);

  return (
    <div className="App">
      <SearchBar setImages={setImages} />

      <div className="image-gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => setSelectedImage(image.urls.full)}
            style={{ cursor: 'pointer', margin: '10px' }}
          />
        ))}
      </div>

      {selectedImage && (
        <div>
          <ImageEditor selectedImage={selectedImage} ref={canvasRef} />
          <CaptionInput canvas={canvasRef.current} />
          <ShapePicker canvas={canvasRef.current} />
          <DownloadButton canvas={canvasRef.current} />
        </div>
      )}
    </div>
  );
}

export default App;
