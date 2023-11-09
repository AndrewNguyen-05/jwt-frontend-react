import React from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = (props) => {
  let history = useHistory();

  const handleCreateNewAccount = () => {
    history.push("/register");
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
              className="input form-control"
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              className="input form-control"
              placeholder="Password"
            />
            <button className="login btn btn-primary mt-2 fs-5 py-2 fw-bold">
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
