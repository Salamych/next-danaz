"use client";

import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { sendForNewsSchema, TSendForNewsValue } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputNews } from "../form";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

export const SendForNewsForm: React.FC<Props> = ({className}) => {


  const form = useForm<TSendForNewsValue>({
    resolver: zodResolver(sendForNewsSchema),
    defaultValues: {
      email: "",
    }
  });

  
  const onSubmit = () => {
    console.log("News is done");
    toast.success("Subscription completed")
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <button type="submit" className="text-[40px] leading-none self-end">&#8640;</button>
        <FormInputNews name="email" placeholder="Email Address" />
      </form>
    </FormProvider>
  );
}