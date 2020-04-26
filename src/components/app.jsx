import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import UpdateCard from './update-card';
import Nav from './nav';
import Welcome from './welcome';
import { AppContext } from './app-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'welcome',
      cards: [],
      index: 0,
    };
    this.getView = this.getView.bind(this);
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  componentDidMount() {
    if (window.localStorage['flash-cards']) {
      this.setState({ cards: JSON.parse(window.localStorage['flash-cards']) });
    }
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
      case 'update-card':
        return <UpdateCard />;
      case 'welcome':
        return <Welcome />;
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

  deleteCard(index) {
    const newCards = [...this.state.cards];
    newCards.splice(index, 1);
    this.setState({ cards: newCards }, this.saveCards);
  }

  updateCard(index, card) {
    const newCards = [...this.state.cards];
    newCards[index] = card;
    this.setState({ cards: newCards }, this.saveCards);
  }

  render() {
    const passable = {
      setView: this.setView,
      cards: this.state.cards,
      addCard: this.addCard,
      deleteCard: this.deleteCard,
      updateCard: this.updateCard,
      index: this.state.index,
      setIndex: this.setIndex,
    };

    if (this.state.view === 'welcome') {
      return (
        <AppContext.Provider value={passable}>
          <Welcome />;
        </AppContext.Provider>
      );
    }

    return (
      <div className="container">
        <div className='d-flex justify-content-center justify-content-md-end'>
          <Nav setView={this.setView} view={this.state.view} />
        </div>
        <AppContext.Provider value={passable}>
          <div className='text-center my-3'>{this.getView()}</div>
        </AppContext.Provider>
      </div>
    );
  }
}

App.contextType = AppContext;
