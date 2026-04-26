import React from "react";

const Error = ({ message }: { message: string }) => {
  return (
    <div className="error">
      <h2>Something went wrong</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
