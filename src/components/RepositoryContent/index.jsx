import './style.scss';
import { useState, useEffect } from 'react';
import { DateContainer } from '../DateContainer';
import formatJSON from '../../utils/format/formatJSON';

export function RepositoryContent(props) {
  const repository = props.injectData();
  
  const dates = {
    created_at: repository.created_at,
    updated_at: repository.updated_at
  }

  const [techs, setTechs] = useState([]);
  
  function getLanguageURL() {
    const url = repository.languages_url;
    
    if(url) {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        const languages = formatJSON(JSON.stringify(data));
        setTechs(languages);
      });
    }
  }
  
  useEffect(() => {
    getLanguageURL();
  }, [repository.name]);

  return (
    <section>
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
      {repository.created_at && <DateContainer dates={dates}/>}      
    </section>
  );
}