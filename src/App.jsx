import './styles/global.scss';
import { useState } from 'react';
import RepositoryList from './components/RepositoryList';
import RepositoryContainer from './components/RepositoryContainer';

export function App() {  
  const [repository, setRepository] = useState('');

  function getRepositoryName(name) {    
    setRepository(name);    
  }

  return (
    <main>
      <RepositoryList getRepositoryName={getRepositoryName}/>
      <RepositoryContainer name={repository}/>
    </main>
  );
}