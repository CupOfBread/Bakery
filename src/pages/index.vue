<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-vue-next';

const router = useRouter();
const goToPinia = () => {
  router.push('/pinia');
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <AuroraBackground>
    <div class="relative items-center justify-center px-4 flex gap-2">
      <Icon icon="mdi:home" class="size-5" />
      <Button
        variant="outline"
        @click="
          () =>
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
              },
            })
        "
      >
        Show Toast
      </Button>

      <Button variant="outline" @click="goToPinia"> Pinia 示例</Button>
      <Button variant="outline" @click="goToLogin"> Login 示例</Button>
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="sm"> 1 </Button>
          <Button variant="outline" size="sm"> 2 </Button>
          <Button variant="outline" size="sm"> 3 </Button>
          <Button variant="outline" size="sm"> 4 </Button>
          <Button variant="outline" size="sm"> 5 </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon-sm" aria-label="Previous">
            <ArrowLeftIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Next">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  </AuroraBackground>
</template>

<style scoped></style>
