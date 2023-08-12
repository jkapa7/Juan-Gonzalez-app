import { Swiper, SwiperSlide } from "swiper/react";
import { Projects } from "../data/Projects";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { CarouselSlide } from "./CarouselSlide";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Carousel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden relative">
      <div className="text-center text-2xl font-bold">
        <h1>Projects</h1>
      </div>

      <div className="w-3/4 flex items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Pagination, A11y]}
          navigation
        >
          {Projects().map(
            ({ id, title, description, image, github, website }) => (
              <SwiperSlide key={id}>
                <CarouselSlide
                  title={title}
                  description={description}
                  image={image}
                  github={github}
                  website={website}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};
