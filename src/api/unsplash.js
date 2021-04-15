import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID gOWFFhKusK9Ql74ZwV48wuMwEcpLWqdSDJWV03nGX5Y',
	},
});
