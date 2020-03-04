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
      <div>
        <span id='view-cards' onClick={this.handleClick}>View Cards</span>
        <span id='review-cards' onClick={this.handleClick}>Review</span>
        <span id='create-card' onClick={this.handleClick}>Create Card</span>
      </div>
    );
  }
}
