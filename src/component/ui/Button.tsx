import React, { PropsWithChildren } from "react";

const Button = ({
  children,
  textOnly,
  className,
  ...props
}: PropsWithChildren & { className?: string; textOnly?: boolean }) => {
  return (
    <button
      className={`${textOnly ? "text-" : ""}button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
