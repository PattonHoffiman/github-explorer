import './style.scss';

export function RepositoryItem(props) {
  return (
    <div className="init-animation">
      <button
        type="button"
        onClick={() => props.buttonAction(props.repository)}
      >
        {props.repository.name}
      </button>
    </div>
  );
}