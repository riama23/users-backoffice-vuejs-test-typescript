<template>
  <div class="text-center">
    <v-dialog
      v-model="active"
      hide-overlay
      persistent
      width="325"
    >
      <v-card
        dark
        color="primary"
      >
        <v-card-text>
          <p class="pt-3 pb-2">{{ msg }}</p>
        </v-card-text>

        <v-progress-linear
          :value="timer"
          :buffer-value="100"
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
export default {
  name: "ModalAlert",
  data() {
    const timer: Number = 0;
    const interval: Number = 0;

    return {
      timer,
      interval,
    }
  },
  props: {
    time: {
      type: Number,
      default: 1000
    },
    active: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: ''
    },
  },
  mounted () {
    this.intevalMethod()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    intevalMethod () {
      this.timer = 0;

      this.interval = setInterval(() => {
        if (this.timer === 100) {
          clearInterval(this.interval)
        }

        if (this.active) {
          this.timer += 10
        }
      }, 100)
    },
  },
}
</script>

<style scoped>

</style>
