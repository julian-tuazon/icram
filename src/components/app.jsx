import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
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
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <div className='d-flex justify-content-end mr-5'>
          <Nav setView={this.setView} />
        </div>
        <div className='text-center my-3'>{this.getView()}</div>
      </div>
    );
  }
}
