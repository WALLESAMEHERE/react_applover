        

import React, { Component } from 'react';
import Slider from 'react-slick';
// import Slider_Items from './Slider_Items'

class SliderContainer extends Component{
  render(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }
  
    return (
      <div>
          <section>
              <div className="container">
                <div className="row">
                  <div className="col-6 offset-3">
                      <div className="slider_cont d-flex align-items-center justify-content-center">
                        <div className="slider_cont_center">
                          <Slider {...settings} className="center">
                                {/* zabraklo czasu - juz rano;/ <Slider_Items />*/}
                                <div className="slider_box"><img src='http://placekitten.com/g/400/200' alt="cat" /></div>
                                <div className="slider_box"><img src='http://placekitten.com/g/400/200' alt="cat"/></div>
                                <div className="slider_box"><img src='http://placekitten.com/g/400/200' alt="cat"/></div>
                                <div className="slider_box"><img src='http://placekitten.com/g/400/200' alt="cat"/></div> 
                            </Slider>
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