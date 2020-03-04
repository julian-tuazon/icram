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
    return (
      <div className='d-flex justify-content-center my-4'>
        <span className='mr-2 btn btn-primary' id='view-cards' onClick={this.handleClick}>View Cards</span>
        <span className='mr-2 btn btn-info' id='review-cards' onClick={this.handleClick}>Review</span>
        <span className='btn btn-success' id='create-card' onClick={this.handleClick}>Create Card</span>
      </div>
    );
  }
}
