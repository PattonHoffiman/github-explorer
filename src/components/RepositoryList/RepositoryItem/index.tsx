import './style.scss';
import { IRepository } from '../../../App';

interface IRepositoryItem {
  repository: IRepository;
  getRepository(data: IRepository): void;
}

export default function RepositoryItem(props: IRepositoryItem) {
  return (
    <div className="init-animation">
      <button
        type="button"
        onClick={() => props.getRepository(props.repository)}
      >
        {props.repository.name}
      </button>
    </div>
  );
}