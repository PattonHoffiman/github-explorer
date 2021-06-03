import './style.scss';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';

export default function CompanyLocation(props) {
  const company = props.company;
  const location = props.location;

  return (
    <div className="company-location">
      {company &&
        <div title="Company">
          <FiBriefcase />
          <span>{company}</span>
        </div>
      }
      {location &&
        <div title="Location">
          <FiMapPin />
          <span>{location}</span>
        </div>
      }
    </div>
  );
}