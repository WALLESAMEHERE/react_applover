import React, { Component } from 'react';

class Modal extends Component{
constructor() {
      super();
        this.state = {
            modalView:false
        };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.hideModal = this.hideModal.bind(this);
   }
   hideModal(){
      this.setState({
          modalView:false
      });
      this.props.hideModal(this.state.modalView);
   }

   handleSubmit(e) {
    e.preventDefault();
    const test = {
            email: this.refs.email.value,
            password: this.refs.password.value,
            phone: this.refs.phone.value,
            picture:'test',
            referral_code :'aalalal'
    }
    const currentUrl = "https://foodsi-stage.applover.pl/api/v1/auth";
        const myInit = {
            method: 'POST',
            mode: 'no-cors',
            cache: 'default',
            body: JSON.stringify(test)
        };
        console.log(myInit.body);
      fetch(currentUrl, myInit)
            .then(res => res.json())
            .catch(function(err) {
              console.log(err)
          });
  }
  render(){
    return (
      <div>
        <div className="modal d-flex align-items-center" >
          <div className="modal-dialog">
            <div className="modal-content ">


              <div className="modal-header justify-content-center">
                <h4 className="modal-title">Rejestracja</h4>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <form onSubmit={this.handleSubmit.bind(this)} data-toggle="validator" >
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input id="email" ref="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input id="password" ref="password" type="password" className="form-control" placeholder="Password" required/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input id="phone" ref="phone" type="tel" minLength="9" maxLength="14" className="form-control" placeholder="Phone Number" required />
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn-primary">Wyslij</button>
                          <button type="reset" className="btn btn-danger" onClick={this.hideModal}>Anuluj</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Modal;