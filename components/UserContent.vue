<template>
  <!-- Card with content -->
  <v-row>
    <!-- Image -->
    <v-col cols="12" sm="3">
      <v-card elevation="2">
        <v-img
          :aspect-ratio="1"
          src="/images/example.png"
        ></v-img>
      </v-card>
    </v-col>

    <!-- Card with info -->
    <v-col cols="12" sm="9">
      <v-row>
        <v-col>
          <v-card
            elevation="2"
          >
            <v-card-title>
              <h1>{{ user.username }}</h1>
            </v-card-title>

            <v-card-subtitle>
              <p>{{ user.name }}</p>
            </v-card-subtitle>

            <v-card-text class="">
              <v-row>
                <v-col cols="12" sm="4">
                  <h2 class="mb-2 my-1">Contact information</h2>
                  <p><strong>Email:</strong> {{ user.email }}</p>
                  <p><strong>Phone:</strong> {{ user.phone }}</p>
                  <p><strong>Website:</strong> {{ user.website }}</p>
                </v-col>

                <v-col cols="12" sm="8">
                  <h2 class="mb-2 my-1">Company</h2>
                  <p><strong>Name:</strong> {{ user.company.name }}</p>
                  <p><strong>Catchphrase:</strong> {{ user.company.catchPhrase }}</p>
                  <p><strong>Dedication:</strong> {{ user.company.bs }}</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="3">
                  <h2 class="mb-2 my-1">Address</h2>
                  <p><strong>Street:</strong> {{ user.address.street }}</p>
                  <p><strong>Suite:</strong> {{ user.address.suite }}</p>
                  <p><strong>City:</strong> {{ user.address.city }}</p>
                  <p><strong>Zipcode:</strong> {{ user.address.zipcode }}</p>
                </v-col>

                <v-col cols="12" sm="9">
                  <v-card elevation="0">
                    <v-img
                      :aspect-ratio="16/9"
                      src="/images/maps.png"
                    ></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {IUser} from "~/repositories/Users";

export default {
  name: "UserContent",
  props: {
    user: IUser
  }
}
</script>

<style scoped>

</style>
