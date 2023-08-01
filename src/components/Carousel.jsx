import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Projects } from "../data/Projects";

export const Carousel1 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden"
      id="portfolio"
    >
      <div className="md:w-2/3">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          {Projects().map(
            ({ id, title, description, image, github, website }) => (
              <SwiperSlide key={id} className="p-4">
                <div
                  key={id}
                  className="my-6 p-4 bg-white dark:bg-stone-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mx-auto my-auto">
                      <h2 className="text-xl font-bold">{title}</h2>
                      <p className="text-gray-600 dark:text-gray-300 w-2/3  text-xs ">
                        {description}
                      </p>

                      <div className="flex space-x-4 text-sm">
                        <a
                          href={github}
                          target="_blank"
                          rel="noreferrer"
                          className="py-2 px-4 text-black rounded-lg transition-colors font-bold text-title-h bg-slate-200  hover:bg-yellow-400"
                        >
                          GitHub
                        </a>
                        <a
                          href={website}
                          target="_blank"
                          rel="noreferrer"
                          className="py-2 px-4 text-black rounded-lg transition-colors font-bold text-title-h bg-slate-200  hover:bg-yellow-400"
                        >
                          Website
                        </a>
                      </div>
                    </div>

                    <div className="md:w-1/2 md:mr-8">
                      <img
                        src={image}
                        className=" w-full h-48 object-cover rounded-lg shadow"
                        alt={title}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};
