import React from 'react'
import styles from '../styles/login.module.css'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigation = useNavigate();

  let initialState = {
    id: "",
    password: "",
  }
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async(values) => {
      console.log('submit');
      console.log(values);
      navigation('/scoringPage')
    }
  })

  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.title_ct}>
          <div className={styles.title}>
            DDI Investor Pitching
          </div>
          <div className={styles.sub_title}>
            Unleashing Innovation
          </div>
        </div>
        {/* RIGHT */}
        <div className={styles.form_ct}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <legend>Login</legend>
            <label htmlFor="id">Id <span>{`(or username)`}</span></label>
            <input className={styles.input} id="id" name="id" type="text" 
            onChange={formik.handleChange} value={formik.values.id} />

            <label htmlFor="password">Password</label>
            <input className={styles.input} id="password" name="password" type="password"
            onChange={formik.handleChange} value={formik.values.password} />

            <button className={styles.submit_button} type="submit">
              <p>Login</p>
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login