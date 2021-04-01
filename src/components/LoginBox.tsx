import React, { SyntheticEvent, useState } from "react";
import styles from "../styles/components/LoginBox.module.css";
import { useRouter } from 'next/dist/client/router';
import api from "../services/api";
import { login } from "../services/auth";
import { ToastContainer, toast } from 'react-toastify';



export function LoginBox() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await api.post('/users/login', {
      email,
      password
    }).then(function (res) {
      if (login(res.data.token)) {
        router.push("/home");
      }
    }).catch(function (error) {
      console.log(error)
    })
    if (email === '') {
      toast.error('❗ Ops.. Email está faltando', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (password === '') {
      toast.error('❗ Ops.. Senha faltando', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }


  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ToastContainer />
        <img src="logo.svg" alt="" />
        <form onSubmit={submit}>
          <div className={styles.inputField}>
            <label>E-mail</label>
            <input type="text" name="email" id="username" placeholder="E-mail"
              onChange={e => setEmail(e.target.value)}
            />
            <div className={styles.underline}></div>
          </div>
          <div className={styles.inputField}>
            <label>Senha</label>
            <input type="password" name="password" id="password" placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
            />
            <div className={styles.underline}></div>
          </div>
          <button>Entrar</button>
        </form>
      </div>
    </section>

  );
}
