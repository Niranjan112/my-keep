<template>
  <v-app>
    <Navbar v-if="!$route.meta.hideNavigation"/>
    <Dashnav v-else />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Dashnav from '@/components/Dashnav'

export default {
  name: 'App',
  components: { Navbar, Dashnav },
  data: () => ({
    loggedIn: true
  })
}
</script>
