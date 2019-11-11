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
                :error-messages="emailErrors"
                label="E-mail ID"
                color="teal darken-2"
                prepend-icon="email"
                required
                counter
                @blur="$v.email.$touch()"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :error-messages="passErrors"
                label="Password"
                prepend-icon="lock"
                color="teal darken-2"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                :type="showPassword ? 'text' : 'password'"
                counter
                required
                @click:append="showPassword = !showPassword"
                @blur="$v.password.$touch()"
                >
              </v-text-field>

              <div class="text-center pt-2">
                <v-btn class="teal darken-2" large dark @click="signIn">
                  <v-icon left>done</v-icon>Sign in
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      timeout="5000"
      class="mb-12"
    >
      {{ text }}
      <v-btn
        class="teal darken-2"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import firebase from 'firebase'
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  data () {
    return {
      email: '',
      password: '',
      showPassword: false,
      snackbar: false,
      text: ''
    }
  },
  methods: {
    signIn () {
      this.$v.$touch()
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        console.log('Logged in')
        this.$router.replace('dashboard')
      }).catch(err => {
        this.snackbar = true
        this.text = err.message
        console.log(err)
      })
    }
  },

  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      !this.$v.password.minLength && errors.push('Password should be atleast 6 character')
      return errors
    }
  }
}
</script>
