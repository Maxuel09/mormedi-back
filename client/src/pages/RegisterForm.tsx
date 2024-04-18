import { useForm } from "react-hook-form";
import Logo from '../assets/LogoMormediNegro.png'
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import {registerSchema,TRegisterSchema } from "../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";



const RegisterForm = () => {

  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

 const onSubmit = async (data: TRegisterSchema) => {
    const response = await axios.post("http://localhost:4000/auth/register", {
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
      </form>
      <DevTool control={control} />
    </div>
  );
};


export default RegisterForm
