<template>
  <div class="py-2">
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-3 sm:px-0">
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Update User</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Update an existing user</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <form @submit.prevent="onSubmit">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" v-model="userData.name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" v-model="userData.email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="password" name="password" v-model="userData.password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="Title" class="leading-7 text-sm text-gray-600">Title</label>
                    <input type="text" id="Title" name="Title" v-model="userData.title" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="Birthdate" class="leading-7 text-sm text-gray-600">Birthdate</label>
                    <input type="text" id="Birthdate" name="Birthdate" v-model="userData.birthdate" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>

                <div class="p-2 w-full">
                  <button type="submit" class="mr-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
                  <button type="submit" class=" text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg  " @click="deleteUser($route.params.id)">Delete</button>
                  
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
import { defineComponent, computed, ComputedRef, reactive, toRefs, PropType , onMounted} from "vue";
import { useStore } from "vuex";
import {useRoute} from 'vue-router'
import { User } from "../entities";


export default defineComponent({
  components: {},
  props: {
    id: {
      type: String,
    },
    user : {
      required: true,
      type: Object as PropType<User>,
    },
  },
  setup(props) {

    const store = useStore()
    const route = useRoute()



    const update = reactive({
        userData : {} as any
    })


    onMounted(() => {
      localStorage.setItem("updateUser", JSON.stringify(props.user))
      if (localStorage.getItem("updateUser")) {
        try {
          update.userData = JSON.parse(localStorage.getItem("updateUser")!)
        } catch (e) {
          localStorage.removeItem("updateUser")
        }
      }
    })

    const onSubmit = () => {
      console.log(update.userData)
      store.dispatch('users/patch', {
        id: route.params.id,
        data : update.userData
      })
    }

    function deleteUser(id:string) {
        store.dispatch('users/delete', id)
    }

    return {
      onSubmit,
      ...toRefs(update),
      deleteUser
    };
  },
});
</script>