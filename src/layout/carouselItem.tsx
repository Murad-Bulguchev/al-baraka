import React from "react";
import "../sass/layout/carousel.scss";

type PropTypes = {
  img: any;
  title: string;
  department: string;
  phone: string;
  time: string;
  location: string;
};

type carouselProps = {
  props: PropTypes;
};

const CarouselItem = ({ props }: carouselProps) => {
  return (
    <div className="carouselItemBody">
      <img src={props.img} alt="" />
      <span>{props.title}</span>
      <div className="infoBlock">
        <p>{props.department}</p>
        <a href={`tel:${props.phone}`}>{props.phone}</a>
        <p>{props.time}</p>
        <p>{props.location}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
