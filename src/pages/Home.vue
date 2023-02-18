<template>
  <div>

    <!--    modals-->
    <LoginModal/>
    <!--    modals-->


    <!-- Main modal -->
    <NavBar/>
    <WelcomeHome/>
    <PropertyTypesContainer :property_types="property_types"/>
    <PropertyContainer
        :page_link="featured.pageLink"
        :page_tile="featured.pageTile"
        :properties="featured_properties"
    />
    <PropertyContainer
        :page_link="popular.pageLink"
        :page_tile="popular.pageTile"
        :properties="popular_properties"
    />
    <PropertyContainer
        :page_link="recent.pageLink"
        :page_tile="recent.pageTile"
        :properties="latest_properties"
    />

    <!--    <PropertyContainer-->
    <!--        :page_link="popular.pageLink"-->
    <!--        :page_tile="popular.pageTile"-->
    <!--        :properties="popular.properties"-->
    <!--    />-->
    <!--    <PropertyContainer-->
    <!--        :page_link="near.pageLink"-->
    <!--        :page_tile="near.pageTile"-->
    <!--        :properties="near.properties"-->
    <!--    />-->
    <!--    <PropertyContainer-->
    <!--        :page_link="recent.pageLink"-->
    <!--        :page_tile="recent.pageTile"-->
    <!--        :properties="recent.properties"-->
    <!--    />-->
  </div>
</template>
<script>
import NavBar from "../components/Navbar/NavBar.vue";
import WelcomeHome from "../components/Home/WelcomeHomeContainer.vue";
import PropertyTypesContainer from "../components/Home/PropertyTypesContainer.vue";
import PropertyContainer from "../components/Home/PropertyContainer.vue";
import LoginModal from "../components/Login/modals/LoginModal.vue";
import {mapState, mapActions} from "vuex";

export default {
  name: 'Home',
  components: {
    NavBar, WelcomeHome, PropertyTypesContainer, PropertyContainer, LoginModal
  },
  beforeCreate() {
    this.$store.dispatch('property_type/fetch_property_types')
    this.$store.dispatch('featured_property/fetch_featured_properties')
    this.$store.dispatch('latest_property/fetch_latest_properties')
    this.$store.dispatch('popular_property/fetch_popular_properties')
  },
  computed: {
    ...mapState({
      property_types: (state) => state.property_type.property_types,
      featured_properties: (state) => state.featured_property.properties,
      latest_properties: (state) => state.latest_property.properties,
      popular_properties: (state) => state.popular_property.properties,
    }),

  },
  data() {
    return {
      featured: {
        pageTile: 'Featured Properties',
        pageLink: '',
      },
      popular: {
        pageTile: 'Popular Properties',
        pageLink: '',
      },
      near: {
        pageTile: 'Near Properties',
        pageLink: '',
      },
      recent: {
        pageTile: 'Recently Properties',
        pageLink: '',
      },

    }
  }
}
</script>
<style>
.text-black-color {
  color: black;
}


</style>