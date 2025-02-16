import { z } from "zod";

export const sendForNewsSchema = z.object({
  email: z.string().email({message: "Введите корректную почту"}),
});


export type TSendForNewsValue = z.infer<typeof sendForNewsSchema>;