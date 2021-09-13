<template>
  <div class="py-2">
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-3 sm:px-0">
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">New User</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Register a new user</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <form @submit.prevent="onSubmit">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" v-model="name" required class="w-full bg-gray-100 req bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" v-model="email"  required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="password" name="password" required v-model="password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="Title" class="leading-7 text-sm text-gray-600">Title</label>
                    <input type="text" id="Title" name="Title" v-model="title" required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="Birthdate" class="leading-7 text-sm text-gray-600">Birthdate</label>
                    <input type="text" id="Birthdate" name="Birthdate" required="true" v-model="birthdate" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>

                <div class="p-2 w-full">
                  <button type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                  
                </div>
              </div>
              </form>
            </div>
          </div>
        </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, reactive, toRefs } from "vue";
import { useStore } from "vuex";


export default defineComponent({
  components: {},
  setup() {

    const store = useStore()

    const data = reactive({
      name : "",
      email: "",
      password: "",
      title: "",
      birthdate : ""
    })

    const onSubmit = () => {
      console.log(data)
      store.dispatch('users/post', data)
    }
    return {
      onSubmit,
      ...toRefs(data)
    };
  },
});
</script>