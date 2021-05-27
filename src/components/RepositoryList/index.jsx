import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { RepositoryItem } from './RepositoryItem';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([
    {
      id: uuid(),
      name: 'Back-End Template',
      description: 'A Template for Back-End using Node.js',
      link: 'https://github.com/PattonHoffiman/back-end-template'
    },
    {
      id: uuid(),
      name: 'GreenHouse Back-End',
      description: 'The Back-End of project GreenHouse',
      link: 'https://github.com/PattonHoffiman/green-house-back-end'
    },
    {
      id: uuid(),
      name: 'GreenHouse Front-End',
      description: 'The Front-End of project GreenHouse',
      link: 'https://github.com/PattonHoffiman/green-house-front-end'
    }
  ]);

  function AddNewProject() {
    const repository = {
      id: uuid(),
      name: 'Project',
      description: 'Description...',
      link: null
    }

    setRepositories([...repositories, repository]);
  }
  
  return (
    <section className="repository-list">
      <h1>Repositories</h1>
      <ul>
        {repositories.map(repository =>
          <RepositoryItem
            key={repository.id}
            repository={repository}
          />
        )}
      </ul>
      <button type="button" onClick={AddNewProject}>
        Add New Project
      </button>
    </section>
  );
}