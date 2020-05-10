import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID YkfGye5e8CQgg1w9fs2YjQgz3wDEe9Eb2reHOj0YcJI',
	}
})