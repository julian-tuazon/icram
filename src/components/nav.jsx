import React from 'react';

export default function Nav(props) {
  const handleClick = e => props.setView(e.target.id);
  const viewCardsClassName = props.view === 'view-cards' ? 'mr-2 btn btn-primary' : 'mr-2 btn text-primary';
  const reviewCardsClassName = props.view === 'review-cards' ? 'mr-2 btn btn-primary' : 'mr-2 btn text-primary';
  const createCardClassName = props.view === 'create-card' ? 'btn btn-primary' : 'btn text-primary';

  return (
    <div className='d-flex justify-content-center my-4'>
      <span className={viewCardsClassName} id='view-cards' onClick={handleClick}>View Cards</span>
      <span className={reviewCardsClassName} id='review-cards' onClick={handleClick}>Review</span>
      <span className={createCardClassName} id='create-card' onClick={handleClick}>Create Card</span>
    </div>
  );
}
