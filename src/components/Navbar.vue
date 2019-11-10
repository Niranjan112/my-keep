<template>
  <nav>
    <v-app-bar
      app
      color="teal darken-2"
      dark
    >

    <v-img
      src="../assets/logo.png"
      max-height="35"
      max-width="35"
      contain
    >
    </v-img>

    <v-toolbar-title class="mx-3 headline">My Keep</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-for="list in lists" :key="list.title" :to="list.link" text>
      <v-icon left>
        {{list.icon}}
      </v-icon>{{list.title}}
    </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        { icon: 'lock_open', title: 'Sign in', link: '/' },
        { icon: 'face', title: 'Sign Up', link: '/signup' }
      ]
    }
  }
}
</script>
