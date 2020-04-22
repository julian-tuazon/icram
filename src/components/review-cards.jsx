import React from 'react';
import { AppContext } from './app-context';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSide: '' };
  }

  componentDidMount() {
    if (this.context.cards.length) this.context.setActiveCard(this.context.cards[0]);
  }

  nextCard() {
    if (this.context.cards.length) {
      const index = this.context.cards.findIndex(this.context.activeCard);
      this.context.setActiveCard(++index % this.context.cards.length);
    }
  }

  previousCard() {
    if (this.context.cards.length) {
      const index = this.context.cards.findIndex(this.context.activeCard);
      this.context.setActiveCard((index + this.context.cards.length - 1) % this.context.cards.length);
    }
  }

  render() {
    return <h1>Review Cards</h1>;
  }
}

ReviewCards.contextType = AppContext;
