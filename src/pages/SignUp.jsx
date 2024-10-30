import { useContext, useEffect, useState } from 'react';
import { myContext } from '../components/AppLayout';
import { FaTwitterSquare, FaFacebook } from "react-icons/fa";
import '../css/SignUp.css';

const SignUp = () => {
  const context = useContext(myContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, [context]);

  return (
    <section className="signupSection">
      <div className="signupContainer">
        <div className="infoBox">
          <h1>BEST UX/UI FASHION ECOMMERCE DASHBOARD & ADMIN PANEL</h1>
          <p>
            Elit iusto dolore libero recusandae dolor dolores explicabo ullam cum facilis
            aperiam alias odio quam excepturi molestiae omnis inventore. Repudiandae
            officia placeat amet consectetur dicta dolorem quo.
          </p>
          <button className="homeButton">GO TO HOME</button>
        </div>
        <div className="formBox">
          <div className="logo">
            <img src="/logo1.png" alt="Logo" width="60px" />
            <h5>Register a new account</h5>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <div className="termsContainer">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label>I agree to all Terms & Conditions</label>
            </div>
            <button type="submit" className="signupButton">SIGN UP</button>
          </form>
          <p className="or">Or</p>
          <button className="socialButton twitter">
            <FaTwitterSquare /> Continue with Twitter
          </button>
          <button className="socialButton facebook">
            <FaFacebook /> Continue with Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
