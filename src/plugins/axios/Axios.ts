import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export default class Axios {
  private instance
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config)
		this.interceptors()
	}

	public request<T>(config: AxiosRequestConfig) {
		return this.instance.request(config)
		// return new Promise((resolve, reject) => {
		// 	try {
		// 		this.instance.request<D>(config)
		// 		resolve()
		// 	} catch (error) {
		// 		reject(error)
		// 	}
		// }) as Promise<D>
	}

	private interceptors() {
		this.interceptorsRequest()
		this.interceptorsResponse()
	}

	// 请求拦截
	private interceptorsRequest() {
		this.instance.interceptors.request.use(
		(config) => {
			return config;
		},
		(error) => {
			return Promise.reject(error);
		});
	}

	// 响应拦截  
	private interceptorsResponse() {
		this.instance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			return Promise.reject(error);
		});
	}
}