import { useForm } from "react-hook-form";
import Logo from '../assets/LogoMormediNegro.png'
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {z} from "zod"
import type { FieldValues } from "react-hook-form";
import { resolve } from "path";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data:FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    reset();
  }
  
  return (
    <div className="container-login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Logo} alt="logo mormedi" className="logo"/>
        <p className="top">making tomorrow more tangibles</p> 
          <label htmlFor="email">Email</label>
          <input 
          {
           ...register("email",  
            {required: "Email is required",
          })}
          type="email"  
          id="email" 
          />
          {errors.email && (
            <p className="errorEmail">{`${errors.email.message}`}</p>
          )}
          <label htmlFor="password">Password</label>
          <input
          {
            ...register("password", 
            {required: "Password is required"}
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
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default LoginForm
