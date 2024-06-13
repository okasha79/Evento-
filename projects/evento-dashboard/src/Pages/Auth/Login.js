import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { setAuthUser } from "../../Core/Helper/storage";
import { BACKEND_DOMAIN } from "../../API/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    err: [], // Initialize as an empty array
  });

  const LoginFun = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true, err: [] });
    axios
      .post(`${BACKEND_DOMAIN}/api/auth/login`, {
        email: login.email,
        password: login.password,
      })
      .then((resp) => {
        setLogin({ ...login, loading: false, err: [] });
        setAuthUser(resp.data.data.user, resp.data.data.token);
        navigate("/home");
        window.location.reload();
      })
      .catch((errors) => {
        console.log(errors.response, 500);
        setLogin({
          ...login,
          loading: false,
          err: [errors.response?.data?.message] || [], // Handle undefined errors array
        });
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      {login.err.length > 0 &&
        login.err.map((error, index) => (
          <Alert
            key={index}
            variant="danger"
            className="p-2"
            style={{ color: "red" }}
          >
            {error}
          </Alert>
        ))}

      <Form onSubmit={LoginFun}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            required
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </Form.Group>

        <Button
          className="btn btn-dark w-100"
          variant="primary"
          type="submit"
          disabled={login.loading === true}
        >
          Login
        </Button>

        <Link to={`/signup`}>
          <Button
            className="btn btn-dark w-100"
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Login;
