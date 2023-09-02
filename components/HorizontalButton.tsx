import { clazz } from "@ce1pers/use-class";
import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button";
}

const HorizontalButton = ({ className, text, type, onClick }: Props) => {
  return (
    <button
      className={clazz(
        "py-1.5 border border-black rounded-md",
        className ?? ""
      )}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default HorizontalButton;
