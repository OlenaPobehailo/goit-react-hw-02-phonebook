import { nanoid } from 'nanoid';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
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

        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
