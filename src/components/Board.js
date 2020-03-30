import React, { useContext } from "react";
import Store from "../store";

import Card from "./Card";

export default function Board() {
  const { state, dispatch } = useContext(Store);

  return (
    <div className="board">
      {state.items.map((item, i) => (
        <Card {...item} handleClick={() => dispatch({ type: "TOGGLE_ITEM", payload: i })} />
      ))}
    </div>
  );
}
