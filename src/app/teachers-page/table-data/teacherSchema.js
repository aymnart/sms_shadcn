import { z } from "zod";
// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const teacherSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  photo: z.string(),
  category: z.string(),
});
