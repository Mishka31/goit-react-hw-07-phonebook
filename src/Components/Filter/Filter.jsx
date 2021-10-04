import { connect } from "react-redux";
import actions from "../../redux/contacts/contacts-actions.js";
import s from "./Filter.module.css";

function Find({ value, onSearch }) {
  return (
    <div className={s.container}>
      <p className={s.title}>Find contacts by name:</p>
      <input
        type="text"
        value={value}
        onChange={onSearch}
        className={s.imput}
      ></input>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (e) => dispatch(actions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Find);
