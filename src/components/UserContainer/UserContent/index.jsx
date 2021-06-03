import './style.scss';

export default function UserContent(props) {
  const bio = props.bio;
  const name = props.name;
  const avatar = props.avatar_url;
  
  return (
    <div className="user-content">
      <div className="avatar">
        <img
          src={avatar}
          alt={name}
        />
      </div>
      <div className="content">
          <h2>{name}</h2>
          <p>{bio}</p>
      </div>
    </div>
  );
}