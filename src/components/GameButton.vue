<template>
  <button 
    type="button"
    class="game-button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.game-button {
  background: #C2E265;
  border-radius: 10px;
  padding: 11px 120px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #FFFFFF;
}
</style>