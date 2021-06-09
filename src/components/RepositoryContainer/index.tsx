import './style.scss';
import { useState, useEffect } from 'react';

import { IRepository } from '../../App';
import UserContainer from '../UserContainer';
import RepositoryContent from '../RepositoryContent';
import formatJSON from '../../utils/format/formatJSON';

export interface IRepositoryData {
  name: string;
  html_url: string;
  homepage: string;
  created_at: string;
  updated_at: string;
  description: string;
}

export default function RepositoryContainer(props: IRepository) {
  const width = window.innerWidth;
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(true);
  const [languages, setLanguages] = useState([] as string[]);
  const [repository, setRepository] = useState({} as IRepositoryData);
  
  function showRepositories() {
    setShow(!show);
  }

  useEffect(() => {
    if(width <= 366) showRepositories();

    if(props.name) {
      setLoad(true);
      fetch(`https://api.github.com/repos/pattonhoffiman/${props.name}`)
      .then(res => res.json())
      .then(data => {
        setRepository(data);
        fetch(props.languages_url)
        .then(res => res.json())
        .then(data => {
          const string = JSON.stringify(data);
          const languages = formatJSON(string);
          setLanguages(languages);
          setLoad(false);
        });
      });
    }    
  }, [props.name]);

  return (          
    <div
      className={show ? 'hide-repository' : 'repository-container-wrapper'}
    >
      <UserContainer
        showRepositories={showRepositories}
      />
      <RepositoryContent        
        load={load}
        languages={languages}
        repository={repository}
      />
    </div>
  );
}