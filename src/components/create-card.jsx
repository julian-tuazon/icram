import React from 'react';
import {AppContext} from './app-context';

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.context.addCard(this.state.question, this.state.answer);
    this.setState({ question: '', answer: ''});
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    <form onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="question">Question:</label>
      </div>
      <div>
        <input type="textarea" id="question" onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="answer">Answer:</label>
      </div>
      <div>
        <input type="textarea" id="answer" onChange={this.handleChange} />
      </div>
      <button></button>
    </form>
    return <h1>Create New Card</h1>;
  }
}

CreateCard.contextType = AppContext;
