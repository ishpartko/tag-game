<template>
  <GameButton @click="$emit('new-game')">
    Начать игру
  </GameButton>
</template>

<script>
import GameButton from "@/components/GameButton.vue";

export default {
  components: {
    GameButton
  }
};
</script>

<style></style>
