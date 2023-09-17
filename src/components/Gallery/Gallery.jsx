import Gallery from 'react-photo-gallery';
import { Container } from '../shared/Container';
import { photos } from './Photos';
import { GalleryCompSect } from './Gallery.styled';

export const GalleryComp = () => {
  return (
    <GalleryCompSect>
      <Container>
        <h2>Gallery</h2>
        <Gallery photos={photos} direction={'column'} columns={'4'} />
      </Container>
    </GalleryCompSect>
  );
};
