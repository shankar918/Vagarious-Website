import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (data.username === "admin" && data.password === "1234admin") {
      alert("Login Successful ✅");
      navigate("/admin"); // 👈 Redirect to Admin Dashboard
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="container-fluid bg-light p-5 mt-5 pt-5 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="col-lg-6 shadow p-5 mx-auto bg-white rounded mt-5 pt-5" style={{width:'550px'}}>
        <h3 className="text-center mb-4 text-black">Admin Login</h3>
        <form onSubmit={submitHandler} style={{width:'470px'}} className="p-3 ">
           <label className="text-black">UserName:</label>
          <input
            type="text"
            name="username"
            onChange={changeData}
            placeholder="Username"
            className="form-control mb-3"
          />
          <label className="text-black">password:</label>
          <input
            type="password"
            name="password"
            onChange={changeData}
            placeholder="Password"
            className="form-control mb-3"
          />
          <input
            type="submit"
            value="Login"
            className="form-control btn btn-success"
          />
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
