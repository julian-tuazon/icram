import React from 'react';

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
    this.close();
    console.log('goodbye card!');
  }

  render() {
    const showModal = this.state.isOpen ? 'modal overlay d-block': 'modal overlay';

    // if (this.state.isOpen) {
      return (
        <>
          <div className="card-footer bg-dark">
            <i className="far fa-trash-alt btn text-secondary" onClick={this.open}></i>
          </div>

          <div className={showModal} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Delete Card</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.close}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    <i className="far fa-times-circle text-danger mr-2"></i>
                    Delete card?
                  </p>
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
    // }

    // return (
    //   <div className="card-footer bg-dark">
    //     <i className="far fa-trash-alt btn text-secondary" onClick={this.open}></i>
    //   </div>
    // );
  }
}
