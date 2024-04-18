import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const addSchema = z.object({
  firstName: z.string(),
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

type TaddSchema = z.infer<typeof addSchema>

const addClient = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TaddSchema>({
    resolver: zodResolver(addSchema),
  });
 
  const onSubmit = async (data:TaddSchema ) => {
    const response = await axios.post("https://your-api-endpoint.com/login", {
      firstName: data.firstName,
      lastName: data.lastName,
      title: data.title,
      department: data.department,
      email: data.email,
      cellphone: data.cellphone,
      company: data.company,
      sector: data.sector,
      subsector: data.subsector,
    });
    console.log(response);
    reset();
  };
  
  return (
    <div className="temp">
    <div className="container-addClient">
      <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name</label>
          <input
          {
            ...register("firstName"
          )}
          type="text" 
          id="firstName"
          />
           {errors.firstName && (
             <p className="errorFirstName">{`${errors.firstName.message}`}</p>
            )}
          <label htmlFor="lastName">Last Name</label>
          <input
          {
            ...register("lastName"
          )}
          type="text" 
          id="lastName"
          />
           {errors.lastName && (
             <p className="errorLastName">{`${errors.lastName.message}`}</p>
            )}
          <label htmlFor="title">Title</label>
          <input
          {
            ...register("title"
          )}
          type="text" 
          id="title"
          />
           {errors.title && (
             <p className="errorTitle">{`${errors.title.message}`}</p>
            )}
          <label htmlFor="department">Department</label>
          <input
          {
            ...register("department"
          )}
          type="text" 
          id="department"
          />
           {errors.department && (
             <p className="errorDepartment">{`${errors.department.message}`}</p>
            )}
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
            <label htmlFor="cellphone">Cellphone</label>
            <input
            {
              ...register("cellphone"
            )}
            type="text" 
            id="cellphone"
            />
             {errors.cellphone && (
               <p className="errorCellphone">{`${errors.cellphone.message}`}</p>
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
    </div>
  );
};

export default addClient
