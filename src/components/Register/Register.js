import React from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { registerNewUser } from "../../services/userServices";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidRePassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
  let history = useHistory();

  const isValidateInputs = () => {
    if (!email) {
      toast.error("Email is required!");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }
    let regexEmail = /\S+@\S+\.\S+/;

    if (!regexEmail.test(email)) {
      toast.error("Email is not valid!");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }
    if (!phone) {
      toast.error("Phone number is required!");
      setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
      return false;
    }
    // let regexPhone = /^(\+\d{1,2}\s)?\d{9,12}$/;

    // if (!regexPhone.test(phone)) {
    //   toast.error("Phone number is not valid!");
    //   return false;
    // }
    if (!password) {
      toast.error("Password is required!");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }

    if (rePassword !== password) {
      toast.error("Password is not match!");
      setObjCheckInput({ ...defaultValidInput, isValidRePassword: false });
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    let check = isValidateInputs();

    if (check === true) {
      let response = await registerNewUser(email, phone, username, password);
      console.log(">>> check response: ", response.data);
      let serverData = response.data;
      if (+serverData.EC === 0) {
        toast.success(serverData.EM);
        history.push("/login");
      } else {
        toast.error(serverData.EM);
      }
    }
  };

  const handleLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/test-api").then((data) => {
      console.log(">>> check data:", data);
    });
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
                className={
                  objCheckInput.isValidEmail
                    ? "input form-control"
                    : "input form-control is-invalid"
                }
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
                className={
                  objCheckInput.isValidPhone
                    ? "input form-control"
                    : "input form-control is-invalid"
                }
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
                className={
                  objCheckInput.isValidPassword
                    ? "input form-control"
                    : "input form-control is-invalid"
                }
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
                className={
                  objCheckInput.isValidRePassword
                    ? "input form-control"
                    : "input form-control is-invalid"
                }
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
