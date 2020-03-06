import React from 'react';

export default function ViewCards(props) {
  return (
    <React.Fragment>
      <h1>My Cards</h1>
      <div className="row">
        <div className="card text-white bg-dark mb-3 mx-2 col-2">
          <div className="card-header card-img-top">
            <h5 className="card-title">Question:</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content?</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Answer</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
