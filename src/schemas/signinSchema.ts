import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().length(6, "Verification code must be 6 digits"),
  password:z.string()
});
