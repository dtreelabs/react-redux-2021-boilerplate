import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../features/user'; 

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log("Rendering Profile");

  const addNewUser = () => (
    dispatch(login({id: 202, name: 'new user from action', age: 99}))
  );

  return (
    <div>
      <h5>Welcome :-</h5>
      id: {user.id}
      name: {user.name}
      age: {user.age}

      <hr></hr>
      <input type='button' onClick={addNewUser} value='add new user' />
    </div>
  )
}

export default Profile;
