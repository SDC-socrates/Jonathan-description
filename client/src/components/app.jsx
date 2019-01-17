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
    this.getOneData = this.getOneData.bind(this);
    this.handleMoreClick.bind(this);
  }

  componentDidMount() {
    console.log('helooooo')
    this.getOneData();
  }

  changeToArray(obj) {
    return Object.keys(obj).map(key => {
      return obj[key];
    });
  }

  getOneData() {
    var id = window.location.pathname.slice(1, window.location.pathname.length - 1);
    if (!id) { id = 1; }
    axios.get(`/api/turash/description/${id}`)
      .then((response) => {
        console.log(response.data, 'RESPONSE')
        this.setState({
          car: this.changeToArray(response.data[0])
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleMoreClick(event, more, btn, transparent) {
    event.preventDefault();
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(btn);
    var tranText = document.getElementById(transparent);
    if (btnText.innerText === "More") {
      btnText.innerText = "Less";
      moreText.style.display = "inline";
      tranText.style.opacity = 1;
    } else {
      btnText.innerText = "More";
      moreText.style.display = "none";
      tranText.style.opacity = 0.5;
    }
  }

  render() {
    console.log(this.state.car);
    return (
      <div>
        <Description car={this.state.car} handleMoreClick={this.handleMoreClick} handleMoreClick2={this.handleMoreClick2} />
        <Popup></Popup>
      </div>
    )
  }
}

export default App;

