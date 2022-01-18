import axios, { AxiosResponse } from 'axios'

export default class Api {

  /** @description GET */
  static getApi = async (url: string): Promise<AxiosResponse> => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`)
  }

  /** @description POST */
  static postApi = async (url: string, data: any): Promise<AxiosResponse> => {
    try {
      return axios.post(`${process.env.REACT_APP_BASE_URL}/${url}`, data)
    } catch (error) {
      throw new Error(error)
    }
  }

  /** @description PUT */
  static putApi = async (url: string, data: any): Promise<void> => {
    try {
      axios.put(`${process.env.REACT_APP_BASE_URL}/${url}`, data)
    } catch (error) {
      throw new Error(error)
    }
  }
}

