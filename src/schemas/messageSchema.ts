import { z } from "zod";

export const messageSchema = z.object({
  content: z.string().min(10, "message must be atleast 10 char long").max(300,"message must be no longer than  300 char ")
});
