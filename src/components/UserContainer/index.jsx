import './style.scss';
import { useState, useEffect } from 'react';

import UserContent from './UserContent';
import CompanyLocation from './CompanyLocation';

export default function UserContainer(props) {  
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(true);

  const userInfo = {
    bio: user.bio,
    name: user.name,
    company: user.company,
    location: user.location,
    avatar_url: user.avatar_url
  }

  useEffect(() => {
    setLoad(true)
    fetch(`https://api.github.com/users/pattonhoffiman`)
    .then(res => res.json())
    .then(data => {
      setUser(data);
      setLoad(false);
    });
  }, []);
  
  return (
    <section className="user-container">
      {load ? (<></>) : (
          <>
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
            <div className="button-area">
              <button
                type="button"
                onClick={props.showRepositories}
              >
                Repositories
              </button>
            </div>
          </>
        )
      }
    </section>
  );
}