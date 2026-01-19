<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import SidebarLayout from '@/layouts/SidebarLayout.vue';
import { Toaster } from '@/components/ui/sonner';

const resolveLayout = (name: unknown) => {
  return name === 'sidebar' ? SidebarLayout : DefaultLayout;
};
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="resolveLayout(route.meta.layout)">
      <component :is="Component" />
    </component>
  </RouterView>
  <Toaster position="bottom-right" />
</template>
