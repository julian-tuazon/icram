import React from 'react';
import { AppContext } from './app-context';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  deleteCard() {
    this.context.deleteCard(this.props.card);
    this.close();
  }

  render() {
    const modalClassName = this.state.isOpen ? 'modal overlay d-block' : 'modal overlay';

    return (
      <>
        <div className="card-footer bg-dark">
          <i className="far fa-trash-alt btn text-secondary" onClick={this.open}></i>
        </div>

        <div className={modalClassName} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete Card</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.close}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <i className="far fa-times-circle text-danger mr-2"></i>
                    Are you sure you want to delete this card?
                  </div>
                <div>
                  <span className="font-weight-bold">Q:</span> {this.props.card.question}
                </div>
                <div>
                  <span className="font-weight-bold">A:</span> {this.props.card.answer}
                </div>
              </div>
              <div className="modal-footer">
                <div className="btn-group w-75 mx-auto">
                  <button type="button" id="remove" className="btn btn-outline-danger w-25" onClick={this.deleteCard}>Delete</button>
                  <button type="button" id="cancel" className="btn btn-outline-secondary w-25" onClick={this.close} data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Modal.contextType = AppContext;
