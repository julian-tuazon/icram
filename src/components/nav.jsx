import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(e) {
    this.props.setView(e.target.id);
  }

  render() {
    const viewCardsClassName = this.props.view === 'view-cards' ? 'mr-2 btn btn-primary' : 'mr-2 btn text-primary';
    const reviewCardsClassName = this.props.view === 'review-cards' ? 'mr-2 btn btn-primary' : 'mr-2 btn text-primary';
    const createCardClassName = this.props.view === 'create-card' ? 'btn btn-primary' : 'btn text-primary';

    return (
      <div className='d-flex justify-content-center my-4'>
        <span className={viewCardsClassName} id='view-cards' onClick={this.handleClick}>View Cards</span>
        <span className={reviewCardsClassName} id='review-cards' onClick={this.handleClick}>Review</span>
        <span className={createCardClassName} id='create-card' onClick={this.handleClick}>Create Card</span>
      </div>
    );
  }
}
