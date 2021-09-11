<template>
  <div class="text-center">
    <v-dialog
      v-model="active"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
        >
          <slot></slot>
        </div>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text class="my-4">
          <p>{{ dialogModal }}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="accept"
          >
            Accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
export default {
  name: "Modal",
  data() {
    const active: Boolean = false;

    return {
      active
    }
  },
  props: {
    action: String,
    dialogModal: String,
    title: String
  },
  methods: {
    accept() {
      this.active = false;

      if (this.action === 'delete'){
        return this.$router.push('/users');
      }
    }
  }
}
</script>

<style scoped>

</style>
