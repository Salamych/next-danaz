import { z } from "zod";
import validator from "validator";

const email = z.string().email({message: "Введите корректную почту"});

export const sendForNewsSchema = z.object({
  email: email,
});

export const sendForContactUsForm = z.object({
  firstName: z.string().min(2, {message: "Введите имя не короче 2 символов"}),
  lastName: z.string().min(1, {message: "Введите фамилию не короче 1 символа"}),
  email: email,
  phone: z.string().refine(validator.isMobilePhone, {message: "Введите корректный номер телефона"}),
  comments: z.string().optional()
});


export type TSendForNewsValue = z.infer<typeof sendForNewsSchema>;
export type TSendForContactUsForm = z.infer<typeof sendForContactUsForm>;