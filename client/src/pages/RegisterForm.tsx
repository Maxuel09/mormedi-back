import { useForm } from "react-hook-form";
import Logo from '../assets/LogoMormediNegro.png'
import { DevTool } from "@hookform/devtools";
import axios from "axios";
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

  const navigate = useNavigate()

  const {
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
           <p className="errorEmail">{`${errors.firstName.message}`}</p>
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
          <p className="errorEmail">{`${errors.lastName.message}`}</p>
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
            <p className="errorEmail">{`${errors.email.message}`}</p>
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
            <p className="errorEmail">{`${errors.password.message}`}</p>
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