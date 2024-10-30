import { useContext, useEffect, useState } from 'react';
import '../css/Login.css';
import { myContext } from '../components/AppLayout';
import { FaTwitterSquare, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
import { MdOutlineSecurity, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Login = () => {
  const context = useContext(myContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [option, setOption] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, [context]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="loginSection">
      <div className="loginBox">
        <div className="logo2">
          <img src="/logo1.png" alt="Logo" width="60px" />
          <h5 className="font-weight-bold">Login to Dashboard</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper password-wrapper">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
          </div>
          <div className="input-wrapper select-wrapper">
            <MdOutlineSecurity className="icon" />
            <select
              value={option}
              onChange={(e) => setOption(e.target.value)}
              required
            >
              <option value="" disabled>Select Option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Sign In</button>
        </form>
        <p className="forgot-password">Forgot Password?</p>
        <div className="social-login">
          <p>or</p>
          <button className="social-btn twitter">
            <FaTwitterSquare /> Continue with Twitter
          </button>
          <button className="social-btn facebook">
            <FaFacebook /> Continue with Facebook
          </button>
        </div>
        <div className="register-section">
          <hr className="divider"/>
          <Link to="/signup"><p className="register-text">Don’t have an account? <span className="register-link">Register here</span></p></Link>
        </div>
      </div>
    </section>
  );
};
