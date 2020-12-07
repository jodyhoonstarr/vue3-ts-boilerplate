import { ItemsApiClientInterface } from "./items";

/**
 * @name ApiClientInterface
 * @description Interface wraps all api client modules
 */
export interface ApiClientInterface {
  items: ItemsApiClientInterface;
}
