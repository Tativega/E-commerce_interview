import React from "react";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function Banner() {
  const slides = useSelector(state => state.slides);

  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
      {slides &&
        slides.map((banner, i) => (
          <div key={i}>
            <img src={`assets/BANNERS/${banner.imgName}`} alt={banner.href} />
          </div>
        ))}
    </Carousel>
  );
}
