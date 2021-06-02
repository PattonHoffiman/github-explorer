import './style.scss';

export function DateItem(props) {
  return (
    <div className="date-item">
      <span>{props.title}</span> - {props.date}
    </div>
  );
}