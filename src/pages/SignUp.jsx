import { useContext, useEffect, useState } from 'react';
import { myContext } from '../components/AppLayout';
import { FaTwitterSquare, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
import { MdOutlineSecurity, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link } from 'react-router-dom';

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, [context]);

  return (
    <section className="signupSection">
      <div className="signupContainer">
        <div className="infoBox">
          <h1>Chetan's eCommerce Dashboard & ADMIN PANEL</h1>
          <p>
            Welcome to your all-in-one dashboard, designed to provide a streamlined overview 
            of your eCommerce operations. Here, you can track real-time sales performance, manage your inventory,
            monitor customer engagement, and analyze key metrics to drive business growth..
          </p>
          <Link to="/"><button className="homeButton">GO TO HOME</button></Link>
        </div>
        <div className="formBox">
          <div className="logo3">
            <img src="/logo1.png" alt="Logo" width="60px" />
            <h5>Register a new account</h5>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputWithIcon">
              <FaEnvelope className="inputIcon" />
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputWithIcon">
              <FaEnvelope className="inputIcon" />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputWithIcon">
              <FaLock className="inputIcon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div onClick={togglePasswordVisibility} className="passwordToggleIcon">
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </div>
            </div>
            <div className="inputWithIcon">
              <FaLock className="inputIcon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <div onClick={toggleConfirmPasswordVisibility} className="passwordToggleIcon">
                {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </div>
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
