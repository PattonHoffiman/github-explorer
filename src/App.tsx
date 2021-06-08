import './styles/global.scss';
import { useState } from 'react';
import RepositoryList from './components/RepositoryList';
import RepositoryContainer from './components/RepositoryContainer';

export interface IRepository {
  id: number;
  name: string;
  languages_url: string;
}

export function App() {  
  const [repository, setRepository] = useState({} as IRepository);

  function getRepositoryData(data: IRepository) {
    setRepository(data);
  }

  return (
    <main>
      <RepositoryList getRepository={getRepositoryData}/>
      <RepositoryContainer {...repository} />
    </main>
  );
}