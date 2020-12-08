import { HttpClientInterface } from "@/models/http-client/HttpClient.interface";
import { HttpRequestParamsInterface } from "@/models/http-client/HttpRequestParams.interface";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpClientModel implements HttpClientInterface {
  private static getToken(): string {
    const TOKEN_KEY =
      process.env && process.env.VUE_APP_API_CLIENT
        ? process.env.VUE_APP_API_CLIENT
        : "myapp-token";
    return localStorage.getItem(TOKEN_KEY) ?? "";
  }

  constructor() {
    //Optional for now: Add request interceptor to handle errors or other things for each request in one place
  }

  get<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters;

      //axios options
      const options: AxiosRequestConfig = {
        headers: {},
      };

      if (requiresToken) {
        options.headers.RequestVerificationToken = HttpClientModel.getToken();
      }

      axios
        .get(url, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((response: AxiosResponse) => {
          console.info("----rejecting----");
          reject(response);
        });
    });
  }
  post<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken, payload } = parameters;

      //axios options
      const options: AxiosRequestConfig = {
        headers: {},
      };

      if (requiresToken) {
        options.headers.RequestVerificationToken = HttpClientModel.getToken();
      }

      axios
        .post(url, payload, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((response: AxiosResponse) => {
          reject(response);
        });
    });
  }
}
