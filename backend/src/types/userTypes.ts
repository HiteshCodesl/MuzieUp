import z from "zod"

export const signUpSchema = z.object({
    email: z.string().min(5).max(30),
    username: z.string().min(3).max(30),
    password: z.string().min(4).max(20)
})

export const signInSchema = z.object({
    email: z.string().min(5).max(30),
    password: z.string().min(4).max(20)
})

