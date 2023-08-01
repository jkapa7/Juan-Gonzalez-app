import PropTypes from "prop-types";

export const CarouselSlide = ({
  title,
  description,
  image,
  github,
  website,
}) => {
  return (
    <div className="mb-10 mt-4 mx-12 p-4 bg-white dark:bg-stone-600 rounded-lg shadow-md hover:shadow-lg transition-shadow flex">
      <div className="w-1/2 flex flex-col">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-xs">
          {description}
        </p>

        <div className="flex  mt-auto" id="buttons">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-4 text-black rounded-lg font-bold bg-slate-200  hover:bg-yellow-400 "
          >
            GitHub
          </a>
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-4 text-black rounded-lg font-bold bg-slate-200  hover:bg-yellow-400"
          >
            Website
          </a>
        </div>
      </div>

      <div className="w-1/2 flex justify-center align-middle">
        <img
          src={image}
          className="object-cover rounded-lg shadow h-96 w-96"
          alt={title}
        />
      </div>
    </div>
  );
};

CarouselSlide.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  github: PropTypes.string,
  website: PropTypes.string,
};
