import './style.scss';
import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

export function RepositoryList(props) {  
  const [user, setUser] = useState('pattonhoffiman');
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {    
    fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => res.json())
    .then(data => setRepositories(data));
  }, []);

  function getRepositoryData(repository) {
    fetch(`https://api.github.com/repos/${user}/${repository.name}`)
    .then(res => res.json())
    .then(data => props.getData(data));
  }
  
  return (
    <aside className="repository-list">
      <div className="repository-list-wrapper">
        <h2>Repositories</h2>
          {repositories && 
            <ul>
              {repositories.map(repository =>
                <RepositoryItem
                  key={repository.id}
                  repository={repository}
                  buttonAction={getRepositoryData}
                />
              )}
            </ul>
          }
      </div>
    </aside>
  );
}