const config = require('./config.json');
const axios = require('axios');

module.exports = {
	reloadRequest: async function () {
		// Create authorization code
		const auth = 'Basic ' + Buffer.from(config.mad_username + ':' + config.mad_password).toString('base64');
		// Create URL
		const url = config.mad_url + "/reload";
		const options = {
			'method': 'GET',
			'url': url,
			'headers': {
				'Authorization': auth,
			},
		};

		try {
			const response = await axios(options);
			if (response.status == 200) {
				console.log('Status: ' + response.status);
			}
			return response.status;
		}
		catch (error) {
			if (error.response) {
				console.log('Response error');
				console.log(error.response.status);
				console.log(error.response.headers);
			}
			else if (error.request) {
				console.log('Request error');
				console.log(error.request);
			}
			else {
				console.log('Other error');
				console.log('Error', error.message);
			}
			console.log('Nog een error?');
			console.log(error);
		}
		return 0;
	},
};