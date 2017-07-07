import React from 'react';
import './CreateCustomer.css';

export default function CreateCustomer(  { createNewCustomer }  ) {
  return (
    <div id="CreateCustomerBtn__container">
      <button id="CreateCustomer__btn" onClick={ createNewCustomer }> New Customer </button>
    </div>
  )
}
