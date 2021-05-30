import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";

import "../../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos

const repository = [
  {
    name: "SASS",
    description: "Pre-proccessor for CSS",
    link: "github.com",
  },
  {
    name: "unform",
    description: "Forms for ReactJS",
    link: "github.com",
  },
  {
    name: "styled-components",
    description: "Pre-proccessor for SASS",
    link: "github.com",
  },
  {
    name: "axios",
    description: "HTTP proccessor",
    link: "github.com",
  },
];

function RepositoryList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repos.map((element) => (
          <RepositoryItem
            key={element.id}
            name={element.name}
            description={element.description}
            link={element.html_url}
          />
        ))}
      </ul>
    </section>
  );
}

export default RepositoryList;
