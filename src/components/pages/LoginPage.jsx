import React from 'react';
import axios from 'axios';

const submitHandler = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/login', Object.fromEntries(new FormData(e.target)));
    if (response.status === 200) window.location = '/';
  } catch (error) {
    alert(error.response.data.message);
  }
};

export default function LoginPage() {
  return (
    <form onSubmit={submitHandler}>
      <div style={{ marginLeft: '44%', marginTop: '15%' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">

            <input name="email" type="email" placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <input name="password" type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>

        <button style={{ marginLeft: '6%', width: '100px' }} type="submit" className="btn btn-primary">Вход</button>
      </div>
    </form>
  );
}
