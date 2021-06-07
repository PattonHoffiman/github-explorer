import './style.scss';

export default function RepositoryItem(props) {
  return (
    <div className="init-animation">
      <button
        type="button"
        onClick={() => props.buttonAction({
          show: false,
          name: props.repositoryName,
          languages_url: props.repositoryLanguages
        })}
      >
        {props.repositoryName}
      </button>
    </div>
  );
}