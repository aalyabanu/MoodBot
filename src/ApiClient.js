import axios from 'axios'
//for testing
//let url = "http://localhost:8000/watson"
let url = "https://chat-bot-ap.herokuapp.com/watson/"

export class ApiClient {
        constructor(props) {
                this.state = {
                        sessionID: null
                }
        }

authenticatedCall = (method, url, data) => {
        return axios({
                method, url,
                header: { session_id: this.sessionID },
                data
        })
        .catch((error) => {
                if (error.response.status === 403) {
                        return Promise.reject()
                } else { throw error; }
        })
}

status(response) {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else { return Promise.reject(new Error(response.statusText)) }
      }

getSessionID = () => {
        this.authenticatedCall('get', url)
        .then((response) => {
                this.setState(() => ({
                        sessionID: response.header.session_id
                }))
        })
}

sendMessage = (message) => {
        this.authenticatedCall('post', url, message)
}

}