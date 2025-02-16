"use client";

import React from "react"

import { useFormContext } from "react-hook-form";
import { ClearButton } from "../clear-button";
import { ErrorText } from "../error-text";
import { RequiredSymbol } from "../required-symbol";
import { InputForNews } from "../input-for-news";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
name: string;
label?: string;
required?: boolean;
className?: string;

}
export const FormInputNews: React.FC<Props> = ({name, className, label, required, ...props}) => {

  const {register, watch, setValue, formState: {errors}} = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear =() => {
    setValue(name, "", {shouldValidate: true});
  }



  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <InputForNews className="h-12 text-md" {...register(name)} {...props}/>

        {value && <ClearButton onClick={onClickClear} />}
        
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2"/>}
    </div>
  );
}