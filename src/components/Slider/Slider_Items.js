import React, { Component } from 'react';

class Slider_Items extends Component{

  render(){
      const heroes = {
      1:{
        nick : 'JS Ninja',
        ability : 'skakanie z frameworka na framework',
        advantage:'nadludzka prędkość pisania',
        gun:'trzy monitory',
        expirience:'wskrzeszanie umarłych stron',
        spec:'Lazymaster - task runnery to podstawa'
      },
      2:{
        nick: 'Mrs.UX',
        ability: 'super wzrok do szczegołów',
        advantage:'paleta kolorów w małym paluszku',
        gun:'pełny kubek kawy',
        expirience:'nowy projekt zwiększa paletę kolorów',
        spec:'Goldmaster - każdy projekt nominowany przez awwwards'
      },
      3:{
        nick : 'Blind Hat',
        ability:'pisanie z zamkniętymi oczami',
        advantage:'nocny marek',
        gun:'nexus 5 + kali linux NetHunter',
        expirience:'cracowanie gier + niewidzialność w sieci',
        spec:'Lockmaster - żadne hasło nie jest problemem'
      },
    }
 
    return (
      <div>
        // petla z obj heroes
      </div>   
    );
  }
};
export default Slider_Items;