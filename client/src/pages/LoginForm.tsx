import { useForm } from "react-hook-form";
import Logo from '../assets/LogoMormediNegro.png'
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { Link} from "react-router-dom";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

type LoginSchema = z.infer<typeof loginSchema>

const LoginForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
 
  const onSubmit = async (data: LoginSchema) => {
    const response = await axios.post("https://your-api-endpoint.com/login", {
      email: data.email,
      password: data.password,
    });
    console.log(response);
    reset();
  };
  
  return (
    <div className="container-login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Logo} alt="logo mormedi" className="logo"/>
        <p className="top">making tomorrow more tangibles</p> 
          <label htmlFor="email">Email</label>
          <input 
          {
           ...register("email" 
            )}
          type="email"  
          id="email" 
          />
          {errors.email && (
            <p className="errorEmail">{`${errors.email.message}`}</p>
          )}
          <label htmlFor="password">Password</label>
          <input
          {
            ...register("password"
          )}
          type="password" 
          id="password"
          />
           {errors.password && (
            <p className="errorPassword">{`${errors.password.message}`}</p>
          )}
         <button 
         type="submit"
         disabled={isSubmitting}
         >
          Login
          </button>
          <Link to={"/register"}className="bottom">
              <p >you have not registered?</p> 
          </Link>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default LoginForm
