import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handlSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-form-container">
        <h2>Register</h2>
      <form className="register-form" onSubmit={handlSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} name= 'name' id = 'name' placeholder="full Name" onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmaol.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="***********"
          id="password"
          name="password"
        />
        <button type="submit">Log in</button>
      </form>
       <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
};
