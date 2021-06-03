import './styles/global.scss';
import { useState } from 'react';
import RepositoryList from './components/RepositoryList';
import RepositoryContainer from './components/RepositoryContainer';

export function App() {  
  const [repository, setRepository] = useState({});

  function getRepositoryData(data) {
    setRepository(data);
  }

  return (
    <main>
      <RepositoryList getRepository={getRepositoryData}/>
      <RepositoryContainer repository={repository}/>
    </main>
  );
}