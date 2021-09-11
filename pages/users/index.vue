<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10" lg="8">
      <UsersTable></UsersTable>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import UsersTable from "~/components/UsersTable.vue";

export default {
  components: {
    UsersTable
  },
}
</script>
