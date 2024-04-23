import { useForm } from "react-hook-form";
import axios from "axios";
import { addOfferSchema, TaddOfferSchema } from "../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {Link} from "react-router-dom"



const AddOffer = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TaddOfferSchema>({
    resolver: zodResolver(addOfferSchema),
  });

  
 
  const onSubmit = async (data:TaddOfferSchema ) => {
    const response = await axios.post("http://localhost:3000/offers'", {
      code: data.code,
      subsidary: data.subsidary,
      state: data.state,
      company: data.company,
      commercial: data.commercial,
      sector: data.sector,
      subsector: data.subsector,
      country: data.country,
      title: data.title,
      offer: data.offer,
      type: data.type,
      amount: data.amount,
      prospectiveDate: data.prospectiveDate,
      probability: data.probability,
      comments: data.comments,
      responsable: data.responsable
    });
    console.log(response);
    reset();
  };
  
  return (
    <div>
    <div className="containerMain">
      <h1>Add</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="code">code</label>
          <input
          {
            ...register("code"
          )}
          type="text" 
          id="code"
          />
           {errors.code && (
             <p className="errorCode">{`${errors.code.message}`}</p>
            )}
          <label htmlFor="subsidary">Subsidary</label>
          <input
          {
            ...register("subsidary"
          )}
          type="text" 
          id="subsidary"
          />
           {errors.subsidary && (
             <p className="errorSubsidary">{`${errors.subsidary.message}`}</p>
            )}
          <label htmlFor="title">State</label>
          <input
          {
            ...register("state"
          )}
          type="text" 
          id="state"
          />
           {errors.state && (
             <p className="errorState">{`${errors.state.message}`}</p>
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
            <label htmlFor="commercial">Commercial</label>
            <input 
            {
              ...register("commercial" 
            )}
            type="commercial"  
            id="commercial" 
            />
            {errors.commercial && (
              <p className="errorCommercial">{`${errors.commercial.message}`}</p>
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
               <p className="errorSector">{`${errors.sector.message}`}</p>
              )}
            <label htmlFor="subsector">Subsector</label>
            <input
            {
              ...register("subsector"
            )}
            type="text" 
            id="subsector"
            />
             {errors.subsector && (
               <p className="errorSubsector">{`${errors.subsector.message}`}</p>
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
            <label htmlFor="offer">Offer</label>
            <input
            {
              ...register("offer"
            )}
            type="text" 
            id="offer"
            />
             {errors.offer && (
               <p className="errorOffer">{`${errors.offer.message}`}</p>
              )}
            <label htmlFor="type">Type</label>
            <input
            {
              ...register("type"
            )}
            type="text" 
            id="type"
            />
             {errors.type && (
               <p className="errorType">{`${errors.type.message}`}</p>
              )}
            <label htmlFor="amount">Amount</label>
            <input
            {
              ...register("amount"
            )}
            type="text" 
            id="amount"
            />
             {errors.amount && (
               <p className="errorAmount">{`${errors.amount.message}`}</p>
              )}
            <label htmlFor="city">City</label>
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
            <label htmlFor="city">City</label>
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
          <Link to={"/offers"} style={{color:"white",textDecoration: "none"}}>
            Save
          </Link>
          </button>
          <button >
            <Link to={"/offers"} style={{color:"white",textDecoration: "none"}}>
              Cancel  
            </Link>
          </button>
      </form>
    </div>
    </div>
  );
};

export default AddOffer


