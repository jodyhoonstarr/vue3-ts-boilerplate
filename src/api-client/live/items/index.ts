import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel,
} from "@/models/api-client/items";

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: "/path/to/your/real/api/end/point",
};

// instantiate the ItemsApiClient pointing a the url that returns the static json mock data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls);

// export the instance
export default itemsApiClient;
