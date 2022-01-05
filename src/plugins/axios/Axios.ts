import axios, { AxiosRequestConfig } from 'axios'

export class Axios {
  private instance
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config)
		this.interceptors()
	}

	public request<T>() {
		// this.instance.request<ResponseResult<T>>(config)
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