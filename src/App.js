import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './API'
import styles from './App.module.css';
class App extends Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
    console.log(fetchedData)
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}> 
      <Cards data = {data} />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart />
      </div>
    );
  }
}
export default App;