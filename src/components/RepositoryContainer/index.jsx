import './style.scss';
import { useState, useEffect } from 'react';
import UserContainer from '../UserContainer';
import RepositoryContent from '../RepositoryContent';
import formatDate from '../../utils/format/formatDate';
import formatJSON from '../../utils/format/formatJSON';

export default function RepositoryContainer(props) {
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState([]);
  const [repository, setRepository] = useState({});

  const dates = {
    created_at: formatDate(repository.created_at),
    updated_at: formatDate(repository.updated_at)
  }

  function getLanguageURL() {
    const url = repository.languages_url;
    
    if(url) {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        const string = JSON.stringify(data);
        const languages = formatJSON(string);
        setLanguages(languages);
        setLoading(false);
      });
    }
  }

  function getRepositoryData() {
    fetch(`https://api.github.com/repos/pattonhoffiman/${props.name}`)
    .then(res => res.json())
    .then(data => {setRepository(data)});
  }
  
  useEffect(() => {
    setLoading(true);
    getRepositoryData();
    getLanguageURL();        
  }, [props.name]);

  return (
    <div className="repository-container-wrapper">
      <UserContainer/>
      <RepositoryContent
        dates={dates}
        loading={loading}
        languages={languages}
        name={repository.name}
        link={repository.html_url}
        description={repository.description}
      />
    </div>
  );
}