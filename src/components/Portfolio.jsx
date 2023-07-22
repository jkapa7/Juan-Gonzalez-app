import { projects } from "../data";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      {projects?.map((project) => {
        return (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <h2>{project.description}</h2>
            <a>{project.github}</a>
            <a>{project.website}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
