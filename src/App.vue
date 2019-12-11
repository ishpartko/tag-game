<template>
  <div 
    id="app"
    class="tag-game-app"
  >
    <BeginScreen
      v-if="screenName === typesOfScreen.begin"
      @new-game="onNewGame"
    ></BeginScreen>
    <GameBox 
      :seconds-to-end="180"
      @lose="onLose"
      @win="onWin"
      v-else-if="screenName === typesOfScreen.game"
    />
    <EndScreen 
      v-else-if="screenName === typesOfScreen.endLose || screenName === typesOfScreen.endWin"
      @new-game="onNewGame"
      :type="screenName"
    ></EndScreen>
  </div>
</template>

<script>
import 'reset-css';
import GameBox from '@/components/GameBox.vue'
import BeginScreen from '@/components/BeginScreen.vue'
import EndScreen from '@/components/EndScreen.vue'
import { typesOfScreen } from '@/helpers/types'

export default {
  name: 'app',
  components: {
    GameBox,
    EndScreen,
    BeginScreen
  },
  data() {
    return {
      screenName: typesOfScreen.begin
    }
  },
  computed: {
    typesOfScreen() {
      return typesOfScreen
    }
  },
  methods: {
    onWin() {
      this.screenName = typesOfScreen.endWin
    },
    onLose() {
      this.screenName = typesOfScreen.endLose
    },
    onNewGame() {
      this.screenName = typesOfScreen.game
    }
  }
}
</script>

<style scoped>
.tag-game-app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {
  --main-color: #5742D7;
  --accent-color: #92F1CF;
  --light-color: #FFFFFF;
}
</style>
