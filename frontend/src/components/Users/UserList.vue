<template>
  <li>
    <router-link :to="`/user-edit/${user._id}`" class="block hover:bg-gray-50">
      <div class="flex items-center px-4 py-4 sm:px-6">
        <div class="min-w-0 flex-1 flex items-center">
          <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <p class="text-sm font-medium text-indigo-600 truncate">
                {{ user.name }}
              </p>
              <p class="mt-2 flex items-center text-sm text-gray-500">
                <MailIcon
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span class="truncate">{{ user.email }}</span>
              </p>
            </div>
            <div class="hidden md:block">
              <div>
                <p class="text-sm text-gray-900">
                  Title :
                  {{ " " }}
                  <time>{{ user.title }}</time>
                </p>
                <p class="mt-2 flex items-center text-sm text-gray-500">
                  <CheckCircleIcon
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                  {{ user.birthdate }}
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <button type="submit" class=" text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm ">Edit</button>
      </div>
    </router-link>
  </li>
</template>

<script lang="ts">
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
} from "@heroicons/vue/solid";
import { User } from "../../entities";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  components: {
    CheckCircleIcon,
    ChevronRightIcon,
    MailIcon,
  },
  props: {
    user: {
      required: true,
      type: Object as PropType<User>,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>