import React, { Component } from 'react';
import './List.css';

import Customer from './Customer/Customer';
import CreateCustomer from './CreateCustomer/CreateCustomer';


class List extends Component {

  render() {
    const {
      customerList,
      createNewCustomer
    } = this.props;

    const CustomerComponents = customerList.map( customer => (
      <Customer
        key={ customer.id }
        id={ customer.id }
        first={ customer.first }
        last={ customer.last }
      />
    ));

    return (
      <div id="List__container">
        {
            <div id="List__namesContainer">
              { CustomerComponents }
              <CreateCustomer createNewCustomer={createNewCustomer} />
            </div>
        }
      </div>
    )
  }
}

export default List;
