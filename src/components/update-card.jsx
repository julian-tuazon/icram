import React from 'react';
import Form from './form';
import { AppContext } from './app-context';

export default function UpdateCard(props) {
  const context = React.useContext(AppContext);
  const updateCard = card => context.updateCard(context.index, card);
  const getQuestion = () => context.cards[context.index].question;
  const getAnswer = () => context.cards[context.index].answer;

  return (
    <>
      <h1 className="mb-5">Update Card</h1>
      <Form cardAction={updateCard} question={getQuestion()} answer={getAnswer()} />
    </>
  );
}
