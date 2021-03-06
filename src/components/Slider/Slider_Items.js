import React, { Component } from 'react';
import Slider from 'react-slick';

class Slider_Items extends Component{
  constructor(props){
    super(props);
      const heros = [
          {
            nick : 'JS Ninja',
            ability : "skakanie między frameworkam'i",
            advantage:'pisanie na dwa fronty',
            gun:'trzy monitory',
            expirience:'wskrzeszanie umarłych stron',
            spec:'Lazymaster - task runnery to podstawa',
            avatar:require('../../images/ninja.svg')
          },
          {
            nick: 'Mrs.UX',
            ability: 'super wzrok do szczegołów',
            advantage:'dizajnerka z kazdej STRONY',
            gun:'pełny kubek kawy',
            expirience:'paleta kolorów w małym paluszku',
            spec:'Goldmaster - każdy projekt nominowany przez awwwards',
            avatar:require('../../images/MrsUX.svg')
          },
          {
            nick : 'BlindHat',
            ability:'pisanie z zamkniętymi oczami',
            advantage:'nocny marek',
            gun:'nexus 5 + kali linux NetHunter',
            expirience:'cracowanie gier + niewidzialność w sieci',
            spec:'Lockmaster - żadne hasło nie jest problemem',
            avatar:require('../../images/hax.svg')
          }
        ];
    var arrayWithHeros = [];
    for(var i in heros){
        arrayWithHeros.push(heros[i]);
    }
    this.state = {arrayWithHeros};
    }
    render(){
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          },
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
              <Slider {...settings} className="center text-center">
                {this.state.arrayWithHeros.map((person, index) => 
                  <div key={index} className="slider_box">
                  <h1>Super Hero</h1>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="bg-danger display-4 py-2 text-white">{person.nick}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <img className="w-25 mx-auto"src={person.avatar} alt="ninja" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <h5 className="text-muted">UMIĘJETNOŚCI</h5>
                            <p>{person.ability}</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                        <h5 className="text-muted">ZALETY</h5>
                            <p>{person.advantage}</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4">
                        <h5 className="text-muted">BROŃ</h5>
                            <p>{person.gun}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <h4 className="text-muted">DOŚWIADCZENIE</h4>
                            <p>{person.expirience}</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                        <h4 className="text-muted">SPECJALIZACJA</h4>
                            <p>{person.spec}</p>
                        </div>
                    </div>
                  </div>
                )}
            </Slider>
          </div>   
        );
      }
    };
export default Slider_Items;