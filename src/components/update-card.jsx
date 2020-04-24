import React from 'react';
import Form from './form';
import { AppContext } from './app-context';

export default function UpdateCard(props) {
  const context = React.useContext(AppContext);
  const updateCard = card => this.context.updateCard(this.context.index, card);
  const getQuestion = () => this.context.cards[this.context.index].question;
  const getAnswer = () => this.context.cards[this.context.index].answer;

  return (
    <>
      <h1 className="mb-5">Update Card</h1>
      <Form cardAction={this.updateCard} question={this.getQuestion()} answer={this.getAnswer()} />
    </>
  );
}
