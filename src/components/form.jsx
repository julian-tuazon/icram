import React from 'react';
import { AppContext } from './app-context';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question || '',
      answer: this.props.answer || '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.cardAction({ question: this.state.question, answer: this.state.answer });
    // this.handleReset();
    this.context.setView('view-cards');
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleReset() {
    this.setState({ question: '', answer: '' });
  }

  render() {
    return (
      <>
        <h1 className="mb-5">{this.props.header}</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="question">Question:</label>
          </div>
          <div className="mb-4 w-50 mx-auto d-flex justify-content-center">
            <textarea id="question" className="form-control" rows="2" onChange={this.handleChange} value={this.state.question} required />
          </div>
          <div>
            <label htmlFor="answer">Answer:</label>
          </div>
          <div className="mb-4 w-50 mx-auto d-flex justify-content-center">
            <textarea id="answer" className="form-control" rows="2" onChange={this.handleChange} value={this.state.answer} required />
          </div>
          <div className="w-50 mx-auto d-flex justify-content-end">
            <button type="submit" className="mr-3 btn btn-outline-primary">Save Card</button>
            <button type="button" onClick={this.handleReset} className="btn btn-outline-danger">Cancel</button>
          </div>
        </form>
      </>
    );
  }
}

Form.contextType = AppContext;
