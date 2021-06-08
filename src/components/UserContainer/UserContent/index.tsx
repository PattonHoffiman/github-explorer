import './style.scss';

interface IUserContent {
  bio: string;
  name: string;
  avatar: string;
}

export default function UserContent({bio, name, avatar} : IUserContent) {  
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