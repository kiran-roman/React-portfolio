import './index.scss'
import { useState } from 'react';
import  axios from 'axios';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoggedIn) {
      localStorage.removeItem('isLoggedIn');
    }
    if (isLogin) {
      axios.post('http://localhost:3001/Log ', { uemail: email, upassword: password })
        .then((response) => {
          console.log('Login :', response.data);
          alert('Login Succesfull !');
          window.location.replace('/');
          localStorage.setItem('isLoggedIn', true);
        })
        .catch((error) => {
          console.error('Error login:', error);
          alert('wrong email or password');
        });


    }
    else {
      axios.post('http://localhost:3001/sign ', { uemail: email, upassword: password })
        .then((response) => {
          console.log('User created:', response.data);
          alert('User created!');
          
        })
        .catch((error) => {
          console.error('Error creating user:', error);
          alert('Error creating user');
        });
    }
  };

  return (
    <div className="login-page">
      <div className="auth-form">
        <h2>{isLogin ? "Login" : "Sign up"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">{isLoggedIn ? "Logout" : (isLogin ? "Login" : "Sign up")}</button>

        </form>
        <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}</button>
      </div>
    </div>
  );

}
export default Login