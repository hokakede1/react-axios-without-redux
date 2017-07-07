import axios from 'axios';
import apiURL from '../../api'


export function getInfo() {
     return axios.get('http://localhost:3005/customers')
    .then(response => {return response.data})
}

export const postCustomer = function(customer) {
    return axios.post(apiURL, customer).then(response => {
        return response.data;
    })
}