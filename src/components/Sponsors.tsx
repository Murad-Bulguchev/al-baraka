import React from "react";
import "../sass/layout/carousel.scss";
import { useSpringCarousel } from "react-spring-carousel";
import img1 from "../assets/img/sponsors/1.png";
import img2 from "../assets/img/sponsors/2.jpeg";
import img3 from "../assets/img/sponsors/3.png";
import img4 from "../assets/img/sponsors/4.png";
import img5 from "../assets/img/sponsors/5.png";
import img6 from "../assets/img/sponsors/6.jpg";
import CarouselItem from "../layout/carouselItem";

const hashCode = (item: string): string => {
  let hash = 0;
  for (let i = 0; i < item.length; i++) {
    let char = item.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return String(hash);
};

const sponsors = [
  {
    img: img1,
    title: "ИНГОСТРОЙ",
    department: "Стройматериалы",
    phone: "+7(938)005-55-35",
    time: "9:00 - 18:00",
    location: "Плиево, пересечение улиц Осканова  и Эсмурзиева",
  },
  {
    img: img2,
    title: "АНГАВТО",
    department: "Автозапчасти на все авто",
    phone: " +7(938)026-66-44",
    time: "9:00 - 18:00",
    location: "г. Назрань, ул. Вазовская, 1",
  },
  {
    img: img3,
    title: "Ламинат Холл Назрань",
    department: "Ламинат",
    phone: "+7(963)399-17-77",
    time: "9:30 - 18:30",
    location: "Назрань, ул. Картоева, 148",
  },
  {
    img: img4,
    title: "Моби Кинг Назрань",
    department: "Магазин электроники",
    phone: "+7(962)637-80-87",
    time: "9:00 - 18:00",
    location: "г. Назрань, ул. Муталиева, 34",
  },
  {
    img: img5,
    title: "Центр Мебели и Дизайна",
    department: "Мебель",
    phone: " +7(960)435-22-55",
    time: "9:00 - 18:00",
    location: "Г.Назрань ул.Тангиева 10",
  },
  {
    img: img6,
    title: "Обои Новострой",
    department: "Обои; Плинтуса",
    phone: "+7(938)076-88-33",
    time: "9:00 - 18:00",
    location: "АО Насыр-Корт, ул. А. Тутаевой, 24",
  },
];

const Sponsors = () => {
  const { carouselFragment } = useSpringCarousel({
    withLoop: true,
    itemsPerSlide: 3,
    items: sponsors.map((item) => ({
      id: hashCode(item.title),
      renderItem: (
        <CarouselItem
          props={{
            img: item.img,
            title: item.title,
            department: item.department,
            phone: item.phone,
            time: item.time,
            location: item.location,
          }}
        />
      ),
    })),
  });
  return (
    <div className="carouselWrapper">
      <h1>Наши партнеты</h1>
      {carouselFragment}
    </div>
  );
};

export default Sponsors;
