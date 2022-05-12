import Classes from "../style/Login.module.css";
import FormInput from "../component/FormInput";
import { useEffect, useState } from "react";
import {logHandel} from '../app/CartSlice'
import { useDispatch } from "react-redux";

export default function Login() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch()


  const formHandler = (e) => {
    e.preventDefault();

    var re = /\S+@\S+\.\S+/;
    let errorObj = {};

    if (!re.test(form.email || form.email.length === 0)) {
      errorObj.email = "Set Valid Gmail";
    }
    if (form.password.length < 6) {
      errorObj.password = "Set Valid Gmail";
    }
    if (form.name.length === 0) {
      setErr({ ...err });
      errorObj.name = "This Field is REQUIRED";
    }
    setErr(errorObj);
  };

  useEffect(() => {
    if (Object.keys(err).length === 0) {
      dispatch(logHandel())
    }
  }, [err]);

  return (
    <div className={`${Classes.loginPage}`}>
  
      <div className={`${Classes.loginSection}`}>
        <h1 className="text-center">Login Page</h1>
        <form onSubmit={formHandler}>
          <FormInput
            placeholder="Enter Name"
            value={form.name}
            errors={err.name}
            setValue={(e) => setForm({ ...form, name: e.target.value })}
          />
          <FormInput
            errors={err.email}
            placeholder="Enter Email"
            value={form.email}
            setValue={(e) => setForm({ ...form, email: e.target.value })}
          />
          <FormInput
            type="Password"
            errors={err.password}
            placeholder="Enter Password"
            value={form.password}
            setValue={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit" className="btn">
            submit
          </button>
          <br/>
          <div className="text-center">This is only login page just for validation</div>
        </form>
      </div>
    </div>
  );
}
