import { HandleUserLogin } from "../middleware/UserHandle";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import Logo from '../assets/LogoMormediNegro.png'

import "../style/Login.css"


interface FormData {
    email: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [error, setError] = useState<string>('');

    const handleFormSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            if (!data.email) {
                throw new Error('Por favor, ingresa un correo electrónico y una contraseña.');
            }

            const res = await HandleUserLogin(data); // añadir la formdata como arg
            console.log(res.data.data)
            if (res.data.data.token) {
                console.log('Logged in!');
                navigate("/");
            }
        } catch (error) {
            console.log('Login failed.');
            setError('Login failed. Please check your credentials.');
        }
    }

    return (
        <section className="login">
            <div className="container">
                <img src={Logo} alt="logo mormedi" className="logo" />
                <p>making tomorrow <span style={{ fontWeight: 'bold' }}>tangible</span></p>
                <form className="login-form" onSubmit={handleSubmit(handleFormSubmit)}>
                    <input
                        className="email-input"
                        type="email"
                        autoComplete="on"
                        {...register("email", { required: true })}
                    />
                    <span className="placeholder">email</span>
                    {errors.email && <span>Por favor, ingresa un correo electrónico válido.</span>}
                    <input
                        className="password-input"
                        type="password"
                        autoComplete="on"
                        {...register("password", { required: true })}
                    />
                    <span className="placeholder">password</span>
                    {errors.password && <span>Por favor, ingresa una contraseña.</span>}
                    {error && <span>{error}</span>} {/* Muestra el error de inicio de sesión */}
                    <input className="login-button" type="submit" value="Login" />
                    <Link to={"/register"} className="bottom">
                        <p >you have not registered?</p>
                    </Link>
                </form>

            </div>
        </section>
    )
}

export default Login