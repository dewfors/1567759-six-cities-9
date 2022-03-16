import React from 'react';

type GalleryProps = {
  images: string[];
}

function Gallery(props: GalleryProps) {
  const {images} = props;
  return (
    <div className="property__gallery">
      {images.map((elem, index) => (
        <div key={elem + String(index)} className="property__image-wrapper">
          <img className="property__image" src={elem} alt="studio" />
        </div>
      ))}
    </div>

  );
}

export default Gallery;
