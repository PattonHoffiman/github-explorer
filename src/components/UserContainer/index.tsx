import './style.scss';
import { useState, useEffect } from 'react';

import UserContent from './UserContent';
import CompanyLocation from './CompanyLocation';

interface IUser {
  bio: string;
  name: string;
  company: string;
  location: string;
  avatar_url: string;
}

interface IUserContainer {
  showRepositories(): void;
}

export default function UserContainer(props: IUserContainer) {
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState({} as IUser);

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
                bio={user.bio}
                name={user.name}
                avatar={user.avatar_url}
              />
              <CompanyLocation
                company={user.company}
                location={user.location}
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