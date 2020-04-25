import React from 'react';
import ProgressBar from './progress-bar';
import { AppContext } from './app-context';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSide: 'question' };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.context.setActiveCard(0);
    this.context.setIndex(0);
  }

  handleClick(event) {
    if (event.currentTarget.id === 'card') return this.toggleCardSide();
    if (event.currentTarget.id === 'next') return this.nextCard();
    if (event.currentTarget.id === 'prev') return this.previousCard();
  }

  nextCard() {
    // const index = this.context.cards.findIndex(card => card === this.context.activeCard);
    // this.context.setActiveCard((index + 1) % this.context.cards.length);
    this.context.setIndex((this.context.index + 1) % this.context.cards.length);
    this.setState({ currentSide: 'question' });
  }

  previousCard() {
    // const index = this.context.cards.findIndex(card => card === this.context.activeCard);
    // this.context.setActiveCard((index + this.context.cards.length - 1) % this.context.cards.length);
    this.context.setIndex((this.context.index + this.context.cards.length - 1) % this.context.cards.length);
    this.setState({ currentSide: 'question' });
  }

  toggleCardSide() {
    if (this.state.currentSide === 'question') return this.setState({ currentSide: 'answer' });
    this.setState({ currentSide: 'question' });
  }

  getCardText() {
    // if (this.context.activeCard) return this.context.activeCard[this.state.currentSide];
    return this.context.cards[this.context.index][this.state.currentSide];
  }

  getCardColor() {
    if (this.state.currentSide === 'question') return 'd-flex bg-dark position-relative';
    else return 'd-flex bg-secondary position-relative'
  }

  getPercentComplete() {
    const answerProgress = this.state.currentSide === 'question' ? 0 : 1;
    return (this.context.index + answerProgress) / this.context.cards.length * 100;
  }

  render() {
    if (!this.context.cards.length) {
      return (
        <>
          <h1 className="mb-5">Review Cards</h1>
          <h5 className="text-center">No cards available.</h5>
        </>
      );
    }

    return (
      <>
        <h1 className="mb-5">Review Cards</h1>
        <div>
          <ProgressBar percentComplete={this.getPercentComplete()}/>
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
              <h5>{this.getCardText()}</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ReviewCards.contextType = AppContext;
