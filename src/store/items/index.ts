import { rootStore, dispatchModuleAction } from "@/store";
import { StoreModuleNames, ItemsStateInterface } from "@/models/store";

const itemsStore = {
  get state(): ItemsStateInterface {
    return rootStore.state.itemsState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.itemsState, actionName, params);
  },
};

export const useItemsStore = () => {
  return itemsStore;
};
