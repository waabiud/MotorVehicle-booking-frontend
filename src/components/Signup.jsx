import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cleanMessage, signupUser } from '../redux/userSlice';
import '../style/login.css';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    admin: false,
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
              dispatch(signupUser(newUser));
              e.target.reset();
            }}
            className="formContainer"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              minLength={2}
              onChange={(e) => {
                if (e.target.value.length >= 2) {
                  setNewUser({ ...newUser, name: e.target.value });
                }
              }}
            />

            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />

            <button type="submit" className="loginBtn">
              Sign Up
            </button>

            <div className="separator">or</div>

            <button
              type="button"
              className="signupBtn"
              onClick={() => {
                dispatch(cleanMessage());
                navigate('/login');
              }}
            >
              Back to Login
            </button>

            <div className="infoMessage">
              {information && Array.isArray(information)
                ? information.map((sms) => (
                  <p key={Math.random()} className="error">{sms}</p>
                ))
                : information && <p>{information}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
