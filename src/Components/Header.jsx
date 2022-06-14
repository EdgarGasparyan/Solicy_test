import React, { useContext } from "react";
import styles from "./Header.module.css";
import { ReducerContext } from "../App";

const Header = () => {
  const { state, dispatch } = useContext(ReducerContext);


  
  const handleAdd = () => {
    dispatch({ type: "ADDNUMBER" });
  };

  const handleSort = () => {
    dispatch({ type: "SORTNUMBER" });
  };

  return (
    <>
      <div className={styles.header}>
        <button onClick={handleAdd}>Add Card</button>
        <button onClick={handleSort}>Sort Cards</button>
      </div>
    </>
  );
};

export default Header;
