import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// 自定义请求返回数据的类型
interface ApiData<T> {
    data: T;
    returnCode: string;
    success: boolean;
}

interface InterceptorHooks {
    requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
    requestInterceptorCatch?: (error: any) => any;
    responseInterceptor?: (response: AxiosResponse) => AxiosResponse;
    responseInterceptorCatch?: (error: any) => any;
}

interface InterceptorHooks {
    requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
    requestInterceptorCatch?: (error: any) => any;
    responseInterceptor?: (response: AxiosResponse) => AxiosResponse;
    responseInterceptorCatch?: (error: any) => any;
}

interface ApiRequestConfig extends AxiosRequestConfig {
    showLoading?: boolean
    interceptorHooks?: InterceptorHooks
}

class ApiRequest {
    config: AxiosRequestConfig;
    interceptorHooks?: InterceptorHooks
    showLoading?: boolean
    // loading?: ILoadingInstance
    instance: AxiosInstance;

    constructor(options: AxiosRequestConfig ) {
        this.config = options;
        this.instance = axios.create(options);
    }

    // 类型参数的作用，T决定AxiosResponse实例中data的类型
    request<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance
                .request<any, ApiData<T>>(config)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    get<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return this.request({ ...config, method: 'GET' });
    }

    post<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return this.request({ ...config, method: 'POST' });
    }

    delete<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return this.request({ ...config, method: 'DELETE' });
    }

    patch<T = any>(config: AxiosRequestConfig ): Promise<T> {
        return this.request({ ...config, method: 'PATCH' });
    }

    setupInterceptor(): void {
        this.instance.interceptors.request.use(
            this.interceptorHooks?.requestInterceptor,
            this.interceptorHooks?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptorHooks?.responseInterceptor,
            this.interceptorHooks?.responseInterceptorCatch
        )

        this.instance.interceptors.request.use((config) => {
            //设置loading
            if (this.showLoading) {
                // this.loading = ElLoading.service({
                //     lock: true,
                //     text: 'Loading',
                //     spinner: 'el-icon-loading',
                //     background: 'rgba(0, 0, 0, 0.7)'
                // })
            }
            return config
        })

        this.instance.interceptors.response.use(
            // 请求完毕，关闭loading
            (res) => {
                //this.loading?.close()
                return res
            },
            (err) => {
                //this.loading?.close()
                return err
            }
        )
    }
}

export default ApiRequest
