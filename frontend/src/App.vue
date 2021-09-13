<template>
  <div id="nav">
    <Navigation/>
    <router-view/>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import { User } from "./entities";
import Navigation from "./components/Navigation/Navigation.vue"

export default defineComponent({
  components: {
    Navigation
  },
  setup() {
    

    return {
    };
  },
});
</script>

<style>

</style>
