import { useContext, useEffect, useState } from 'react';
import '../css/Login.css';
import { myContext } from '../components/AppLayout';

export const Login = () => {
  const context = useContext(myContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [option, setOption] = useState('');

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, [context]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <section className="loginSection">
      <div className="loginBox">
        <div className="logo">
          <img src="/logo1.png" alt="Logo" width="60px" />
          <h5 className="font-weight-bold">Login to Dashboard</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            required
          >
            <option value="" disabled>Select Option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <button type="submit">Sign In</button>
        </form>
        <p className="forgot-password">Forgot Password</p>
        <div className="social-login">
          <p>or</p>
          <button className="social-btn twitter">Continue with Twitter</button>
          <button className="social-btn facebook">Continue with Facebook</button>
        </div>
      </div>
    </section>
  );
};
