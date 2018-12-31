import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description.jsx';
import Popup from './Popup.jsx';
import axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: []
    }

    this.handleMoreClick.bind(this);
  }

  componentDidMount() {
    this.getOneData();
  }

  changeToArray(obj) {
    return Object.keys(obj).map(key => {
      return obj[key];
    });
  }

  getOneData() {
    axios.get('/api/turash/description/1')
    .then((response) => {
      this.setState({
        car: this.changeToArray(response.data)
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  handleMoreClick(event, more, btn) {
    event.preventDefault();
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(btn);

    if (btnText.innerText === "More") {
      btnText.innerText = "Less";
      moreText.style.display = "inline";
    } else {
      btnText.innerText = "More";
      moreText.style.display = "none";
    }
  }

  render() {
    return (
      <div>
        <Description car={this.state.car} handleMoreClick={this.handleMoreClick} handleMoreClick2 = {this.handleMoreClick2}/>
        <Popup></Popup>
      </div>
    )
  }
}

export default App;

