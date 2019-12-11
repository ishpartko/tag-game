<template>
  <section class="end-screen">
    <h1 class="end-text">
      {{endText}}
    </h1>
    <GameButton @click="$emit('new-game')">
      Начать заново
    </GameButton>
  </section>
</template>

<script>
import GameButton from '@/components/GameButton.vue'
import { typeOfEnd } from '@/helpers/types'
export default {
  components: {
    GameButton
  },
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return Object.values(typeOfEnd).includes(value) 
      }     
    }
  },
  computed: {
    endText() {
      switch(this.type) {
        case typeOfEnd.endWin:
          return 'Победа'
        case typeOfEnd.endLose:
          return 'Поражение'
      }
      return ''
    }
  }
}
</script>

<style scoped>

.end-text {
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #5742D7;
  margin-bottom: 100px;
}
</style>