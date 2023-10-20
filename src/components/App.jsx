import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    const newContact = { name: this.state.name };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    // console.log(this.state.contacts);
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>

        <ul>
          {this.state.contacts.map(contact => (
            <li key={nanoid()}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
