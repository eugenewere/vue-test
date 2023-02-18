<template>
  <!--  <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 f border-b border-gray-200 dark:border-gray-600">-->
  <nav class="px-2 font-poppins backdrop-filter lg:backdrop-blur lg:bg-transparent md:bg-white sm:bg-white border-gray-200 py-2.5 dark:bg-gray-900 dark:border-gray-700 fixed w-full z-20 top-0 left-0">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a class="flex items-center" href="#">
        <img alt="Itara Logo" class="h-6 mr-3 sm:h-10" src="../../assets/images/svg/favicon.png"/>
        <h2 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ITARA</h2>
      </a>
      <div class="flex items-center md:order-2 ml-4">

        <!-- Dropdown menu -->
        <AccountDropDown/>
        <button aria-controls="mega-menu-full" aria-expanded="false"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                data-collapse-toggle="mega-menu-full" type="button">
          <span class="sr-only">Open main menu</span>
          <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  fill-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div id="mega-menu-full" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 lg:bg-transparent lg:backdrop-blur md:bg-white sm:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <button id="mega-menu-full-dropdown-button" class="flex items-center font-bold justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-accent-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" data-collapse-toggle="mega-menu-full-dropdown">
              Rent
              <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      fill-rule="evenodd"></path>
              </svg>
            </button>
          </li>
          <li>
            <button id="mega-menu-full-dropdown-button-tools" class="flex items-center font-bold justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-accent-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    data-collapse-toggle="mega-menu-full-dropdown-tools"
            >
              Tools
              <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      fill-rule="evenodd"></path>
              </svg>
            </button>
          </li>

          <li>
            <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 font-bold md:hover:bg-transparent md:border-0 md:hover:text-accent-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
               href="#">Contact Us</a>
          </li>

        </ul>
      </div>
    </div>
    <MegaMenuTools/>
    <MegaMenuRent/>

  </nav>

</template>

<script>
import {initDropdowns,} from 'flowbite'

import MegaMenuTools from "./MegaMenuTools.vue";
import MegaMenuRent from "./MegaMenuRent.vue";
import AccountDropDown from "./AccountDropDown.vue";

export default {
  name: 'NavBar',
  components: {
    MegaMenuRent, MegaMenuTools, AccountDropDown
  },
  mounted() {
    initDropdowns();
  },

};
</script>
