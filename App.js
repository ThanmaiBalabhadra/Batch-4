import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [activeForm, setActiveForm] = useState('signIn');
  const [signInData, setSignInData] = useState({ username: '', password: '' });
  const [signUpData, setSignUpData] = useState({ username: '', email:
'', password: '', confirmPassword: '' });
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: '' });

  const showSignInForm = () => setActiveForm('signIn');
  const showSignUpForm = () => setActiveForm('signUp');
  const showForgotPasswordForm = () => setActiveForm('forgotPassword');

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleForgotPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData({ ...forgotPasswordData, [name]: value });
  };

  const signIn = () => {
    // Implement sign-in logic here (frontend only)
    console.log('Sign In button clicked');
  };

  const signUp = () => {
    // Implement sign-up logic here (frontend only)
    console.log('Sign Up button clicked');
  };

  const sendResetLink = () => {
    // Implement forgot password logic here (frontend only)
    console.log('Send Reset Link button clicked');
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'signIn':
        return (
          <form>
            <h2>Sign In</h2>
            <label htmlFor="signInUsername">Username:</label>
            <input type="text" id="signInUsername" name="username"
value={signInData.username} onChange={handleSignInChange} required />

            <label htmlFor="signInPassword">Password:</label>
            <input type="password" id="signInPassword" name="password"
value={signInData.password} onChange={handleSignInChange} required />

            <button type="button" onClick={signIn}>Sign In</button>
            <p>Don't have an account? <span onClick={showSignUpForm}
style={{ cursor: 'pointer', color: '#2196F3' }}>Sign Up</span></p>
            <p><span onClick={showForgotPasswordForm} style={{ cursor:
'pointer', color: '#2196F3' }}>Forgot Password?</span></p>
          </form>
        );

      case 'signUp':
        return (
          <form>
            <h2>Sign Up</h2>
            <label htmlFor="signUpUsername">Username:</label>
            <input type="text" id="signUpUsername" name="username"
value={signUpData.username} onChange={handleSignUpChange} required />

            <label htmlFor="signUpEmail">Email:</label>
            <input type="email" id="signUpEmail" name="email"
value={signUpData.email} onChange={handleSignUpChange} required />

            <label htmlFor="signUpPassword">Password:</label>
            <input type="password" id="signUpPassword" name="password"
value={signUpData.password} onChange={handleSignUpChange} required />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword"
name="confirmPassword" value={signUpData.confirmPassword}
onChange={handleSignUpChange} required />

            <button type="button" onClick={signUp}>Sign Up</button>
            <p>Already have an account? <span onClick={showSignInForm}
style={{ cursor: 'pointer', color: '#2196F3' }}>Sign In</span></p>
          </form>
        );

      case 'forgotPassword':
        return (
          <form>
            <h2>Forgot Password</h2>
            <label htmlFor="forgotEmail">Email:</label>
            <input type="email" id="forgotEmail" name="email"
value={forgotPasswordData.email} onChange={handleForgotPasswordChange}
required />

            <button type="button" onClick={sendResetLink}>Send Reset
Link</button>
            <p>Remembered your password? <span
onClick={showSignInForm} style={{ cursor: 'pointer', color: '#2196F3'
}}>Sign In</span></p>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center',
alignItems: 'center', height: '100vh' }}>
      {renderForm()}
    </div>
  );
};

export default App;
