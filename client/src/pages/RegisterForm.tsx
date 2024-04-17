import { useForm } from "react-hook-form";
import Logo from '../assets/LogoMormediNegro.png'
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

type FormValues = {
  name: string  
  email: string;
  password: string;
};
const LoginForm = () => {

  const navigate = useNavigate()

  const {
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
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default LoginForm
