import { useState } from "react";
import "../styles/login.css"; // 🔴 LOGIN CSS NI ISHLATAMIZ
import api from "../api/axios";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

import Back from "../media/login-back.png";
import Food from "../media/login-food.png";

function ForgotReset() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    code: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendCode = async () => {
    if (!form.email) {
      toast.error("Email kiriting");
      return;
    }

    try {
      setLoading(true);
 const res = await api.post(
  "https://695a18c86c326.clouduz.ru/api/reset-password.php",
  {
    email: form.email,
    code: form.code,
    password: form.password,
  }
);


      if (!res.data.status) {
        toast.error(res.data.message);
        return;
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: form.email,
          code: res.data.code,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Kod emailingizga yuborildi");
      setStep(2);
    } catch {
      toast.error("Server bilan aloqa yo‘q ❌");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    if (!form.code || !form.password) {
      toast.error("Kod va yangi parolni kiriting");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/reset-password.php", {
        email: form.email,
        code: form.code,
        password: form.password,
      });

      if (!res.data.status) {
        toast.error(res.data.message);
        return;
      }

      toast.success("Parol yangilandi. Login sahifaga o‘tilmoqda...");
      setTimeout(() => (window.location.href = "/login"), 900);
    } catch {
      toast.error("Server bilan aloqa yo‘q ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="text-part">
        <header>
          {step === 1 ? "Forgot Password" : "Reset Password"}
        </header>

        {step === 1 && (
          <>
            <p className="sign-up-link">
              Email manzilingizni kiriting
            </p>

            <div className="inputs">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>

            <div className="btns">
              <button onClick={sendCode} disabled={loading}>
                {loading ? "Sending..." : "Send Code"}
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="sign-up-link">
              Emailga kelgan kod va yangi parolni kiriting
            </p>

            <div className="inputs">
              <input
                type="text"
                name="code"
                placeholder="Verification code"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="New password"
                onChange={handleChange}
              />
            </div>

            <div className="btns">
              <button onClick={resetPassword} disabled={loading}>
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </div>
          </>
        )}
      </div>

      <div className="pic-part">
        <img className="back" src={Back} alt="" />
        <img className="food" src={Food} alt="" />
      </div>
    </div>
  );
}

export default ForgotReset;
