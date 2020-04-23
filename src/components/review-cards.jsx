import React from 'react';
import { AppContext } from './app-context';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSide: 'question' };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.context.cards.length) this.context.setActiveCard(0);
  }

  handleClick(event) {
    if (event.currentTarget.id === 'card') return this.toggleCardSide();
    if (event.currentTarget.id === 'next') return this.nextCard();
    if (event.currentTarget.id === 'prev') return this.previousCard();
  }

  nextCard() {
    if (this.context.cards.length) {
      const index = this.context.cards.findIndex(card => card === this.context.activeCard);
      this.context.setActiveCard((index + 1) % this.context.cards.length);
      this.setState({ currentSide: 'question' });
    }
  }

  previousCard() {
    if (this.context.cards.length) {
      const index = this.context.cards.findIndex(card => card === this.context.activeCard);
      this.context.setActiveCard((index + this.context.cards.length - 1) % this.context.cards.length);
      this.setState({ currentSide: 'question' });
    }
  }

  toggleCardSide() {
    if (this.state.currentSide === 'question') return this.setState({ currentSide: 'answer' });
    this.setState({ currentSide: 'question' });
  }

  getCardText() {
    if (this.context.activeCard) return this.context.activeCard[this.state.currentSide];
  }

  getCardColor() {
    if (this.state.currentSide === 'question') return 'd-flex bg-dark position-relative';
    else return 'd-flex bg-secondary position-relative'
  }

  render() {
    return (
      <>
        <h1 className="mb-5">Review Cards</h1>
        <div className="container">
          <div className={this.getCardColor()}>
            <div className="carousel-control-prev btn" id="prev" onClick={this.handleClick}>
              <span className="carousel-control-prev-icon"></span>
            </div>
            <div className="carousel-control-next btn" id="next" onClick={this.handleClick}>
              <span className="carousel-control-next-icon"></span>
            </div>
            <div
              className="w-75 mx-auto d-flex justify-content-center align-items-center text-white review-card btn"
              id="card"
              onClick={this.handleClick}>
              <h1>{this.getCardText()}</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ReviewCards.contextType = AppContext;
