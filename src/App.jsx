import './styles/global.scss';
import { useState } from 'react';
import { RepositoryList } from './components/RepositoryList';
import { RepositoryContent } from './components/RepositoryContent';

export function App() {
  const [data, setData] = useState({});

  function getData(data) {    
    setData(data);    
  }

  function injectData() {    
    return data;
  }

  return (
    <main>
      <RepositoryList getData={getData}/>
      <RepositoryContent injectData={injectData} />
    </main>
  );
}