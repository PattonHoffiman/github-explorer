import './style.scss';
import { DateItem } from './DateItem';
import formatDate from '../../utils/format/formatDate';

export function DateContainer(props) {
  const dates = props.dates;
  const createdAt = formatDate(dates.created_at);
  const updatedAt = formatDate(dates.updated_at);

  return (
    <div className="date-container">
      <DateItem title="Created" date={createdAt} />
      <DateItem title="Last Update" date={updatedAt} />
    </div>
  );
}