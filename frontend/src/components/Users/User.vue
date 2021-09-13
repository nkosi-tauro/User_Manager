<template>
  <div class="py-10">
    <header>
   <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-1" >
      <div class="sm:flex sm:items-start sm:justify-between">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">Users</h1>
        </div>
        <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <router-link type="button" to="/user-add" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" >Add User</router-link>
        </div>
      </div>
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