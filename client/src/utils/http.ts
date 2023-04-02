import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

class HttpService {
    private service: AxiosInstance;
    constructor() {
        const service = axios.create({
            baseURL: process.env.API_HOST || "",
            headers: {
                "Content-Type": "application/json"
            },
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    handleSuccess(response: AxiosResponse) {
        return response;
    }

    handleError(error: AxiosError) {
        if(error.response){
            switch (error.response.status) {
                case 404:
                // Not found
                this.redirectTo("/404");
                break;
            }
        }
        return Promise.reject(error);
    }

    redirectTo(url: string) {
        window.location.href = url;
    }

    get(...args: any) {
        // @ts-ignore
        return this.service.get(...args);
    }

    post(...args: any) {
        // @ts-ignore
        return this.service.post(...args);
    }

    put(...args: any) {
        // @ts-ignore
        return this.service.put(...args);
    }

    patch(...args: any) {
        // @ts-ignore
        return this.service.patch(...args);
    }

    delete(...args: any) {
        // @ts-ignore
        return this.service.delete(...args);
    }
}

export default new HttpService();