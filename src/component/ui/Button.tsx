import React, { Children, PropsWithChildren } from "react";

const Button = ({
  children,
  textOnly,
  className,
  type = "submit",
  ...props
}: PropsWithChildren & {
  className?: string;
  type?: "button" | "reset" | "submit";
  textOnly?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${textOnly ? "text-" : ""}button ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
