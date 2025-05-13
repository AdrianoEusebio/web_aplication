import { useEffect, useState } from 'react';
import type { User } from '../../types/User';
import api from '../../api/api';
import UserTable from '../../components/UserTable';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = () => {
    api.get<User[]>('/users')
      .then(response => setUsers(response.data))
      .catch(() => alert('Erro ao carregar usuários'));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Usuários</h2>
      <UserTable users={users} refreshUsers={fetchUsers} />
    </div>
  );
}
