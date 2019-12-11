<template>
  <button 
    class="game-box-item"
    :class="{
      'game-box-item_highlight': card.highlight
    }"
    @click="flip"
    :disabled="disabled"
  >
    {{ card.opened ? card.value : '?' }}
  </button>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    flip() {
      this.$emit('flip', this.card)
    }
  }
}
</script>

<style scoped>
.game-box-item {
  width: 70px;
  height: 70px;
  background: var(--light-color);
  border-radius: 10px;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  border: none;
}

.game-box-item_highlight {
  background: var(--accent-color);
}
</style>