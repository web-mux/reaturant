import { useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

function ResetPassword() {
  const [form, setForm] = useState({
    email: "",
    code: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const reset = async () => {
    const res = await api.post("/reset-password.php", form);

    if (res.data.status) {
      toast.success(res.data.message);
      setTimeout(()=>window.location.href="/login",1000);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="code" placeholder="Code" onChange={handleChange} />
      <input name="password" placeholder="New password" onChange={handleChange} />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ResetPassword;
