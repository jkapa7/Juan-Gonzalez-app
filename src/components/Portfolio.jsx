import { Projects } from "../data/Projects";

export const Portfolio = () => {
  return (
    <div
      className="flex flex-col justify-center items-center my-24"
      id="portfolio"
    >
      <div>
        <h1 className="text-center">Portfolio</h1>
      </div>

      <div className="w-full md:w-2/3">
        {Projects()?.map(
          ({ id, title, description, image, github, website }) => (
            <div
              key={id}
              className="mx-auto my-4 p-4 flex justify-between bg-white animate-fade-up"
            >
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="flex">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:bg-slate-300 my-auto px-2 py-1 rounded  bg-slate-300"
                  >
                    GitHub
                  </a>

                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:bg-slate-200 my-auto px-2 py-1 rounded bg-slate-300"
                  >
                    Website
                  </a>
                </div>
              </div>

              <div>
                <img src={image} className="h-52 w-52" alt={title} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
