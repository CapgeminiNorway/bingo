/* eslint-disable default-case */
import produce from "immer";
import { gridSize, initItems, initSelected } from "./store";

const reducer = produce((draft, action) => {
  switch (action.type) {
    case "TOGGLE_ITEM":
      const item = draft.items[action.payload];
      item.selected = !item.selected;

      draft.selected.rows[item.row] += item.selected ? 1 : -1;
      draft.selected.cols[item.col] += item.selected ? 1 : -1;
      if (item.row === item.col) {
        draft.selected.diags[0] += item.selected ? 1 : -1;
        if (draft.selected.diags[0] === gridSize) {
          draft.showBingo = true;
        }
      }
      if (item.row === gridSize - (item.col + 1)) {
        draft.selected.diags[1] += item.selected ? 1 : -1;
        if (draft.selected.diags[1] === gridSize) {
          draft.showBingo = true;
        }
      }

      if (draft.selected.rows[item.row] === gridSize || draft.selected.cols[item.col] === gridSize) {
        draft.showBingo = true;
      }

      break;
    case "HIDE_OVERLAY":
      draft.showBingo = false;
      break;
    case "CLEAR_BOARD":
      draft.items = initItems();
      draft.selected = initSelected();
  }
});

export default reducer;
