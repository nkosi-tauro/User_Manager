<template>
  <div class="home">
    <div v-if="userLoading">..loading</div>
    <div v-else>{{users}}</div>
    <Users/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import { User } from "../entities";
import Users from "../components/Users/User.vue"

export default defineComponent({
  components: {
    Users
  },
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
