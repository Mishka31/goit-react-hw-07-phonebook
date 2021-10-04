// import { connect } from "react-redux";
// import * as actions from "./redux/contacts/contacts-actions.js";

import React, { Component } from "react";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactList from "./Components/ContactList/ContactList.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1 className={s.titleH1}>Phonebook</h1>
        <ContactForm listArrey={contacts} />
        <h2 className={s.titleH2}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
