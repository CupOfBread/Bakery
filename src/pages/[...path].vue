<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4">
    <h1 class="text-3xl font-bold">404 - 页面不存在</h1>
    <p class="text-muted-foreground">你访问的页面走丢了，看看别的内容吧</p>
    <RouterLink to="/">
      <Button variant="outline">返回首页</Button>
    </RouterLink>
  </div>
</template>
