import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const addSchema = z.object({
  fistName: z.string(),
  lastName: z.string(),
  title: z.string(),
  department: z.string(),
  email: z.string(),
  cellphone: z.number(),
  company: z.string(),
  sector: z.string(),
  subsector: z.string(),
  




  password: z.string()

})

type addSchema = z.infer<typeof addSchema>

const addClient = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(addSchema),
  });
 
  const onSubmit = async (data: a) => {
    const response = await axios.post("https://your-api-endpoint.com/login", {
      email: data.email,
      password: data.password,
    });
    console.log(response);
    reset();
  };
  
  return (
    <div className="container-addClient">
      <form onSubmit={handleSubmit(onSubmit)}>
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
         <button >
          Save
          </button>
          <button>
          Cancel  
          </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default LoginForm
