import React from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userServices";

const Login = (props) => {
  let defaultObjCheckInput = {
    isValidValueLogin: true,
    isValidPassword: true,
  };
  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const [objCheckInput, setObjCheckInput] = useState(defaultObjCheckInput);

  let history = useHistory();

  const handleCreateNewAccount = () => {
    history.push("/register");
  };

  const isValidLogin = () => {
    if (!valueLogin) {
      setObjCheckInput({ ...objCheckInput, isValidValueLogin: false });
      toast.error("Email or phone number is required!");
      return false;
    }

    if (!password) {
      setObjCheckInput({ ...objCheckInput, isValidPassword: false });
      toast.error("Password is required!");
      return false;
    }
    return true;
  };
  const handleLogin = async () => {
    let loginCheck = isValidLogin();
    if (loginCheck) {
      let response = await loginUser(valueLogin, password);
      if (response && response.data && +response.data.EC === 0) {
        //success
        let data = {
          isAuthenticated: true,
          token: "fake token",
        };
        sessionStorage.setItem("account", JSON.stringify(data));
        toast.success(response.data.EM);
        history.push("/users");
        window.location.reload();
      } else if (response && response.data && +response.data.EC !== 0) {
        //fail
        toast.error(response.data.EM);
      }
    }
  };

  const handlePressEnter = (event) => {
    if (event.code === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
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
            <input
              type="text"
              className={
                objCheckInput.isValidValueLogin
                  ? "input form-control"
                  : "input form-control is-invalid"
              }
              value={valueLogin}
              onChange={(event) => {
                setValueLogin(event.target.value);
              }}
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              className={
                objCheckInput.isValidPassword
                  ? "input form-control"
                  : "input form-control is-invalid"
              }
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onKeyDown={(event) => {
                handlePressEnter(event);
              }}
              placeholder="Password"
            />
            <button
              className="login btn btn-primary mt-2 fs-5 py-2 fw-bold"
              onClick={() => {
                handleLogin();
              }}
            >
              Log in
            </button>
            <span className="text-center">
              <a className="forgot-password" href="#">
                Fogotten password?
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button
                className="create btn py-2 fw-bold"
                onClick={() => {
                  handleCreateNewAccount();
                }}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
