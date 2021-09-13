<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <template v-if="loading">
      <UserListSkeleton v-for="index in 5" :key="index" />
    </template>
    <template v-else>
      <UserList 
        v-for="user in users.data"
        :key="user._id"
        :user="user"
        :loading="loading"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watchEffect } from "vue";
import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import { User } from "../../entities";
import UserList from "./UserList.vue";
import UserListSkeleton from "./UserListSkeleton.vue";

export default defineComponent({
  components: {
    UserList,
    UserListSkeleton,
  },
  setup() {
    const store = useStore();

    store.dispatch("users/get");
    const users: ComputedRef<{data : User[]}> = computed(() => {
      return store.getters["users/getUser"];
    });
    const loading: ComputedRef<boolean> = computed(() => {
      return store.getters["users/getLoading"];
    });

    return {
      users,
      loading,
    };
  },
});
</script>

<style scoped>
</style>