import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { addClientSchema, TaddClientSchema } from "../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";



const AddClient = () => {
  
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TaddClientSchema>({
    resolver: zodResolver(addClientSchema),
  });

  
 
  const onSubmit = async (data:TaddClientSchema ) => {
    const response = await axios.post("http://localhost:3000/clients'", {
      firstName: data.firstName,
      lastName: data.lastName,
      title: data.title,
      department: data.department,
      email: data.email,
      cellphone: data.cellphone,
      company: data.company,
      sector: data.sector,
      subsector: data.subsector,
      address: data.address,
      country: data.country,
      city: data.city,
      postalCode: data.postalCode
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
            <label htmlFor="comments">Comments</label>
            <input
            {
              ...register("comments"
            )}
            type="text" 
            id="comments"
            />
             {errors.comments && (
               <p className="errorComments">{`${errors.comments.message}`}</p>
              )}
            <label htmlFor="company">Company</label>
            <input
            {
              ...register("company"
            )}
            type="text" 
            id="company"
            />
             {errors.company && (
               <p className="errorCompany">{`${errors.company.message}`}</p>
              )}
            <label htmlFor="sector">Sector</label>
            <input
            {
              ...register("sector"
            )}
            type="text" 
            id="sector"
            />
             {errors.sector && (
               <p className="errorSubSector">{`${errors.sector.message}`}</p>
              )}
            <label htmlFor="subSector">Sub Sector</label>
            <input
            {
              ...register("subsector"
            )}
            type="text" 
            id="subsector"
            />
             {errors.subsector && (
               <p className="errorSubSector">{`${errors.subsector.message}`}</p>
              )}
            <label htmlFor="address">Sub Sector</label>
            <input
            {
              ...register("address"
            )}
            type="text" 
            id="address"
            />
             {errors.address && (
               <p className="erroraddres">{`${errors.address.message}`}</p>
              )}
            <label htmlFor="country">Country</label>
            <input
            {
              ...register("country"
            )}
            type="text" 
            id="country"
            />
             {errors.country && (
               <p className="errorcountry">{`${errors.country.message}`}</p>
              )}
            <label htmlFor="country">City</label>
            <input
            {
              ...register("city"
            )}
            type="text" 
            id="city"
            />
             {errors.city && (
               <p className="errorcity">{`${errors.city.message}`}</p>
              )}

         <button type="submit"  disabled={isSubmitting}>
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

export default AddClient
