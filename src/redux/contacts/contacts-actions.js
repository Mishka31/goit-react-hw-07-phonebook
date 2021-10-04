import { createAction } from "@reduxjs/toolkit";
// import types from "./contacts-type.js";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction(
  "contact/submitHandler",
  ({ name, number }) => ({
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  })
);

// export const addContact = ({ name, number }) => ({
//   type: types.ADDSUBMIT,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

const deleteContact = createAction("contact/delete");
// export const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

const changeFilter = createAction("contact/find");
// export const changeFilter = (value) => ({
//   type: types.FIND,
//   payload: value,
// });

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
