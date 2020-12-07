import { ApiClientInterface } from "@/models/api-client/ApiClient.interface";
import itemsApiClient from "@/api-client/mock/items";

// create an instance of our main ApiClient that wraps the mocked child
const apiMockClient: ApiClientInterface = {
  items: itemsApiClient,
};

export default apiMockClient;
