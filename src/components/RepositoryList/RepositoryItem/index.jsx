function RepositoryItem({ name, description, link }) {
  return (
    <li>
      <strong>{name ?? "Default"}</strong>
      <p>{description}</p>
      <a href={link}>Acessar</a>
    </li>
  );
}

export default RepositoryItem;
