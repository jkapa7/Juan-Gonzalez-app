import { Projects } from "../data/Projects";

export const Portfolio = () => {
  return (
    <div className="justify-center text-center align-middle p-10">
      <div>
        <h1>Portfolio</h1>
      </div>

      <div>
        {Projects()?.map(
          ({ id, title, description, image, github, website }) => {
            return (
              <div key={id}>
                <h2>{title}</h2>

                <div className="flex justify-center text-center align-middle">
                  <div>
                    <h2>{description}</h2>

                    <div className="flex">
                      <a href={github} target="_blank" rel="noreferrer">
                        github
                      </a>

                      <a href={website} target="_blank" rel="noreferrer">
                        website
                      </a>
                    </div>
                  </div>

                  <div>
                    <img src={image} className="h-52 w-52" />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
