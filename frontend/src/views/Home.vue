<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="userLoading">..loading</div>
    <div v-else>{{users}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import { User } from "../entities";

export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    
    store.dispatch('users/get')
    const users: ComputedRef<User> = computed(() => {
      return store.getters["users/getUser"];
    });
    const userLoading: ComputedRef<boolean> = computed(() => {
      return store.getters["users/getLoading"];
    });

    return {
      users,
      userLoading,
    };
  },
});
</script>
