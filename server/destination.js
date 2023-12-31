const axios = require('axios');
//
const headers = {
  'accept': 'application/json',
  'x-api-key': ''
};

const data = {
  name: 'My Destination',
  to_url: 'https://56cc-223-123-7-144.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));