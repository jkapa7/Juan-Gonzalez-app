import { Projects } from "../data/Projects";

export const Portfolio = () => {
  return (
    <div className="p-10">
      <h1 className="text-center">Portfolio</h1>

      <div>
        {Projects()?.map(
          ({ id, title, description, image, github, website }) => (
            <div
              key={id}
              className=" w-1/2 mx-auto my-4 p-4 flex justify-between bg-white"
            >
              <div>
                <h2 className="mb-2">{title}</h2>
                <p className="mb-2">{description}</p>
                <div className="flex">
                  <a href={github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={website} target="_blank" rel="noreferrer">
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
