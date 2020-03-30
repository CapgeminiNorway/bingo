import React, { useContext } from "react";
import Store from "../store";

export default () => {
  const { state, dispatch } = useContext(Store);
  return state.showBingo ? (
    <div
      className="bingo-overlay"
      onClick={() => {
        dispatch({ type: "HIDE_OVERLAY" });
      }}
    >
      <span>BINGO!</span>
    </div>
  ) : null;
};
