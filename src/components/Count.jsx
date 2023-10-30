import { useState, useEffect } from "react";

const Count = (props) => {
  const [count, setCount] = useState(props.count);
  const [value, setValue] = useState(1);

  const dec = () => {
    setCount(count - 1);
  };

  const inc = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("In useEffect");
  }, []);

  return (
    <>
      {console.log("render")}
      <p className="mt-5">This is a Counter</p>
      <div className="flex items-center justify-center gap-3 my-4">
        <button onClick={dec}>-</button>
        <p>{count}</p>
        <button onClick={inc}>+</button>
      </div>
    </>
  );
};

export default Count;
