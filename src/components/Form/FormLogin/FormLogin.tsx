import React from 'react'
import styles from "./FormLogin.module.css";
export const FormLogin = () => {
  return (
    <div className={styles["container-form"]}>
        <h2>Login</h2>

        <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" />
        </div>
    </div>
  )
}
