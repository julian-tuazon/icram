import React from 'react';

export default class ReviewCards extends React.Component {
  constructor(props) {
    this.state = { currentSide: '' };
  }
  componentDidMount() {
    if (this.context.cards.length) this.context.setActiveCard(this.context.cards[0]);
  }
  render() {
    return <h1>Review Cards</h1>;
  }
}

ReviewCards.contextType = AppContext;
