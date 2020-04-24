import React from 'react';
import { AppContext } from './app-context';
import Form from './form';

export default function CreateCard(props) {
  const context = React.useContext(AppContext);

  return (
    <>
      {/* <h1 className="mb-5">Create New Card</h1> */}
      <Form cardAction={context.addCard} header={'Create New Card'} />
    </>
  );
}
