import React, { useContext, useEffect, useState } from "react";
import { ReducerContext } from "../App";

const Main = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const [count, setCount] = useState(state);

  const handleDelete = (id) => {
	dispatch({ type: "DELETENUMBER", id });
 };

console.log(state);
  useEffect(() => {
    setCount(state);
  }, [state]);

  return (
    <>
      <div className="main_container">
        {count.map((number) => {
          return (
            <div className="card" key={number.id}>
              <div className="card_trash">
                <h3 onClick={() => handleDelete(number.id)}>X</h3>
              </div>
              <div className="card_text">
                <h1> {number.num}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
