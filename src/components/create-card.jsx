import React from 'react';
import {AppContext} from './app-context';

export default class CreateCard extends React.Component {
  render() {
    return <h1>Create New Card</h1>;
  }
}

CreateCard.contextType = AppContext;
