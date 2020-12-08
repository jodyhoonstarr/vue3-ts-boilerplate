import { HttpRequestParamsInterface } from "@/models/http-client/HttpRequestParams.interface";

/**
 * @name HttpRequestParamsInterface
 * @description Interface for the HttpClient wrapper
 */
export interface HttpClientInterface {
  get<T>(parameters: HttpRequestParamsInterface): Promise<T>;
  post<T>(parameters: HttpRequestParamsInterface): Promise<T>;
}
