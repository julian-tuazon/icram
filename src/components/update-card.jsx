import React from 'react';
import Form from './form';
import { AppContext } from './app-context';

export default class UpdateCard extends React.Component {
  constructor(props) {
    super(props);
    this.updateCard = this.updateCard.bind(this);
  }

  updateCard(card) {
    this.context.updateCard(this.context.index, card);
  }

  getQuestion() {
    return this.context.cards[this.context.index].question;
  }

  getAnswer() {
    return this.context.cards[this.context.index].answer;
  }

  render() {
    return (
      <>
        <h1 className="mb-5">Update Card</h1>
        <Form cardAction={this.updateCard} question={this.getQuestion()} answer={this.getAnswer()} />
      </>
    );
  }
}

UpdateCard.contextType = AppContext;
