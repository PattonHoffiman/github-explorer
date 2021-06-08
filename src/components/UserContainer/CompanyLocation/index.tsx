import './style.scss';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';

interface ICompanyLocation {
  company: string;
  location: string;
}

export default function CompanyLocation({ company, location } : ICompanyLocation) {
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