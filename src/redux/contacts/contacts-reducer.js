import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import types from "./contacts-type.js";

import actions from "./contacts-actions.js";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const payloadLowerCase = payload.name.toLowerCase();
    const findItem = state.find(
      (contact) => contact.name.toLowerCase() === payloadLowerCase
    );
    if (findItem) {
      alert(`${findItem.name} is already in contacts`);
      return state;
    } else {
      return [...state, payload];
    }
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const items = (
//   state = [
// {
//   id: "c2cc433e-97d2-4fa7-b9eb-12a98511c9ab",
//   name: "Misha Krasnonos",
//   number: "000-00-11-11",
// },
//   ],
//   { type, payload }
// ) => {
//   switch (type) {
//     case types.ADDSUBMIT:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.FIND:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
