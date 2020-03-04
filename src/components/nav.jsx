import React from 'react';

export default function Nav(props) {
  return (
    <div>
      <a href="" onClick={props.setView('view-cards')}>View Cards</a>
      <a href="" onClick={props.setView('review-cards')}>Review</a>
      <a href="" onClick={props.setView('create-card')}>Create Card</a>
    </div>
  );
}
