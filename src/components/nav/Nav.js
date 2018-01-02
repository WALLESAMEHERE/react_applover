import React, { Component } from 'react';

class Nav extends Component{
  constructor() {
      super();
        this.state = {
            modalView:false
        };
   }
    showModalForm(){
          this.state.modalView ? this.setState({modalView:false}) : this.setState({modalView:true})
          this.props.hideModal(this.state.modalView);
    }
  render(){
    return (
    <div>
      <nav className="navbar fixed-top nav-bg">
            <div className="container"> 
              <ul className="nav justify-content-end nav-pills">
                <li className="nav-item"><a className="navbar-brand text-white mx-auto" data-toggle="modal" data-target="#exampleModalCenter" href="#">Zaloguj</a>
                </li>
                <li className="nav-item" onClick={this.showModalForm.bind(this)}><a className="navbar-brand text-white mx-auto" href="#">Zarejestruj</a>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    );
  }
};
export default Nav;