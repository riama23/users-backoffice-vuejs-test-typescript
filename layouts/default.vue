<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      :absolute="isMobile"
      :temporary="isMobile"
      :permanent="!isMobile"
    >
      <v-list>
        <NuxtLink v-for="item in items" :to="item.href" :key="item.title">
          <v-list-item
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <ModalCreateUser>Add user</ModalCreateUser>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pt-sm-16 pt-4">
        <div v-if="isMobile" class="my-4">Swipe right for the menu</div>
        <Nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import ModalCreateUser from "~/components/modals/ModalCreateUser";
import {ApiUsers, IUser} from "~/repositories/Users";

export default {
  components: {
    'ModalCreateUser': ModalCreateUser,
  },
  async beforeMount() {
    const users: IUser[] = await ApiUsers.getAll();
    this.$store.commit('user/setList', users);
  },
  data() {
    const items: Object[] = [
      {title: 'Users', icon: 'mdi-view-dashboard', href: '/users'},
    ];
    const drawer: Boolean = true;
    const isMobile: Boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
      true : false;

    console.log(isMobile)

    return {
      items,
      drawer,
      isMobile
    }
  },
}
</script>

<style scoped>
.v-main {
  background-color: #eef2f5;
}

a {
  display: flex;
  text-decoration: none;
}
</style>
