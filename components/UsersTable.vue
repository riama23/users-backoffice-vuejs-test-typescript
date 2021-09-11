<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="listUsers"
      :search="search"
      dense
    >
      <template v-slot:item.actions="{ item }">
        <NuxtLink :to="'/users/'+item.id">
          <v-btn
            x-small
            color="primary"
            plain
          >
            See more
          </v-btn>
        </NuxtLink>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import {ApiUsers, IUser} from "~/repositories/Users";

export default {
  name: "UsersTable",
  computed: {
    listUsers() {
      return this.$store.state.user.list
    }
  },
  async beforeMount() {
    const users: IUser[] = await ApiUsers.getAll();
    this.$store.commit('user/setList', users);
  },
  data() {
    const search: String = '';
    const headers: Object[] = [
      {text: 'id', value: 'id'},
      {text: 'name', value: 'name'},
      {text: 'username', value: 'username'},
      {text: 'email', value: 'email'},
      {text: 'actions', value: 'actions'},
    ];

    return {
      search,
      headers
    }
  },
}
</script>

<style scoped>

</style>
