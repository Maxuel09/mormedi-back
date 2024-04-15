import { useForm } from "react-hook-form";
import Logo from '../assets/LogoMormediNegro.png'
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {z} from "zod"
import type { FieldValues } from "react-hook-form";
import { resolve } from "path";


const LoginForm = () => {

  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues
  } = useForm();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    reset();
    // navigate("/");
  };

  return (
    <div className="container-register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Logo} alt="logo mormedi" className="logo"/>
        <p className="top">making tomorrow more tangible</p> 
          <label htmlFor="firstName">First name</label>
          <input 
          {
            ...register("firstName",
            { required: "First name is required",
            })}
          type="text"  
          id="firstName" 
          />
          {errors.firstName && (
           <p className="errorEmail">{`${errors.firstName.message}`}</p>
          )}
          <label htmlFor="lastName">Last name</label>
          <input 
          {
            ...register("lastName", 
             {required: "Last name is required",         
            })}
              type="text"  
              id="lastName" 
          />
          {errors.lastName && (
          <p className="errorEmail">{`${errors.lastName.message}`}</p>
          )}
          <label htmlFor="email">Email</label>
          <input 
          {
            ...register("email", 
            { required: "Email is required",              
            })}
          type="text"  
          id="email" 
          />
          {errors.email && (
            <p className="errorEmail">{`${errors.email.message}`}</p>
          )}
          <label htmlFor="password">Password</label>
          <input 
          {
            ...register("password", 
            { required: "Password is required",            
             })}
          type="text" 
          id="password"
          />
           {errors.password && (
            <p className="errorEmail">{`${errors.password.message}`}</p>
          )}
         <button type="submit">Register</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default LoginForm
