import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';

import css from './App.module.css';
export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          onFormSubmit={this.formSubmitHandler}
          onAddContact={this.addContact}
        />
        <h2 className={css.title}>Contacts</h2>

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
