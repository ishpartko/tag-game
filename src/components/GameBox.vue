<template>
  <div>
    <GameBoxTimer
      :seconds="leftSeconds"
      class="game-box-timer-margin"
    ></GameBoxTimer>
    <section class="game-box game-box-gap">
      <GameBoxItem
        v-for="(card, key) in cards"
        :key="key"
        class="game-box-item-gap"
        :card="card"
        :disabled="wasCardsDisabled"
        @flip="flipCardWithId"
      />
    </section>
  </div>
</template>

<script>
import GameBoxItem from "./GameBoxItem.vue";
import GameBoxTimer from "./GameBoxTimer.vue";

export default {
  components: {
    GameBoxItem,
    GameBoxTimer
  },
  props: {
    secondsToEnd: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      cards: {},
      flipedId: null,
      leftSeconds: 0,
      wasCardsDisabled: false
    };
  },
  watch: {
    flipedId(newId, oldId) {
      if (oldId === null || newId === null) return;

      if (this.cards[newId].value !== this.cards[oldId].value) {
        this.wasCardsDisabled = true;
        window.setTimeout(() => {
          this.hideCardWithId(newId);
          this.hideCardWithId(oldId);
          this.wasCardsDisabled = false;
        }, 1000);
      } else if (
        newId !== oldId &&
        this.cards[newId].value === this.cards[oldId].value
      ) {
        this.highlightPair(newId, oldId);
        window.setTimeout(() => {
          this.checkWin();
        }, 0);
      }
      this.resetFlippedId();
    }
  },
  created() {
    this.runTimer();
    this.cards = this.getRandomCards([1, 2, 3, 4, 5, 6, 7, 8]);
  },
  methods: {
    highlightPair(firstId, secondId) {
      this.cards[firstId].highlight = true;
      this.cards[secondId].highlight = true;
    },
    showCardWithId(id) {
      this.cards[id].opened = true;
    },
    hideCardWithId(id) {
      this.cards[id].opened = false;
    },
    resetFlippedId() {
      this.flipedId = null;
    },
    checkWin() {
      if (Object.values(this.cards).every(card => card.highlight)) {
        this.$emit("win");
      }
    },
    flipCardWithId({ id }) {
      this.showCardWithId(id);
      this.flipedId = id;
    },
    getRandomCards(valuesArray) {
      let doubledSortedAndRandomizedValuesArray = [
        ...valuesArray,
        ...valuesArray
      ].sort(() => {
        return Math.random() - 0.5;
      });
      let cards = {};
      return doubledSortedAndRandomizedValuesArray.reduce(
        (obj, item, index) => {
          return {
            ...obj,
            [index]: {
              id: index,
              value: item,
              opened: false,
              highlight: false
            }
          };
        },
        cards
      );
    },
    runTimer() {
      this.leftSeconds = this.secondsToEnd;
      const timer = window.setInterval(() => {
        if (this.leftSeconds === 0) {
          window.clearInterval(timer);
          this.$emit("lose");
        } else {
          this.leftSeconds--;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.game-box {
  min-width: 320px;
  min-height: 320px;
  max-width: 320px;
  max-height: 320px;
  background: var(--main-color);
}

.game-box-gap {
  padding: 4px;
}

.game-box-item-gap {
  margin: 4px;
}

.game-box-timer-margin {
  margin-bottom: 15px;
}

@media (min-width: 380px) {
  .game-box {
    min-width: 380px;
    min-height: 380px;
  }
  .game-box-gap {
    padding: 10px;
  }
  .game-box-item-gap {
    margin: 10px;
  }
}
</style>
