import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import List from './List/List';
import Workspace from './Workspace/Workspace';
import {getInfo, postCustomer} from './services/getinfo.js';





class App extends Component {
  constructor() {
    super()
    this.state = {
      customerList: undefined,
      initialLoad: true,
      creating: false,
      currentCustomer: null
    }
    this.createNewCustomer = this.createNewCustomer.bind(this);
    this.createCustomer = this.createCustomer.bind(this);
  }

  createCustomer(customer){
    postCustomer(customer).then(response => {
    getInfo().then(list => {
      this.setState({
        initialLoad:true,
        creating: false,
        customerList: list
      })
    })
  }) 
  }

  componentDidMount(){
    getInfo().then(data => {
      this.setState({
        customerList:data
      })
    })
  }

  createNewCustomer(){
    this.setState({
      creating: true,
      initialLoad: false,
      currentCustomer: null
    })
  }


  render() {
    return (
      <div>
        <Header />
        <div className="App__container">
          {
            this.state.customerList ?
            <List
              customerList={this.state.customerList || []}
              createNewCustomer={this.createNewCustomer}
              />
            : null
          }
          <Workspace initialLoad={this.state.initialLoad}
                    currentCustomer={this.state.currentCustomer}
                    creating={this.state.creating}
                    createCustomer = {this.createCustomer}
                  />
        </div>
      </div>
    )
  }
}

export default App;
