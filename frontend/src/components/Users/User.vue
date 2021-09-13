<template>
  <div class="py-10">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Users</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <template v-if="loading">
            <UserListSkeleton v-for="index in 5" :key="index" />
          </template>
          <template v-else>
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
              <ul role="list" class="divide-y divide-gray-200">
                <UserList
                  v-for="user in users.data"
                  :key="user._id"
                  :user="user"
                  :loading="loading"
                />
              </ul>
            </div>
          </template>
        </div>
      </div>
    </main>
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
    const users: ComputedRef<{ data: User[] }> = computed(() => {
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