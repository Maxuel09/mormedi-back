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

export const addSchema = z.object({
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

export type TaddSchema = z.infer<typeof addSchema>