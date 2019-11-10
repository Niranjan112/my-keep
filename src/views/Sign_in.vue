<template>
  <div class="signin pt-12">
    <v-container>
      <v-layout>
        <v-flex>
          <v-card class="mx-auto pb-1" max-width="500px">

            <v-card-title class="teal darken-2 white--text justify-center title">
              Welcome
            </v-card-title>

            <v-divider></v-divider>

            <v-row align="center" justify="center" class="pt-5">
              <v-img
                src="../assets/login.png"
                aspect-ratio="1"
                max-width="100"
                max-height="100"
              ></v-img>
            </v-row>

            <v-form ref="form" class="px-8 py-3">
              <v-text-field
                v-model="email"
                label="E-mail ID"
                color="teal darken-2"
                required
                counter
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                color="teal darken-2"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :type="show1 ? 'text' : 'password'"
                counter
                required
                >
              </v-text-field>

              <div class="text-center pt-2">
                <v-btn class="teal darken-2" large dark>
                  <v-icon left>done</v-icon>Sign in
                </v-btn>
              </div>
            </v-form>

            <div class="text-center">
              <p>Forgot Password?</p>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      show1: false
    }
  }
}
</script>
