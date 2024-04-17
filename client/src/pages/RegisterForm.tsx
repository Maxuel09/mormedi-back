import { useForm } from "react-hook-form";
import Logo from '../assets/LogoMormediNegro.png'
import { DevTool } from "@hookform/devtools";
import axios from "axios";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

type FormValues = {
  name: string  
  email: string;
  password: string;
};
const LoginForm = () => {
=======
import {useNavigate } from "react-router-dom";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(5, "Must be a least 5 characters")
})

type RegisterSchema = z.infer<typeof registerSchema>

const RegisterForm = () => {
>>>>>>> 597e925f7678aca6105300c92edfa820eb46889e

  const navigate = useNavigate()

  const {
<<<<<<< HEAD
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    navigate("/")
    
  };

  return (
    <div className="container-register">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <img src={Logo} alt="logo mormedi" className="logo"/>
        <p className="top">making tomorrow more tangible</p> 
          <label htmlFor="first-name">Name</label>
             <input type="text"  id="first-name" 
           {...register("name", { required: "First name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <label htmlFor="last-name">Last name</label>
             <input type="text"  id="last-name" 
           {...register("lastname", { required: "Last name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
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
         <button type="submit">Register</button>
=======
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

 const onSubmit = async (data: RegisterSchema) => {
    const response = await axios.post("MSQ_URL/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
    console.log(response);
    reset();
    navigate('/')
  }

  return (
    <div className="container-register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Logo} alt="logo mormedi" className="logo"/>
        <p className="top">making tomorrow more tangible</p> 
          <label htmlFor="firstName">First name</label>
          <input 
          {
            ...register("firstName",
           )}
          type="text"  
          id="firstName" 
          />
          {errors.firstName && (
           <p className="error">{`${errors.firstName.message}`}</p>
          )}
          <label htmlFor="lastName">Last name</label>
          <input 
          {
            ...register("lastName", 
           )}
              type="text"  
              id="lastName" 
          />
          {errors.lastName && (
          <p className="error">{`${errors.lastName.message}`}</p>
          )}
          <label htmlFor="email">Email</label>
          <input 
          {
            ...register("email", 
           )}
          type="text"  
          id="email" 
          />
          {errors.email && (
            <p className="error">{`${errors.email.message}`}</p>
          )}
          <label htmlFor="password">Password</label>
          <input 
          {
            ...register("password", 
           )}
          type="text" 
          id="password"
          />
           {errors.password && (
            <p className="error">{`${errors.password.message}`}</p>
          )}
         <button 
         type="submit"
         disabled={isSubmitting}>
          Register
         </button>
>>>>>>> 597e925f7678aca6105300c92edfa820eb46889e
      </form>
      <DevTool control={control} />
    </div>
  );
};

<<<<<<< HEAD
export default LoginForm
=======

export default RegisterForm
>>>>>>> 597e925f7678aca6105300c92edfa820eb46889e
