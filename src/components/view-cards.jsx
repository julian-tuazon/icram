import React from 'react';
import {AppContext} from './app-context';
import Modal from './modal';

export default function ViewCards(props) {
  const context = React.useContext(AppContext);

  const cards = context.cards.map((card, index) =>
    <div className="col mb-4" key={index}>
      <div className="card h-100">
        <div className="card-header bg-dark text-white">
          <h5 className="card-title text-light">Question:</h5>
          <p className="card-text">{card.question}</p>
        </div>
        <div className="card-body bg-secondary text-white">
          <h5 className="card-title">Answer:</h5>
          <p className="card-text">{card.answer}</p>
        </div>
        <Modal card={card} index={index}/>
      </div>
    </div>
  );

  return (
    <>
      <h1 className="mb-5">My Cards</h1>
      <div className="mx-5">
        <div className="row row-cols-1 row-cols-md-3">
          {cards}
        </div>
      </div>
    </>
  );
}
