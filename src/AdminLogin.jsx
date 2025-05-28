import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api"; 
import "bootstrap/dist/css/bootstrap.css"; 

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!credentials.username || !credentials.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const data = await userLogin(credentials);

      if (data.token) {
        localStorage.setItem("authToken", data.token);
        navigate("/admin/dashboard"); 
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
