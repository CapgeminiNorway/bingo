import React, { useContext } from "react";
import Store, { gridSize } from "../store";

const itemValue = 10;
const rowAndColBingoValue = 25;
const diagBingoValue = 50;

export default () => {
  const { state } = useContext(Store);

  const cardScore = state.items.reduce((sum, item) => (item.selected ? (sum += itemValue) : sum), 0);
  const rowScore = state.selected.rows.reduce((sum, row) => (row === gridSize ? (sum += rowAndColBingoValue) : sum), 0);
  const colScore = state.selected.cols.reduce((sum, col) => (col === gridSize ? (sum += rowAndColBingoValue) : sum), 0);
  const diagScore = state.selected.diags.reduce((sum, diag) => (diag === gridSize ? (sum += diagBingoValue) : sum), 0);
  const score = cardScore + rowScore + colScore + diagScore;

  return (
    <div className="score-card">
      Poeng: <span>{score}</span>
    </div>
  );
};
