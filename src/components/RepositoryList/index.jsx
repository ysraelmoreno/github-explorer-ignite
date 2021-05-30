import RepositoryItem from "./RepositoryItem";

function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem
          name="SASS"
          description="Pre-proccessor for CSS"
          link="github.com"
        />
        <RepositoryItem
          name="unform"
          description="Forms for ReactJS"
          link="github.com"
        />
        <RepositoryItem
          name="styled-components"
          description="Pre-proccessor for SASS"
        />
        <RepositoryItem
          name="axios"
          description="HTTP proccessor"
          link="github.com"
        />
      </ul>
    </section>
  );
}

export default RepositoryList;
