<template>
  <div class="home">
    <Users/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue";
import Users from "../components/Users/User.vue"

export default defineComponent({
  components: {
    Users
  },
  setup() {


    return {
    
    };
  },
});
</script>
