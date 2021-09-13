<template>
  <div class="py-2">
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-3 sm:px-0">
          <template v-if="loading">
            <div>loading</div>
          </template>
          <template v-else>
            <div class="">
              <ul role="list" class="divide-y divide-gray-200">
                <UserEditForm 
                  :id="$route.params.id"
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
import { User } from "../entities";
import UserEditForm from "./UserEditForm.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    UserEditForm,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    store.dispatch("users/get", route.params.id);
    const user: ComputedRef<{ data: User }> = computed(() => {
      localStorage.setItem("updateUser", JSON.stringify(user.value))
      return store.getters["users/getUser"];
    });

    const loading: ComputedRef<boolean> = computed(() => {
      return store.getters["users/getLoading"];
    });

    return {
      user,
      loading,
    };
  },
});
</script>

<style scoped>
</style>