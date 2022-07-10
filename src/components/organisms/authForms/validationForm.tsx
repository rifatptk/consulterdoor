import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthService } from '../../../services';

function ValidationForm() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const { state }: any = useLocation();

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      await AuthService.UserValidation(state.email, code);
      await AuthService.UserSignIn(state.email, state.password);
      navigate('/');
    } catch (error) {
      // console.log('errr', error);
    }
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Email Validation</h3>
          <div className="form-group mt-3">
            <label>Validation Code</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="e.g 123456"
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Validate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { ValidationForm };
