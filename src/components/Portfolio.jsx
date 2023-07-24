import { Projects } from "../data/Projects";

export const Portfolio = () => {
  return (
    <div>
      <div>
        <h1>Portfolio</h1>
      </div>

      <div>
        {Projects()?.map(({ id, title, description, github, website }) => {
          return (
            <div key={id}>
              <h2>{title}</h2>
              <h2>{description}</h2>
              <a href={github} target="_blank" rel="noreferrer">
                github
              </a>
              <a href={website} target="_blank" rel="noreferrer">
                website
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
