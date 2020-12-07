import { ItemInterface } from "@/models/items/Item.interface";

/**
 * @name ItemsApiClientInterface
 * @description Interface for the Items API client module
 */
export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>;
}
