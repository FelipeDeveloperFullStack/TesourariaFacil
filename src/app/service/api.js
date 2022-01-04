import axios from 'axios'

const instance = ({ url, data, method }) => {
  return axios.create({ baseURL: 'http://localhost:5000/', url, method: method, data })
}

const getApi = ({ url, data }) => {
  instance({ url, data, method: 'GET' })
}
const postApi = () => {
  instance({ url, data, method: 'POST' })
}
const putApi = () => {
  instance({ url, data, method: 'PUT' })
}

export default { getApi, postApi, putApi }