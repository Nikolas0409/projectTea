/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';

export default function SignupPage() {
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signup', Object.fromEntries(new FormData(e.target)));
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div style={{ marginLeft: '46%', marginTop: '15%' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Регистрация</button>
      </div>
    </form>
  );
}
