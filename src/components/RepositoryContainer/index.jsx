import './style.scss';
import { useState, useEffect } from 'react';

import UserContainer from '../UserContainer';
import RepositoryContent from '../RepositoryContent';
import formatDate from '../../utils/format/formatDate';
import formatJSON from '../../utils/format/formatJSON';

export default function RepositoryContainer(props) {
  const width = window.innerWidth;
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState([]);
  const [repository, setRepository] = useState({});

  const dates = {
    created_at: formatDate(repository.created_at),
    updated_at: formatDate(repository.updated_at)
  }
  
  function showRepositories() {
    setShow(!show);
  }

  useEffect(() => {
    if(width <= 366) showRepositories();

    if(props.repository.name) {
      setLoading(true);
      fetch(`https://api.github.com/repos/pattonhoffiman/${props.repository.name}`)
      .then(res => res.json())
      .then(data => {
        setRepository(data);
        fetch(props.repository.languages_url)
        .then(res => res.json())
        .then(data => {
          const string = JSON.stringify(data);
          const languages = formatJSON(string);
          setLanguages(languages);          
          setLoading(false);
        });
      });
    }    
  }, [props.repository.name]);

  return (          
    <div
      className={show ? 'hide-repository' : 'repository-container-wrapper'}
    >
      <UserContainer
        showRepositories={showRepositories}
      />
      <RepositoryContent
        dates={dates}
        loading={loading}
        languages={languages}
        name={repository.name}
        linkRepo={repository.html_url}
        linkSite={repository.homepage}
        description={repository.description}
      />
    </div>
  );
}