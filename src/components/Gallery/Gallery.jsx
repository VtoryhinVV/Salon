import Gallery from 'react-photo-gallery';
import { Container } from '../shared/Container';
import { photos } from './Photos';
import { GalleryCompSect } from './Gallery.styled';
import { useMediaQuery } from 'react-responsive';

import { useState, useCallback } from 'react';

import Carousel, { Modal, ModalGateway } from 'react-images';

export const GalleryComp = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <GalleryCompSect>
      <Container>
        <h2 data-aos="fade-down">Gallery</h2>
        <div data-aos="fade-up">
          <Gallery
            photos={photos}
            direction={'column'}
            columns={isMobile ? undefined : 4}
            margin={3}
            onClick={openLightbox}
          />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </Container>
    </GalleryCompSect>
  );
};
