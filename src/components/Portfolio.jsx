import { projects } from "../data/data";

const Portfolio = () => {
  return (
    <div>
      <div>
        <h1>Portfolio</h1>
      </div>

      <div>
        {projects?.map(({ id, title, description, github, website }) => {
          return (
            <div key={id}>
              <h2>{title}</h2>
              <h2>{description}</h2>
              <a href="" target="_blank" rel="noreferrer">
                {github}
              </a>
              <a href="" target="_blank" rel="noreferrer">
                {website}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
