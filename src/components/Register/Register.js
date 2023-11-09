import React from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Register = (props) => {
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [rePassword, setRePassword] = useState("");
  let history = useHistory();

  const handleRegister = () => {
    toast.success("Wow so easy !");
    let userData = { email, phone, username, password };
  };

  const handleLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    // axios.get("http://localhost:8080/api/test-api").then((data) => {
    //   console.log(">>> check data:", data);
    // });
  }, []);
  return (
    <div className="register-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">Hoi Dan IT</div>
            <div className="details">
              Hoi Dan IT helps you connect and share with the people in your
              life.
            </div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column py-3 gap-2">
            <div className="d-sm-none brand">Hoi dan IT</div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="input form-control"
                placeholder="Email address"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Phone number:</label>
              <input
                type="text"
                className="input form-control"
                placeholder="Phone number"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="input form-control"
                placeholder="Username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="input form-control"
                placeholder="New password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Re-enter password:</label>
              <input
                type="password"
                className="input form-control"
                placeholder="Re-enter password"
                onChange={(event) => {
                  setRePassword(event.target.value);
                }}
              />
            </div>
            <button
              className="login btn btn-primary mt-2 fs-5 py-2 fw-bold"
              onClick={() => {
                handleRegister();
              }}
            >
              Register
            </button>
            <hr />
            <div className="text-center">
              <button
                className="create btn py-2 fw-bold"
                onClick={() => {
                  handleLogin();
                }}
              >
                Already have an account? Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
