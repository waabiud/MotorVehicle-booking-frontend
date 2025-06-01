import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cleanMessage, loginUser } from '../redux/userSlice';
import '../style/login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { information } = useSelector((state) => state.user);

  return (
    <section className="loginContainer">
      <div className="loginBox">
        <div className="loginLeft">
          <h1 className="appLogo">MotoConnect</h1>
          <p className="appTagline">One ride. One community.</p>
        </div>
        <div className="loginRight">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(loginUser(user));
              e.target.reset();
            }}
            className="formContainer"
          >
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button type="submit" className="loginBtn">Log In</button>

            <div className="separator">or</div>

            <button
              type="button"
              className="signupBtn"
              onClick={() => {
                dispatch(cleanMessage());
                navigate('/signup');
              }}
            >
              Sign Up
            </button>

            <div className="infoMessage">
              {information && Array.isArray(information)
                ? information.map((msg) => (
                    <p key={msg} className="error">{msg}</p>
                  ))
                : information && <p className="error">{information}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
