import { useEffect, useState } from 'react';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users/allusers');

        if (!response.ok) {
          throw new Error(`Error al obtener usuarios: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { users, error, loading };
};

export default useFetchUsers;