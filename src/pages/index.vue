/*
route

meta:
  string: "路由信息可以放这里"
  url: "https://github.com/hannoeru/vite-plugin-pages#jsxtsx-yaml-format-comments-for-route-datain-vue"
*/
<script setup lang="ts">
import { useStore } from '../store'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const route = useRouter()
const { Demo } = storeToRefs(useStore())
function clickToPage(path: string) {
  route.push({
    path: path,
  })
}
</script>

<template>
  <div class="text-center pt-8">
    <img
      src="https://camo.githubusercontent.com/7d3a030b097c7aa9396f5bb0f1684a6ecb7527ce25708691fcfda52697a4b68e/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f30303549384358696c7931683637383963697564646a333039383039387133662e6a7067"
      alt="Bakery"
      class="mx-auto"
    />
    <h1 class="text-4xl my-6">Bakery</h1>
    <p>Build web applications at extremely fast speed.</p>
    <p class="my-5">
      <span
        class="text-gray-400 hover:cursor-pointer hover:text-gray-300"
        @click="clickToPage('/hi/hello')"
      >{{Demo.msg}}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
</style>
