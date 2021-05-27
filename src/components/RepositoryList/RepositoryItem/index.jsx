export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Name'}</strong>
      <p>
        {props.repository.description ?? 'Description'}
      </p>
      <a href={props.repository?.link} target="_blank">
        Access Repository
      </a>
    </li>
  );
}