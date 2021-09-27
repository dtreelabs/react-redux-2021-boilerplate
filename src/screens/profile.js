import React, {useEffect} from 'react'
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { initializeUsers, addUser } from '../features/user';
import useUsers from '../hooks/useUsers';



const Profile = () => {
  const {isLoading, users, error} = useUsers();

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      {users.map((user) => {
        return(
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        )
      })}
      <input type='button' onClick={() => {}} value='add new user' />
    </div>
  )
}

export default Profile;
