import React, { Component } from 'react';
import './style/App.css';
import Nav from './components/nav/Nav'
import Modal from './components/modalForm/Modal';
import SliderContainer from './components/Slider/Slider';

class App extends Component {
	constructor() {
	    super();
	      this.state = {
	          modalView:true
	      };
	       this.hideModal = this.hideModal.bind(this);     
	 }
    hideModal(a){
		this.setState({
			modalView:a
		});
  	}
 	render(){
      return(
      	<div>
      	 	<Nav hideModal={this.hideModal}/>
      		{this.state.modalView ? <Modal hideModal={this.hideModal} /> : null }
      	  	<SliderContainer />
      	</div>
        );
  	}
}
export default App;


