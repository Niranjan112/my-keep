<template>
  <div class="singup pt-12">
    <v-container>
      <v-layout>
        <v-flex>
          <v-card class="mx-auto pb-1" max-width="500px">

            <v-card-title class="teal darken-2 white--text justify-center title">
              Welcome {{name}}
            </v-card-title>

            <v-divider></v-divider>

            <v-form ref="form" class="px-8 py-3">
              <v-text-field
                v-model="name"
                label="Name"
                color="teal darken-2"
                required
                counter
              ></v-text-field>

              <v-text-field
                color="teal darken-2"
                v-model="email"
                label="E-mail"
                counter
                required
                >
              </v-text-field>

              <v-text-field
                v-model="password1"
                label="New Password"
                color="teal darken-2"
                :append-icon="showPassword1 ? 'visibility' : 'visibility_off'"
                :type="showPassword1 ? 'text' : 'password'"
                @click:append="showPassword1 = !showPassword1"
                counter
                required
                >
              </v-text-field>

              <v-text-field
                v-model="password2"
                label="Enter Password Again"
                color="teal darken-2"
                :append-icon="showPassword2 ? 'visibility' : 'visibility_off'"
                :type="showPassword2 ? 'text' : 'password'"
                @click:append="showPassword2 = !showPassword2"
                counter
                required
                >
              </v-text-field>

              <div class="text-center">
                <v-btn class="teal darken-2" dark large>
                  <v-icon left>done</v-icon>Sign up
                </v-btn>
              </div>
            </v-form>
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
      name: '',
      password1: '',
      password2: '',
      showPassword1: false,
      showPassword2: false
    }
  }
}
</script>
