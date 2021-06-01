import './style.scss';
import { useState, useEffect } from 'react';

export function RepositoryContent(props) {
  const [techs, setTechs] = useState({});
  
  function convertDate(date) {
    if(date) {
      const onlyDate = date.substring(0,10);
      const [year, month, day] = onlyDate.split('-');
      return `${day}-${month}-${year}`;
    }
  }

  function getLanguageURL() {
    const url = props.injectData().languages_url;
    
    if(url) {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setTechs(data);
        console.log(data);
      });
    }
  }
  
  useEffect(() => {
    getLanguageURL();    
  }, [props.injectData().name]);

  return (
    <section>
      <h1>{props.injectData().name}</h1>
      <p>{props.injectData().description}</p>
      <div className="date-container">
        <span>
          <span>Created At:</span> {convertDate(props.injectData().created_at)}
        </span>
        <span>
          <span>Updated At:</span> {convertDate(props.injectData().updated_at)}
        </span>
      </div>
    </section>
  );
}