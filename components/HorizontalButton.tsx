import { clazz } from "@ce1pers/use-class";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button";
}

const HorizontalButton = ({ className, children, type, onClick }: Props) => {
  return (
    <button
      className={clazz(
        "py-1.5 border border-black rounded-md",
        className ?? ""
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default HorizontalButton;
