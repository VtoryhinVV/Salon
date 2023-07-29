import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Image, GalleryHero } from "./CustomBanner.styled";

const items = [
  <Image data-value="1" src="/img/hero1.jpg" key={1} />,
  <Image data-value="2" src="/img/hero2.jpg" key={2} />,
  <Image data-value="3" src="/img/hero3.jpg" key={3} />,
  <Image data-value="4" src="/img/hero4.jpg" key={4} />,
];

export const CustomBanner = () => (
  <GalleryHero>
    <AliceCarousel
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={5000}
      animationDuration={500}
      animationType="fadeout"
      infinite
      disableButtonsControls
      mouseTracking
      items={items}
      controlsStrategy="alternate"
    />
  </GalleryHero>
);
