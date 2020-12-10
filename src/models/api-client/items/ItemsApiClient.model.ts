import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client";

import { ItemsApiClientUrlsInterface } from "@/models/api-client/items/ItemsApiClientUrls.interface";
import { ItemsApiClientInterface } from "@/models/api-client/items/ItemsApiClient.interface";
import { ItemInterface } from "@/models/items/Item.interface";

export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly urls!: ItemsApiClientUrlsInterface;

  constructor(urls: ItemsApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchItems(): Promise<ItemInterface[]> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchItems,
      requiresToken: false,
    };
    return HttpClient.get<ItemInterface[]>(getParameters);
  }
}
