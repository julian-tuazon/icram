import React from 'react';
import ViewCards from './view-cards';
import Review from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'view-cards' };
    this.getView = this.getView.bind(this);
    this.setView = this.setView.bind(this);
  }

  setView(view) {
    this.setState({ view });
  }

  getView() {
    switch(this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <Review />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <div className='text-center my-3'>{this.getView()}</div>
        <div className='d-flex flex-column align-items-center'>
          <Nav setView={this.setView} />
          <div className='my-5'>{this.getView()}</div>
        </div>
      </div>
    );
  }
}
