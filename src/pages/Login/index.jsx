import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';

const Index = (props) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = useCallback((e) => {
    setFormValues({
      email: formValues.email,
      password: formValues.password,
      [e.target.name]: e.target.value,
    });
  }, [formValues]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    props.history.push('/')
  }, [formValues]);

  return (
    <div id="login-page-root" className="container">
      <div className="form-wrapper">
        <h1>My fkng app</h1>

        <form className="login-form d-flex flex-column" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email-input" className="form-label">
              Email
            </label>
            <input id="email-input" value={formValues.email} name="email" className="form-control" type="email" onChange={handleChange} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="pwd-input">
              Password
            </label>
            <input id="pwd-input" value={formValues.password} name="password" className="form-control" type="password" onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary mt-3">Login</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Index);
