<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li >
        <a  class="block hover:bg-gray-50">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <div class="w-5 h-5 bg-gray-200 rounded"></div>
                  <div class="w-5 h-5 bg-gray-200 rounded"></div>
                </div>
                <div class="hidden md:block">
                  <div>
                    <div class="w-5 h-5 bg-gray-200 rounded"></div>
                    <div class="w-5 h-5 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="w-5 h-5 bg-gray-200 rounded"></div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
     
    }
  },
})
</script>