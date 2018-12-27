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

  render() {
    return (
      <div>
        <Description car={this.state.car} />
        <Popup></Popup>
      </div>
    )
  }
}

export default App;

