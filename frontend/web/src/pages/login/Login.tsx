import { useState, useEffect, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/api";
import "../../index.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser, setToken} = useAuth();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await api.post<{ access: string; refresh: string }>(
        "/login/",
        {
          username,
          password,
        }
      );

      setToken(data.access);
      setUser(null);
      navigate("/home");
    } catch (error) {
      alert("Login falhou");
    }
  };

  useEffect(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <button type="submit">Entrar</button>
      <div>
        <p>Não tem uma conta?</p>
        <Link to="/register">
          <button type="button">Criar conta</button>
        </Link>
      </div>
    </form>
  );
}
