import React from 'react';
import ImageGallery from 'react-image-gallery';

const GalleryCarousel = ({ items }) => {
  const getImages = () =>
    items?.images
      ? items?.images?.map((_, idx) => ({
          original: `https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${
            items?.id
          }//${idx + 1}.jpg`,
          thumbnail: `https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${
            items?.id
          }//${idx + 1}.jpg`,
        }))
      : [];

  return (
    <ImageGallery
      autoPlay={true}
      slideDuration={500}
      slideInterval={3000}
      infinite={true}
      showNav={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={false}
      showThumbnails={true}
      thumbnailPosition="bottom"
      items={getImages()}
    />
  );
};

export default GalleryCarousel;
