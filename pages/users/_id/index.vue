<template>
  <div class="mt-8">
    <UserContent :user="userData"></UserContent>

    <v-row class="">
      <v-col cols="12" class="d-flex justify-end">
        <ModalCreateUser method="update">
          <v-btn plain>Edit</v-btn>
        </ModalCreateUser>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {ApiUsers, IUser} from "~/repositories/Users";
import ModalCreateUser from "~/components/modals/ModalCreateUser.vue";

interface IParams {
  id: number;
}

export default Vue.extend({
  name: "id",
  components: {
    ModalCreateUser
  },
  computed: {
    userData() {
      return this.$store.state.user.user
    }
  },
  async asyncData({params}: { params: IParams }) {
    const idUser: number = params.id;
    const user: IUser = await ApiUsers.getOneUser(idUser);

    return {user}
  },
  beforeMount() {
    this.$store.commit('user/setUser', this.user);
  }

})
</script>

<style scoped>
h2 {
  margin-bottom: 12px;
}

p {
  margin-bottom: 8px;
}
</style>
