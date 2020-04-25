import React from 'react';
import Form from './form';
import { AppContext } from './app-context';

export default function CreateCard(props) {
  const context = React.useContext(AppContext);

  return <Form cardAction={context.addCard} header={'Create New Card'} />;
}
