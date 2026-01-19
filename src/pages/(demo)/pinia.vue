<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

definePage({
  meta: {
    layout: 'sidebar',
  },
});

const counter = useCounterStore();
const { count, double } = storeToRefs(counter);
</script>

<template>
  <div class="space-y-4 p-6">
    <h1 class="text-2xl font-bold">Pinia 示例</h1>
    <div class="space-y-2">
      <p>当前计数：{{ count }}</p>
      <p>计数 × 2：{{ double }}</p>
    </div>
    <div class="flex gap-2">
      <Button @click="counter.increment()">+1</Button>
      <Button variant="outline" @click="counter.reset()">重置</Button>
    </div>
  </div>
</template>
