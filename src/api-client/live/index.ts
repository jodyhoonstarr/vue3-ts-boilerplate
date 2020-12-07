import { ApiClientInterface } from "@/models/api-client/ApiClient.interface";
import itemsApiClient from "./items";

// create an instance of our main ApiClient that wraps the mocked child
const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient,
};

export default apiLiveClient;
