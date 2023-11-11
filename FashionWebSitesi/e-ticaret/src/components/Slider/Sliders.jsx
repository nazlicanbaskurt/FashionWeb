import "./Slider.css";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import PropTypes from "prop-types";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};
const Sliders = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  return (
    <>
      <section className="slider">
        <div className="slider-elements">
          <Slider {...sliderSettings}>
            <SliderItem imgSrc={"img/slider/slider1.webp"} />

            <SliderItem imgSrc={"img/slider/slider2.jpg"} />

            <SliderItem imgSrc={"img/slider/slider3.png"} />
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Sliders;
