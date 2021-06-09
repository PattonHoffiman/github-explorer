import './style.scss';
import { FiChevronRight } from 'react-icons/fi';
import { IRepositoryData } from '../RepositoryContainer';

import formatDate from '../../utils/format/formatDate';
import formatRepositoryName from '../../utils/format/formatRepositoryName';

interface IRepositoryContent {
  load: boolean;
  languages: string[];
  repository: IRepositoryData;
}

export default function RepositoryContent({repository, load, languages} : IRepositoryContent) {    
  const name = formatRepositoryName(repository.name);

  const dates = {
    created_at: formatDate(repository.created_at),
    updated_at: formatDate(repository.updated_at)
  }

  return (
    <section className="repository-content">
      {load ? (<></>) : (
          <div className={!load ? 'animate': ''}>
          <h1>{name}</h1>
          <p>{repository.description}</p>
          <div className="secondary-info">
            <div className="link-container">
              {repository.homepage &&
                <a
                  href={repository.homepage}
                  target="_blank"
                >
                  Access Site
                </a>
              }
              {repository.html_url &&
                <a
                  href={repository.html_url}
                  target="_blank"
                >
                  Access Repository
                </a>
              }
            </div>            
            {dates.created_at &&
              <div className="date-container">
                <span>Created - {dates.created_at}</span>
                <span>Updated - {dates.updated_at}</span>
              </div>
            }
          </div>
          <div className="languages-container">
            <div className="indicator">
              <span>Techs</span>
              <FiChevronRight />
            </div>
            {languages.map(language =>
              <div
                key={language}
                className="language"
              >
                {language}
              </div>
            )}
          </div>
        </div>
        )
      }
    </section>
  );
}