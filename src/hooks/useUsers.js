import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { initializeUsers } from '../features/user';

const useUsers = () => {
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dispatch(initializeUsers(data));
    return data;
  };

  const { isLoading, error, data } = useQuery('users', fetchUsers);

  return {
    isLoading,
    error,
    users: data
  }
}

export default useUsers;