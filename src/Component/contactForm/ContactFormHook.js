import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./contactForm.module.css";

const ContactFormHook = ({ isExistContact, addNewContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    isExistContact(name) ? alert(`${name} is already exist`) : addNewContact();
    // if (isExistContact(name)) {
    //   alert(`${name} is already exist`);
    // } else {
    //   addNewContact();
    // }
    reset();
  };

  const reset = () => {
    setName((prev) => "");
    setNumber((prev) => "");
    // this.setState({ name: "", number: "" });
  };

  return (
    <form className={s.contactForm} onSubmit={onHandleSubmit}>
      <label>
        <p className={s.inputName}>Name:</p>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={onHandleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        <p className={s.inputName}>Number:</p>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={onHandleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <div className={s.contactForm__btn}>
        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </div>
    </form>
  );
};

ContactFormHook.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};

export default ContactFormHook;
