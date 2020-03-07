import React from 'react';
import {AppContext} from './app-context';

export default function ViewCards(props) {
  return (
    // <AppContext.Consumer>
    //   {context => context}
    // </AppContext.Consumer>
    <React.Fragment>
      <h1>My Cards</h1>
      <div className="mx-5 mt-5">
        <div className="row row-cols-1 row-cols-md-3">

          <div className="col mb-4">
            <div className="card h-100">
              <div className="card-header bg-dark text-white">
                <h5 className="card-title text-light">Question:</h5>
                <p className="card-text">Yo dude?</p>
              </div>
              <div className="card-body bg-secondary text-white">
                <h5 className="card-title">Answer:</h5>
                <p className="card-text">suh dude</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}
