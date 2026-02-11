import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function AuthCard() {
  const [activeTab, setActiveTab] = useState('login');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Login state
  const [loginUserType, setLoginUserType] = useState('user');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register state
  const [registerUserType, setRegisterUserType] = useState(searchParams.get('type') || 'user');
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    organization: ''
  });
  const [registerErrors, setRegisterErrors] = useState({});

  useEffect(() => {
    setRegisterUserType(searchParams.get('type') || 'user');
  }, [searchParams]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { userType: loginUserType, email: loginEmail, password: loginPassword });
    // For now, just navigate to dashboard
    navigate('/dashboard');
  };

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (registerErrors[name]) {
      setRegisterErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateRegisterForm = () => {
    const newErrors = {};

    if (!registerFormData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!registerFormData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(registerFormData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!registerFormData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!registerFormData.password) {
      newErrors.password = 'Password is required';
    } else if (registerFormData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (registerFormData.password !== registerFormData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (registerUserType === 'admin' && !registerFormData.organization.trim()) {
      newErrors.organization = 'Organization is required for admin accounts';
    }

    setRegisterErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validateRegisterForm()) {
      // Handle registration logic here
      console.log('Registration attempt:', { ...registerFormData, userType: registerUserType });
      // For now, just navigate to login
      navigate('/dashboard');
    }
  };

  return (
    <div className="auth-page">
      <button className="back-home-btn" onClick={() => navigate('/')}>
        Go Back to Home
      </button>
      <div className="auth-container">
        <div className="auth-card">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>

          {activeTab === 'login' && (
            <div className="tab-content">
              <h2>Login</h2>
              <div className="user-type-selector">
                <button
                  className={`type-btn ${loginUserType === 'user' ? 'active' : ''}`}
                  onClick={() => setLoginUserType('user')}
                >
                  User Login
                </button>
                <button
                  className={`type-btn ${loginUserType === 'admin' ? 'active' : ''}`}
                  onClick={() => setLoginUserType('admin')}
                >
                  Admin Login
                </button>
              </div>
              <form onSubmit={handleLoginSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="login-email">Email</label>
                  <input
                    type="email"
                    id="login-email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="login-password">Password</label>
                  <input
                    type="password"
                    id="login-password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="auth-btn">Login</button>
              </form>
            </div>
          )}

          {activeTab === 'register' && (
            <div className="tab-content">
              <h2>Register as {registerUserType === 'admin' ? 'Admin' : 'User'}</h2>

              <div className="user-type-selector">
                <button
                  className={`type-btn ${registerUserType === 'user' ? 'active' : ''}`}
                  onClick={() => setRegisterUserType('user')}
                >
                  User Registration
                </button>
                <button
                  className={`type-btn ${registerUserType === 'admin' ? 'active' : ''}`}
                  onClick={() => setRegisterUserType('admin')}
                >
                  Admin Registration
                </button>
              </div>

              <form onSubmit={handleRegisterSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="register-name">Full Name</label>
                  <input
                    type="text"
                    id="register-name"
                    name="name"
                    value={registerFormData.name}
                    onChange={handleRegisterInputChange}
                    className={registerErrors.name ? 'error' : ''}
                  />
                  {registerErrors.name && <span className="error-message">{registerErrors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="register-email">Email</label>
                  <input
                    type="email"
                    id="register-email"
                    name="email"
                    value={registerFormData.email}
                    onChange={handleRegisterInputChange}
                    className={registerErrors.email ? 'error' : ''}
                  />
                  {registerErrors.email && <span className="error-message">{registerErrors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="register-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="register-phone"
                    name="phone"
                    value={registerFormData.phone}
                    onChange={handleRegisterInputChange}
                    className={registerErrors.phone ? 'error' : ''}
                  />
                  {registerErrors.phone && <span className="error-message">{registerErrors.phone}</span>}
                </div>

                {registerUserType === 'admin' && (
                  <div className="form-group">
                    <label htmlFor="register-organization">Organization</label>
                    <input
                      type="text"
                      id="register-organization"
                      name="organization"
                      value={registerFormData.organization}
                      onChange={handleRegisterInputChange}
                      placeholder="Waste Management Company"
                      className={registerErrors.organization ? 'error' : ''}
                    />
                    {registerErrors.organization && <span className="error-message">{registerErrors.organization}</span>}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="register-password">Password</label>
                  <input
                    type="password"
                    id="register-password"
                    name="password"
                    value={registerFormData.password}
                    onChange={handleRegisterInputChange}
                    className={registerErrors.password ? 'error' : ''}
                  />
                  {registerErrors.password && <span className="error-message">{registerErrors.password}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="register-confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="register-confirmPassword"
                    name="confirmPassword"
                    value={registerFormData.confirmPassword}
                    onChange={handleRegisterInputChange}
                    className={registerErrors.confirmPassword ? 'error' : ''}
                  />
                  {registerErrors.confirmPassword && <span className="error-message">{registerErrors.confirmPassword}</span>}
                </div>

                <button type="submit" className="auth-btn">
                  Register as {registerUserType === 'admin' ? 'Admin' : 'User'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthCard;
