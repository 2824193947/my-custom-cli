import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export default class Axios {
  private instance
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config)
		this.interceptors()
	}
	// <T 传入的类型, D 最终给axios返回的类型 = ResponseResult 定义的返回类型<T>>
	public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig<D>) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await this.instance.request<D>(config)
				resolve(response.data)
			} catch (error) {
				reject(error)
			}
		}) as Promise<D>
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