import React from "react";

// type GreetProps
const Greet: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-blue-900'>Hello {name}, you have 10 new messages</h2>
    </div>
  );
};

export default Greet;
