<template>
  <nav>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-list>
        <v-list-item v-for="list in lists" :key="list.title" :to="list.link">
          <v-list-item-icon>
            <v-icon>{{list.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{list.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="teal darken-2"
      dark
      clipped-left
      flat
    >

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-img
      src="../assets/logo.png"
      max-height="35"
      max-width="35"
      contain
    >
    </v-img>

    <v-toolbar-title class="mx-3 headline">My Keep</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn @click="logout" text dark>Log Out</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      drawer: null,
      lists: [
        { icon: 'note_add', title: 'Add Note', link: '/addnote' },
        { icon: 'playlist_add_check', title: 'My Notes', link: '/mynotes' }
      ]
    }
  },

  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
