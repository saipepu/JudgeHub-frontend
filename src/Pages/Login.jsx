import React, { useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import login from "../api/Login";
import { Oval } from "react-loader-spinner";

const Login = () => {
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const navigation = useNavigate();

    let initialState = {
        login_id: "",
        name: "",
        password: "",
    };
    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async (values) => {
            console.log("Logging In -> ", values);
            setLoading(true);
            setTimeout(() => {
                login(values, setResponse);
            }, 500);
        },
    });

    // console.log(response)

    useEffect(() => {
        if (response?.success) {
            console.log("Login Success", response.message.judge._id);
            setIsError(false);
            navigation(`/scoringPage/${response.message.judge._id}`);
        } else {
            setIsError(true);
        }
        setLoading(false);
    }, [response, navigation]);

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
                        <form
                            onSubmit={formik.handleSubmit}
                            className={styles.form}
                        >
                            <legend>Login</legend>
                            <label htmlFor="login_id">ID</label>
                            <input
                                className={styles.input}
                                id="login_in"
                                name="login_id"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.login_id}
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                autoComplete="current-plassword"
                                className={styles.input}
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />

                            <label htmlFor="name">Judge Name</label>
                            <input
                                className={styles.input}
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />

                            <button
                                className={styles.submit_button}
                                type="submit"
                            >
                                {loading ? (
                                    <Oval
                                        width="22"
                                        height="22"
                                        strokeWidth={5}
                                        strokeWidthSecondary={8}
                                        color="red"
                                        secondaryColor="red"
                                    />
                                ) : (
                                    <p>Login</p>
                                )}
                            </button>
                            {isError ? (
                                <p className={styles.error}>
                                    {response?.error}
                                </p>
                            ) : (
                                ""
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
