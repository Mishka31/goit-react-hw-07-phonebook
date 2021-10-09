import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions.js";

const {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addRequest,
  addSuccess,
  addError,
  changeFilter,
  deleteSuccess,
  deleteError,
  deleteRequest,
} = actions;

const items = createReducer([], {
  [fetchSuccess]: (_, { payload }) => payload,
  [addSuccess]: (state, { payload }) => {
    const payloadLowerCase = payload.name.toLowerCase();
    const findItem = state.find((contact) => contact.name.toLowerCase() === payloadLowerCase);
    if (findItem) {
      alert(`${findItem.name} is already in contacts`);
      return state;
    } else {
      return [...state, payload];
    }
  },

  [deleteSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchError]: () => false,
  [addRequest]: () => true,
  [addSuccess]: () => false,
  [addError]: () => false,
  [deleteRequest]: () => true,
  [deleteSuccess]: () => false,
  [deleteError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
