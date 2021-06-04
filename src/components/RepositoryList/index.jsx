import './style.scss';
import { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';

export default function RepositoryList(props) {  
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/pattonhoffiman/repos`)
    .then(res => res.json())
    .then(data => setRepositories(data));
  }, []);

  function getRepositoryData(repository) {
    props.getRepository(repository);
  }
  
  return (
    <aside className="repository-list">
      {repositories[0] &&
        <div className="repository-list-wrapper">
          <h2>Repositories</h2>
          <ul>
            {repositories.map(repository =>
              <RepositoryItem
                key={repository.id}
                buttonAction={getRepositoryData}
                repositoryName={repository.name}
                repositoryLanguages={repository.languages_url}
              />
            )}
          </ul>
        </div>
      }
    </aside>
  );
}