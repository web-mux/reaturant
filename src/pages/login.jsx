import React, { useState } from "react";
import "../styles/login.css";
import api from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Google from "../media/google.png";
import Back from "../media/login-back.png";
import Food from "../media/login-food.png";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      toast.error("Email va parolni kiriting");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/login.php", {
        email: form.email,
        password: form.password,
      });

      console.log("LOGIN RESPONSE:", res.data);

      if (res.data.status === true) {
        toast.success(res.data.message);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setTimeout(() => {
          navigate("/home"); // 🔥 TO‘G‘RI REDIRECT
        }, 1200);
      } else {
        toast.error(res.data.message);
      }

    } catch (err) {
      console.error(err);
      toast.error("Server bilan aloqa yo‘q ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="text-part">
        <header>Login</header>

    <p className="sign-up-link">
  Don't have an account? <Link to="/auth">Sign up</Link>
</p>

        <div className="inputs">
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

        <div className="remember">
          <div className="check-box">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
        <Link to="/forgot-password">Forget Password ?</Link>
        </div>

        <div className="btns">
          <button type="button" onClick={handleLogin} disabled={loading}>
            {loading ? "Loading..." : "Log in"}
          </button>

          <button className="google-btn">
            <img src={Google} alt="" />
            Log in with Google
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

export default Login;
