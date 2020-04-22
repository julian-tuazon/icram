import React from 'react';
import { AppContext } from './app-context';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSide: 'question' };
  }

  componentDidMount() {
    if (this.context.cards.length) this.context.setActiveCard(0);
  }

  handleClick(event) {
    if (event.target.id === 'card') return this.toggleCardSide();
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

  toggleCardSide() {
    if (this.state.currentSide === 'question') return this.setState({ currentSide: 'answer' });
    this.setState({ currentSide: 'question' });
  }

  getCardText() {
    if (this.context.activeCard) return this.context.activeCard[this.state.currentSide];
  }

  render() {
    return (
      <>
        <h1 className="mb-5">Review Cards</h1>
        <div className="container">
          <div
            className="w-75 mx-auto d-flex justify-content-center align-items-center text-white bg-dark review-card"
            onClick={this.handleClick}>
              <h1>{this.getCardText()}</h1>
          </div>
        </div>
      </>
    );
  }
}

ReviewCards.contextType = AppContext;
