import { useTranslation } from "react-i18next";

export const Projects = () => {
  const [t] = useTranslation("global");

  return [
    {
      id: 1,
      title: "Mirador Tayrona Park",
      description: t("project-1.description"),
      image:
        "https://img.freepik.com/vector-premium/pequena-planta-suelo-estilo-pixel-art_475147-1002.jpg?w=2000",
      github: "https://www.linkedin.com/in/gonzalezjuanr/",
      website: "https://www.linkedin.com/in/gonzalezjuanr/",
    },

    {
      id: 2,
      title: "Matching",
      description: t("project-2.description"),
      image:
        "https://img.freepik.com/vector-premium/pequena-planta-suelo-estilo-pixel-art_475147-1002.jpg?w=2000",
      github: "https://www.linkedin.com/in/gonzalezjuanr/",
      website: "https://www.linkedin.com/in/gonzalezjuanr/",
    },

    {
      id: 3,
      title: "Educa Agil",
      description: t("project-3.description"),
      image:
        "https://img.freepik.com/vector-premium/pequena-planta-suelo-estilo-pixel-art_475147-1002.jpg?w=2000",
      github: "https://www.linkedin.com/in/gonzalezjuanr/",
      website: "https://www.linkedin.com/in/gonzalezjuanr/",
    },

    {
      id: 4,
      title: "Pokemon",
      description: t("project-4.description"),
      image:
        "https://img.freepik.com/vector-premium/pequena-planta-suelo-estilo-pixel-art_475147-1002.jpg?w=2000",
      github: "https://www.linkedin.com/in/gonzalezjuanr/",
      website: "https://www.linkedin.com/in/gonzalezjuanr/",
    },

    {
      id: 5,
      title: "Rick an Morty",
      description: t("project-5.description"),
      image:
        "https://img.freepik.com/vector-premium/pequena-planta-suelo-estilo-pixel-art_475147-1002.jpg?w=2000",
      github: "https://www.linkedin.com/in/gonzalezjuanr/",
      website: "https://www.linkedin.com/in/gonzalezjuanr/",
    },
  ];
};
