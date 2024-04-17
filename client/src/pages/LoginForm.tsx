import { useForm } from "react-hook-form";
import Logo from '../assets/LogoMormediNegro.png'
import { DevTool } from "@hookform/devtools";
import axios from "axios";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const onSubmit =  async (data: FormValues) => {
  //   //console.log(data); // post to back endpoint
  //  axios.post("http://localhost:4000/auth", data) 
  // };

  const onSubmit = async (data:FormValues) => {
    try {
        const response = await axios.post("http://localhost:4000/auth", data);
        console.log("Post created:", response.data);
    } catch (error) {
        console.error("Error creating post:", error);
    }
};







  return (
    <div className="container-login">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <img src={Logo} alt="logo mormedi" className="logo"/>
        <p className="top">making tomorrow more tangible</p> 
          <label htmlFor="email">Email</label>
             <input type="text"  id="email" 
           {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <label htmlFor="password">Password</label>
          <input type="text" id="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
         <button type="submit">Login</button>
=======
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
            <p className="error">{`${errors.email.message}`}</p>
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
            <p className="error">{`${errors.password.message}`}</p>
          )}
         <button 
         type="submit"
         disabled={isSubmitting}
         >
          Login
          </button>
>>>>>>> 597e925f7678aca6105300c92edfa820eb46889e
          <Link to={"/register"}className="bottom">
              <p >you have not registered?</p> 
          </Link>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default LoginForm
