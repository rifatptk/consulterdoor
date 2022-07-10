import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../../../services';

function SignUpForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      await AuthService.UserSignUp(email, password, firstName, lastname);
      navigate('/auth/validate', {
        state: { email, password },
      });
    } catch (error) {
      // console.log('errrror', error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{' '}
            <span className="link-primary">
              <Link to="/auth/login">Sign In</Link>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              id="fname"
              name="fname"
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              id="lname"
              name="lame"
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export { SignUpForm };
