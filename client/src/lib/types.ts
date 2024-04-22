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
  firstName: z.string(),
  lastName: z.string(),
  title: z.string(),
  department: z.string(),
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

export type TaddOfferSchema = z.infer<typeof addOfferSchema>