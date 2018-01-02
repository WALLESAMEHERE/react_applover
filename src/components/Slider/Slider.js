        

import React, { Component } from 'react';

import Slider_Items from './Slider_Items'

class SliderContainer extends Component{
  render(){
    return (
      <div>
          <section>
              <div className="container">
                <div className="row">
                  <div className="col-6 offset-3">
                      <div className="slider_cont d-flex align-items-center justify-content-center">
                        <div className="slider_cont_center">
                            <Slider_Items />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </section>
      </div>
    );
  }
};
export default SliderContainer;