import './style.scss';
import { useState, useEffect } from 'react';

import { IRepository } from '../../App';
import RepositoryItem from './RepositoryItem';

interface IRepositoryList {
  getRepository(data: IRepository): void;
}

export default function RepositoryList(props: IRepositoryList) {
  const [load, setLoad] = useState(true);
  const [repositories, setRepositories] = useState([] as IRepository[]);

  useEffect(() => {
    fetch(`https://api.github.com/users/pattonhoffiman/repos`)
    .then(res => res.json())
    .then(data => {
      setRepositories(data);
      setLoad(false);
    });
  }, []);

  function getRepositoryData(repository: IRepository) {    
    props.getRepository(repository);
  }
  
  return (
    <aside className="repository-list">
      {load ? (<></>) : (
        <div className="repository-list-wrapper">
          <h2>Repositories</h2>
          <ul>
            {repositories.map(repository =>
              <li>
                <RepositoryItem
                  key={repository.id}
                  repository={repository}
                  getRepository={getRepositoryData}
                />
              </li>
            )}
          </ul>
        </div>
      )}
    </aside>
  );
}