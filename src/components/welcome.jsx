import React from 'react';
import { AppContext } from './app-context';

export default function Welcome(props) {
  const context = React.useContext(AppContext);
  const enterApp = () => context.setView('view-cards');

  return (
    <div className="container w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex align-items-center mb-3">
          <h1 className="fade-slide">iCram</h1>
          <i className="fas fa-bolt fa-2x text-primary ml-3 fade-slide"></i>
        </div>
        <h5 className="mb-5 fade-slide">Study. Succeed.</h5>
        <div>
          <button className="btn btn-primary fade-slide-reverse" onClick={enterApp}>Let's Study</button>
        </div>
      </div>
    </div>
  );
}
