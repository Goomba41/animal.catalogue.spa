<template>
  <b-button
    :pressed.sync="showState"
    @click="showState ? startTimer() : resetTimer()"
    variant="light"
    class="contact-button text-left"
  >
    <template v-if="showState">
      {{ name }}
      <span class="text-warning">*</span>
      <br />
      <a target="_blank" :href="`tel:${phone}`">{{ phone }}</a>
    </template>
    <template v-else>
      Узнать контакты куратора
      <br />
      +7 (XXX) XXX-XX-XX
    </template>
    <template v-if="time">
      <b-badge pill variant="custom-green" class="ml-2">
        {{ time }}
      </b-badge>
    </template>
  </b-button>
</template>

<script>
export default {
  name: "ContactButton",
  props: {
    name: String,
    phone: String,
    hideTime: Number
  },
  data() {
    return {
      showState: false,
      timer: null,
      time: 0,
      isRunning: false
    };
  },
  methods: {
    startTimer() {
      this.isRunning = true;
      this.time = this.hideTime;
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time--;
          } else {
            this.showState = false;
            this.resetTimer();
          }
        }, 1000);
      }
    },
    resetTimer() {
      this.isRunning = false;
      clearInterval(this.timer);
      this.timer = null;
      this.time = 0;
    }
  },
  watch: {
    $route() {
      this.resetTimer();
      this.showState = false;
    }
  },
  beforeMount() {
    this.resetTimer();
    this.showState = false;
  }
};
</script>
