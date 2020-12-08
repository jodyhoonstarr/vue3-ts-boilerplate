/**
 * @name HttpRequestParamsInterface
 * @description HttpClient request parameters for get/post/put/etc.
 */
export interface HttpRequestParamsInterface {
  url: string;
  requiresToken: boolean;
  payload?: any;
}
