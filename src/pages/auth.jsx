import React, { useState } from "react";
import "../styles/auth.css";
import api from "../api/axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import Google from "../media/google.png";
import Back from "../media/login-back.png";
import Food from "../media/login-food.png";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleRegister = async () => {
  try {
    setLoading(true);

const res = await api.post(
  "https://695a18c86c326.clouduz.ru/api/register.php",
  {
    name: form.name,
    email: form.email,
    password: form.password,
  }
);


    console.log("RESPONSE:", res.data);

    if (res.data.status) {
      toast.success(res.data.message);
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } else {
      toast.error(res.data.message);
    }

  } catch (err) {
    console.error("FINAL ERROR:", err);
    toast.error("Server bilan aloqa yo‘q ❌");
  } finally {
    setLoading(false);
  }
};
  

  return (
    <div className="login-page">
      <div className="text-part">
        <header>Sign up</header>

<p className="sign-up-link">
  Already have an account? <Link to="/login">Log in</Link>
</p>

        <div className="inputs">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className="btns">
  <button type="button" onClick={handleRegister} disabled={loading}>
  {loading ? "Loading..." : "Sign up"}
</button>


          <button className="google-btn">
            <img src={Google} alt="" />
            Sign up with Google
          </button>
        </div>
      </div>

      <div className="pic-part">
        <img className="back" src={Back} alt="" />
        <img className="food" src={Food} alt="" />
      </div>
    </div>
  );
}

export default Register;
