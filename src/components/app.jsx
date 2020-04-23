import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import {AppContext} from './app-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'view-cards', cards: JSON.parse(window.localStorage['flash-cards']), activeCard: null, index: 0 };
    this.getView = this.getView.bind(this);
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  setView(view) {
    this.setState({ view });
  }

  getView() {
    switch(this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  saveCards() {
    window.localStorage['flash-cards'] = JSON.stringify(this.state.cards);
  }

  addCard(card) {
    this.setState({ cards: [...this.state.cards, card] }, this.saveCards);
  }

  setActiveCard(index) {
    this.setState({ activeCard: this.state.cards[index] });
  }

  setIndex(index) {
    this.setState({ index });
  }

  deleteCard(card) {
    const newCards = [...this.state.cards];
    const index = this.state.cards.findIndex(stateCard => stateCard === card);
    newCards.splice(index, 1);
    this.setState({ cards: newCards }, this.saveCards);
  }

  render() {
    console.log('App Cards:', this.state.cards);

    const passable = {
      addCard: this.addCard,
      setView: this.setView,
      cards: this.state.cards,
      activeCard: this.state.activeCard,
      setActiveCard: this.setActiveCard,
      deleteCard: this.deleteCard,
      index: this.state.index,
      setIndex: this.setIndex,
    };

    return (
      <div>
        <div className='d-flex justify-content-end mr-5'>
          <Nav setView={this.setView} />
        </div>
        <AppContext.Provider value={passable}>
          <div className='text-center my-3'>{this.getView()}</div>
        </AppContext.Provider>
      </div>
    );
  }
}

App.contextType = AppContext;
