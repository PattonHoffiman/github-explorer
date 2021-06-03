import './style.scss';
import { useState, useEffect } from 'react';

import UserContent from './UserContent';
import CompanyLocation from './CompanyLocation';

export default function UserContainer() {
  const [user, setUser] = useState({});

  const userInfo = {
    bio: user.bio,
    name: user.name,
    company: user.company,
    location: user.location,
    avatar_url: user.avatar_url
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/pattonhoffiman`)
    .then(res => res.json())
    .then(data => setUser(data));
  }, []);
  
  return (
    <section className="user-container">
      <div>
        <UserContent
          bio={userInfo.bio}
          name={userInfo.name}
          avatar_url={userInfo.avatar_url}
        />
        <CompanyLocation
          company={userInfo.company}
          location={userInfo.location}
        />
      </div>
    </section>
  );
}