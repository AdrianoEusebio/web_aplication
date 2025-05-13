
import api from '../api/api';
import type { User } from '../types/User';

interface Props {
  users: User[];
  refreshUsers: () => void; 
}

export default function UserTable({ users, refreshUsers }: Props) {
  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/users/delete/${id}`);
      refreshUsers();
    } catch (error) {
      alert('Erro ao deletar usuário');
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuário</th>
          <th>Primeiro Nome</th>
          <th>Sobrenome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>
              <button onClick={() => handleDelete(user.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
