// packages
import { css } from "uebersicht";
const fetch = require('node-fetch');

// local variables
let resData = [];
const header = new Headers({
  'Access-Control-Allow-Origin': '*/*'
  // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
});
let sentData={
  method: 'GET',
  mode: 'cors',
  header: header,
};

export const command = (dispatch) => {
  fetch('http://ap.meraki.com/index.json', header)
    .then((response) => {
      return response.json();
      dispatch({ type: 'FETCH_SUCCEDED', data: response.json() });
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_FAILED', error: error });
    });
  };

  export const refreshFrequency = 5000; // widget will run command once a second

// const box =css`
// backgroundColor: fff,
// `;
const list = Object.keys(command).map(key => {
  <li>{key}</li>;
});

export const render = resData => {
  return (
  <ul>
  {list}
  </ul>
  );
};