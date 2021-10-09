// import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import ContactList from "./contactList/ContactList";
// import Filter from "./filter/Filter";
// import ContactFormHook from "./contactForm/ContactFormHook";

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const contactsLS = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contactsLS);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   addNewContact = (newContact) => {
//     this.setState((prev) => {
//       return { contacts: [...prev.contacts, { id: uuidv4(), ...newContact }] };
//     });
//   };

//   isExistContact = (name) =>
//     this.state.contacts.some(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );

//   deletContact = (e) => {
//     const id = e.target.id;
//     this.setState((prev) => ({
//       contacts: [...prev.contacts.filter((contact) => contact.id !== id)],
//     }));
//   };

//   onHandleChangeFilter = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normolizedFilter = filter.toLowerCase();

//     return normolizedFilter
// ? contacts.filter((contact) =>
//           contact.name.toLowerCase().includes(normolizedFilter)
//         )
//       : contacts;
//   };

//   render() {
//     const filteredContacts = this.getVisibleContacts();
//     return (
//       <>
//         <div>
//           <h1>Phonebook</h1>
//           <ContactFormHook
//             isExistContact={this.isExistContact}
//             addNewContact={this.addNewContact}
//           />
//           <h2>Contacts</h2>
//           <Filter
//             value={this.state.filter}
//             onChange={this.onHandleChangeFilter}
//           />
//           <ContactList
//             contacts={filteredContacts}
//             deletContact={this.deletContact}
//           />
//         </div>
//       </>
//     );
//   }
// }

// export default App;
