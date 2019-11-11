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
                :error-messages="nameErrors"
                prepend-icon="person"
                color="teal darken-2"
                required
                counter
                @blur="$v.name.$touch()"
              ></v-text-field>

              <v-text-field
                :error-messages="emailErrors"
                color="teal darken-2"
                v-model="email"
                prepend-icon="email"
                label="E-mail"
                counter
                required
                @blur="$v.email.$touch()"
                >
              </v-text-field>

              <v-text-field
                prepend-icon="lock"
                :error-messages="passErrors"
                v-model="password"
                label="Create your password"
                color="teal darken-2"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                counter
                required
                @blur="$v.password.$touch()"
                >
              </v-text-field>

              <div class="text-center">
                <v-btn class="teal darken-2" dark large @click="signUp">
                  <v-icon left>done</v-icon>Sign up
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
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      showPassword: false,
      snackbar: false,
      text: ''
    }
  },

  methods: {
    signUp () {
      this.$v.$touch()
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        console.log(this.email, this.password)
        this.$router.replace('dashboard')
      }).catch(err => {
        this.snackbar = true
        this.text = err.message
        console.log(err)
      })
    }
  },

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
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
