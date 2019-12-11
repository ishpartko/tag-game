<template>
  <div class="timer">
    {{ displayTime }}
  </div>
</template>

<script>
import { format, subHours } from "date-fns";

export default {
  props: {
    seconds: {
      type: Number,
      default: 0
    }
  },
  computed: {
    displayTime() {
      return format(
        subHours(
          new Date(this.seconds * 1000),
          Math.abs(new Date().getTimezoneOffset() / 60)
        ),
        "mm:ss"
      );
    }
  }
};
</script>

<style>
.timer {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #5742d7;
}
</style>
