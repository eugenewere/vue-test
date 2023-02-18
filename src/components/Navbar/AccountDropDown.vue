<template>
  <button id="user-menu-button"
          aria-expanded="false"
          class="flex mr-3 text-sm bg-accent-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          data-dropdown-placement="bottom" data-dropdown-toggle="user-dropdown"
          type="button">
    <span class="sr-only">Open user menu</span>
    <img :src="user_details?.profile_image ? user_details.profile_image : defaultImage" alt=""
         class="w-8 h-8 rounded-full">
  </button>
  <div
      id="user-dropdown"
      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 flex items-start">
      <img :src="user_details?.profile_image ? user_details.profile_image : defaultImage" alt="" class="w-10 h-10 rounded-full">
      <div class="pl-2">
        <span class="block text-sm text-gray-900 dark:text-white font-bold">{{ get_full_name }}</span>
        <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{{ get_email }}</span>
      </div>
    </div>
    <ul v-show="get_if_logged_in" aria-labelledby="user-menu-button" class="py-2">
      <li>
        <a class="block px-4 py-2 m-1 rounded text-md text-gray-700 hover:bg-accent-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
           href="#" v-on:click="signOut">Sign Out </a>
      </li>
    </ul>
    <ul v-show="!get_if_logged_in" aria-labelledby="user-menu-button" class="py-2">
      <li>
        <a class="block px-4 py-2 m-1 rounded text-md text-gray-700 hover:bg-accent-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" href="#"
        >Sign In </a>
      </li>
      <li>
        <router-link :to="{name:'sign_up'}" class="block px-4 py-2 m-1 rounded text-md text-gray-700 hover:bg-accent-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          Sign Up
        </router-link>
      </li>

    </ul>
  </div>


</template>
<script>
import {mapGetters, mapState} from 'vuex'


export default {
  name: 'AccountDropDown',
  beforeCreate() {
    this.$store.dispatch('user_profile/fetch_user_profile')
  },
  computed: {
    ...mapGetters('sign_in', ["get_if_logged_in",]),
    ...mapGetters('user_profile', ["get_full_name", "get_email",]),

    ...mapState('user_profile', ['user_details'])
  },
  methods: {
    signOut() {
      this.$store.dispatch('sign_in/deleteToken')
    },

  },
  data() {
    return {
      defaultImage: 'https://preview.redd.it/i-rendered-a-3d-version-of-the-default-green-discord-v0-0jri55mmvb6a1.png?width=640&crop=smart&auto=webp&s=3dfde767af030266a91ff28f6a13060017a361f7'
    }
  },

}
</script>