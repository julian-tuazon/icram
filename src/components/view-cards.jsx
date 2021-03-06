import React from 'react';
import DeleteModal from './delete-modal';
import { AppContext } from './app-context';

export default function ViewCards(props) {
  const context = React.useContext(AppContext);
  const updateCard = index => {
    context.setIndex(index);
    context.setView('update-card');
  };
  const createCard = () => context.setView('create-card');

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
        <div className="card-footer bg-dark">
          <i className="far fa-edit btn text-secondary" onClick={() => updateCard(index)}></i>
          <DeleteModal card={card} index={index} />
        </div>
      </div>
    </div>
  );

  if (!context.cards.length) {
    return (
      <>
        <h1 className="mb-5">My Cards</h1>
        <h5 className="text-center mb-3">No cards available</h5>
        <button className="btn text-primary" onClick={createCard}>Create a new card?</button>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-5">My Cards</h1>
      <div className="row row-cols-1 row-cols-md-3">
        {cards}
      </div>
    </>
  );
}
