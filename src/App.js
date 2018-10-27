import React, { Component } from 'react';
import './App.css';
import card from "./Components/FriendCard";
import wrapper from "./Components/wrapper";
import cards from "./cards.json";
import Header from "./Components/header";


class App extends Component {

    state = {
      cards,
      score : 0 ,
        highscore : 0
    };

    lose = () =>{
      if (this.state.score > this.state.highscore) {
        this.setState({highscore : this.state.score} , function(){
          console.log(this.state.score)
        });
      }
      this.state.cards.forEach(card =>{
        card.count = 0;
      });
      alert(`you lose, your score was ${this.state.score}`)
      this.setState({score : 0})
      return true
    }

    clickinc = id =>{
      this.state.cards.find((obj,i) =>{
        if(obj.id == id){
          if (cards[i].count == 0 ) {
            cards[i].count = cards[i].count + 1;
            this.setState({score : this.state.score + 1}, function(){
              console.log(this.state.score);
            });
            this.state.cards.sort(() => Math.random() - 0.5)
            return true
          }else{
            return this.lose()
          }
        }
      });
    }

  render() {
    return (
      <wrapper>
      <Header score ={this.state.score} highscore={this.state.highscore}>rick and morty memory game</Header>
      {this.state.cards.map(card =>(
        <card
        clickinc = {this.clickinc}
        id = {card.id}
        key = {card.name}
        image = {card.image}
        />
      ))}
    </wrapper>
    );
  }
}

export default App;
