import { connect } from "react-redux";
import operations from "../../redux/contacts/contacts-operations.js";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import selectors from "../../redux/contacts/contacts-selector.js";

function ContactList({ contacts, onClick }) {
  return (
    <section className={s.section}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={s.li}>
              <span className={s.name}>{contact.name}:</span>{" "}
              <a className={s.number} href="tel:{contact.number}">
                {contact.number}
              </a>
              <button className={s.button} id={contact.id} onClick={() => onClick(contact.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// const getVisibleContacts = (allContacts, filter) => {
//   const lowerFilter = filter.toLowerCase();

//   return allContacts.filter((contact) => contact.name.toLowerCase().includes(lowerFilter));
// };
const mapStateToProps = (state) => ({
  contacts: selectors.getVisible(state),
});
const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
};
