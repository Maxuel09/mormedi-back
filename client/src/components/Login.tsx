import { HandleUserLogin } from "../middleware/UserHandle"
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleForm = async (loginUser:string) =>{
        try {
            const res = await HandleUserLogin(loginUser)
            if (res.data.sesiondata.token) {
                //codeamos aquí✍
                console.log('Logged in!')
                navigate("/home");
            }

        } catch (error) {
            console.log('Login failed.');
        }
    }
    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(handleForm)}>
                <input
                    type="email"
                    autoComplete="on"
                    placeholder="Email"
                    {...register("username", { required: true })}
                />
                <input
                    type="password"
                    autoComplete="on"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                <input type="submit" value="Login" />
            </form>
       </section>
    )
}

export default Login