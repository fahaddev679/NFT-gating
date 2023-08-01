//75ba19df-f16a-478b-b34a-d01055698868
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_3349797ac9b44bdabe55f63ca6dc4853'
};

const data = {
  name: 'NFT Transfer',
  expression: '',
  network: 'ethereum-sepolia',
  destinationIds: ['']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

//(tx_logs_topic1 =~ '') && 
//(tx_logs_address == '') && 
//(tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')