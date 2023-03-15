<template>
  <div>

    <!--    modals-->
    <LoginModal/>
    <!--    modals-->


    <!-- Main modal -->
    <NavBar/>
    <!--    <WelcomeHomeContainer/>-->
    <main class="mt-20">
      <div class="container mx-auto">
        <button class="btn btn-primary mb-2 font-bold btn-sm" @click="$router.back()">
          <i class="fas fa-chevron-left"></i> Back
        </button>

        <div class="w-full">
          <div class="card rounded-md overflow-hidden relative" style="height: 55vh !important;">
            <img :src="property.main_image" alt="" class="w-full object-cover">
            <span v-show="property.featured_status" class="absolute top-2 right-2 bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Featured </span>
            <div class="flex absolute bottom-2 left-2">
              <span v-for="purpose in property.property_purpose" v-show="property.property_purpose.length" key="{{purpose}}" class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                {{ purpose }}
              </span>
            </div>
          </div>
          <div class="card">
            <div class="mt-4 flex justify-between align-middle">
              <div class="">
                <h1 class="font-bold text-2xl ">{{ property?.property_name }}</h1>
                <span class="mt-2 text-gray-400 block">{{ property.property_location?.name }}</span>
                <span class="mt-2 text-gray-400 block">{{ new Date(property.created_at).toDateString() }}</span>

              </div>
              <div class="">
                <h4 class="font-bold text-orange-600">
                  {{ property.price?.currency }} {{ property.price?.lowest_price }} - {{ property.price?.highest_price }}
                </h4>
              </div>
            </div>


            <span class="font-bold mb-2 mt-4 block">Description</span>
            <div>
              {{ property.property_long_description }}
            </div>
            <span class="font-bold mb-2 mt-4 block">Keywords</span>
            <div class="flex py-3 flex-wrap">
              <span v-for="purpose in property.keywords" v-show="property.keywords.length" key="{{purpose}}" class="bg-yellow-100 mr-2 mb-2 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                {{ purpose }}
              </span>
            </div>
            <span class="font-bold mb-2 mt-4 block">Amenities</span>
            <div class="flex py-3 flex-wrap">
              <span v-for="amenity in property.amenities" v-show="property.amenities.length" key="{{amenity}}" class="bg-blue-100 mr-2 mb-2 h-fit text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {{ amenity.amenities.name }}
              </span>
            </div>

          </div>
        </div>

      </div>
    </main>

  </div>
</template>
<script>
import NavBar from "../components/Navbar/NavBar.vue";
import LoginModal from "../components/Login/modals/LoginModal.vue";
import WelcomeHomeContainer from "../components/Home/WelcomeHomeContainer.vue"
import {mapState} from "vuex";

export default {
  name: 'PropertyView',
  components: {
    NavBar, LoginModal, WelcomeHomeContainer
  },
  beforeCreate() {
    // console.log(this.$route.params.property_id)
    this.$store.dispatch('property_details/fetch_property', this.$route.params.property_id)
  },
  computed: {
    ...mapState({
      property: (state) => state.property_details.property
    })
  },
  methods: {},
  data() {
    return {}
  }
}
</script>
<style>
.text-black-color {
  color: black;
}


</style>