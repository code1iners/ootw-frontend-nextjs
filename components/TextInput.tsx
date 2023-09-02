"use client";

import { clazz } from "@ce1pers/use-class";
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn;
  name?: string;
  error?: string;
}

const TextInput = ({
  className,
  type,
  placeholder,
  name,
  register,
  error,
}: Props) => {
  return (
    <>
      <input
        className={clazz("input min-w-[200px]", className ?? "")}
        type={type ?? "text"}
        placeholder={placeholder}
        name={name}
        autoCapitalize="off"
        autoComplete="off"
        {...register}
      />
      {error && (
        <small className="flex justify-end text-red-500 tracking-wider">
          {error}
        </small>
      )}
    </>
  );
};

export default TextInput;
