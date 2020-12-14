<template>
  <div class="home">
    <ItemsListComponent
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";
import { MutationType, StoreModuleNames } from "@/models/store";
import { useItemsStore } from "@/store/items";

export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
  },
  setup() {
    const itemsStore = useItemsStore();
    const items = computed(() => {
      return itemsStore.state.items;
    });
    const loading = computed(() => {
      return itemsStore.state.loading;
    });

    const onSelectItem = (item: ItemInterface) => {
      itemsStore.action(MutationType.items.selectItems, {
        id: item.id,
        selected: !item.selected,
      });
    };

    onMounted(() => {
      itemsStore.action(MutationType.items.loadItems);
    });

    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>
