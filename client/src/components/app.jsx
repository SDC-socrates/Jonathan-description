import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description.jsx';
import axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: []
    }

    this.handleQClick.bind(this);
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

  handleQClick(event) {
    event.preventDefault();
    console.log('clicked');

  }

  render() {
    return (
      <div>
        <Description car={this.state.car} handleQClick={this.handleQClick}/>
        <div id="popup1" className="overlay">
          <div className="popup">
            <h2>Here i am</h2>
            <a className="close" href="#">&times;</a>
            <div className="content">
              Thank to pop me out of that button, but now i'm done so you can close this window.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

