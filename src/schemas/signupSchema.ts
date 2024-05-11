import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(3, "username must be atleast 3 char or longer")
    .max(20, "username cannot be more than 20 char")
    .regex(/^[a-zA,Z0-9_]+$/, "username must not contain special char"),
  email: z.string().email({ message: "enter valid email address " }),
  password: z.string().min(6, "password must be atleast 6 char or longer"),
});
