import './style.scss';

export default function RepositoryItem(props) {  
  return (
    <div className="init-animation">
      <button
        type="button"
        onClick={() => props.buttonAction(props.repository)}
      >
        {props.repository}
      </button>
    </div>
  );
}