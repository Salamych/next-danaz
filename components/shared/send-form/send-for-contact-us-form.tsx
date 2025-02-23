"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { sendForContactUsForm, TSendForContactUsForm } from "./schemas";
import { FormInput, FormTextarea } from "../form";

interface Props {
  className?: string;
}

export const SendForContactUsForm: React.FC<Props> = () => {
  const form = useForm<TSendForContactUsForm>({
    resolver: zodResolver(sendForContactUsForm),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comments: ""

    },
  });

  const onSubmit = () => {
    console.log("Contact us is done");
    form.reset();
    toast.success("Send message is completed");
  };
  return (
    <FormProvider {...form}>
      <div className="flex justify-center mb-20">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col max-w-[840px] gap-5"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <FormInput
              name="firstName"
              placeholder="First Name"
              label="First Name"
            />
            <FormInput
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
            />
          </div>
          <FormInput name="email" placeholder="Email" label="Email" />
          <FormInput
            name="phone"
            placeholder="Phone Number"
            label="Phone Number"
          />
          <FormTextarea
            name="comments"
            placeholder="Your Message"
            label="Message"
            
          />
          <button
            className="text-sm px-8 py-3 hover:bg-[#222222] duration-500 max-w-[168px] bg-[#2c3878] text-white self-center"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </FormProvider>
  );
}