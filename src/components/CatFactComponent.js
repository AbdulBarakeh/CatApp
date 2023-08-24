import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/CatFactApp.css'; // Import your CSS file for styling

class CatFactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catFact: ''
    };
  }

  componentDidMount() {
    this.fetchCatFact();
  }

  fetchCatFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      const fact = response.data.fact;
      this.setState({ catFact: fact });
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Cat Fact of the Day</h1>
        <div className="fact-box">
          <p className="fact">{this.state.catFact}</p>
        </div>
        <button className="refresh-button" onClick={this.fetchCatFact}>
          Get Another Cat Fact
        </button>
      </div>
    );
  }
}

export default CatFactApp;
