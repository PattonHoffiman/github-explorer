import './style.scss';
import { FiChevronRight } from 'react-icons/fi';
import formatRepositoryName from '../../utils/format/formatRepositoryName';

export default function RepositoryContent(props) {
  const link = props.link;
  const dates = props.dates;
  const loading = props.loading;
  const languages = props.languages;
  const description = props.description;
  const name = formatRepositoryName(props.name);  

  return (
    <section className="repository-content">        
      {loading ? (<></>) : (
          <div className={!loading ? 'animate': ''}>
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="secondary-info">
            {link &&
              <a
              href={link}
              target="_blank"
              >
                Access Repository
              </a>
            }
            {dates.created_at &&
              <div className="date-container">
                <span>Created - {dates.created_at}</span>
                <span>Updated - {dates.updated_at}</span>
              </div>
            }
          </div>
          <div className="languages-container">        
            {languages[0] &&
              <div className="indicator">
                <span>Techs</span>
                <FiChevronRight />
              </div>
            }
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