import "./App.scss";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Nav from "./components/Navigation/Nav.js";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <Nav /> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/news">news</Route>
          <Route path="/about">about</Route>
          <Route path="/contact">contact</Route>
          <Route path="/" exact>
            home
          </Route>
          <Route path="*">404 not found</Route>
        </Switch>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
