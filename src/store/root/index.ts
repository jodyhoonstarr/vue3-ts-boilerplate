import { createStore, StoreOptions } from "vuex";

import { RootStateInterface, RootStoreModel } from "@/models/store";

import { initialRootState } from "@/store/root/initialState";

import { itemsState } from "@/store/items/module";

const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,

  modules: {
    itemsState,
  },
};

export const rootStore: RootStoreModel<RootStateInterface> = <any>(
  createStore(storeOptions)
);

// Private helper to dispatch an action to a Vuex module from one place so we keep the string interpolation for `${moduleName}/${actionName}` in one place only and be able to dispatch action with less code in a strongly-type way
export function dispatchModuleAction<T>(
  moduleName: string,
  actionName: string,
  params?: T
): void {
  // rename store.dispatch here to rootStore.dispatch
  rootStore.dispatch(`${moduleName}/${actionName}`, params);
}
