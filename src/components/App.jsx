import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

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
        <h1>Phonebook</h1>
        <ContactForm
          onFormSubmit={this.formSubmitHandler}
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
