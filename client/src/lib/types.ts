import {z} from "zod"

export const registerSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(5, "Must be a least 5 characters")
  })
  
export type TRegisterSchema = z.infer<typeof registerSchema>

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5, "password is to short")
  })
  
export type TLoginSchema = z.infer<typeof loginSchema>

export const addClientSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  title: z.string(),
  department: z.string(),
  commercial: z.string(),
  email: z.string(),
  cellphone: z.number(),
  comments: z.string(),
  company: z.string(),
  sector: z.string(),
  subsector: z.string(),
  address: z.string(),
  country: z.string(),
  city: z.string(),
  postalCode: z.string()
})

export type TaddClientSchema = z.infer<typeof addClientSchema>

export const addOfferSchema = z.object({
  code: z.string(),
  subsidary: z.string(),
  state: z.string(),
  company: z.string(),
  commercial: z.string(),
  sector: z.number(),
  subsector: z.string(),
  country: z.string(),
  title: z.string(),
  offer: z.string(),
  type: z.string(),
  amount: z.number(),
  city: z.string(),
  postalCode: z.string(),
  prospectiveDate: z.date(),
  probability: z.string(),
  comments: z.string(),
  responsable: z.string()

})

export type TaddOfferSchema = z.infer<typeof addOfferSchema>

