import { Projects } from "../data/Projects";

export const Portfolio = () => {
  return (
    <div className="flex flex-col items-center mt-24" id="portfolio">
      <h1 className="text-3xl font-bold mb-8">Portfolio</h1>
      <div className="w-full md:w-2/3">
        {Projects().map(
          ({ id, title, description, image, github, website }) => (
            <div
              key={id}
              className="my-6 p-4 bg-white dark:bg-stone-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {description}
                  </p>
                  <div className="flex space-x-4">
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
                    className=" w-full h-64 object-cover rounded-lg shadow"
                    alt={title}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
