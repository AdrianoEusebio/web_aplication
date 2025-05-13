import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import "../../index.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/users/register/", {
        username,
        email,
        first_name,
        last_name,
        password,
      });
      alert("Cadastro realizado");
      navigate("/");
    } catch (error) {
      alert("Erro no cadastro");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Cadastro</h2>
      <input
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Sobrenome"
        required
      />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuário"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <button type="submit">Cadastrar</button>
      <div>
        <p>Já tem uma conta?</p>
        <Link to="/">
          <button type="button">Voltar para Login</button>
        </Link>
      </div>
    </form>
  );
}
