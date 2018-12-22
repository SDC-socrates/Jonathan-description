import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: []
    }

    this.getOneData.bind(this);
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
        <Description car={this.state.car}/>
      </div>
    )
  }
}

export default App;

