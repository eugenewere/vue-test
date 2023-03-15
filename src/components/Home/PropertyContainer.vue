<template>
  <main class="bg-white pt-3">
    <div class="w-full container mx-auto py-8 ">
      <div class="section-header flex justify-between items-center">
        <div class="section-description">
          <h4 class="text-xl text-blue-600 font-extrabold text-2xl mb-2 text-black-color">{{ page_tile }}</h4>
          <small class="text-base">Top {{ page_tile }}</small>
        </div>
        <div class="section-action">
          <a :href="page_link" class="text-accent-700 hover:text-white border  inline-flex  border-accent-700 hover:bg-accent-800 focus:ring-4 focus:outline-none focus:ring-accent-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-accent-500 dark:text-accent-500 dark:hover:text-white dark:hover:bg-accent-600 dark:focus:ring-accent-800" type="button">
            Explore More
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
            </svg>
          </a>

        </div>

      </div>
      <!--      <div class="section-contents pt-7  ">-->
      <main v-show="properties.length" class="grid grid-cols-4 gap-5">
        <!--        <swiper-->
        <!--            :breakpoints="{-->
        <!--              '@0.00': {-->
        <!--                slidesPerView: 1,-->
        <!--                spaceBetween: 10,-->
        <!--              },-->
        <!--              '@0.75': {-->
        <!--                slidesPerView: 2,-->
        <!--                spaceBetween: 20,-->
        <!--              },-->
        <!--              '@1.00': {-->
        <!--                slidesPerView: 3,-->
        <!--                spaceBetween: 40,-->
        <!--              },-->
        <!--              '@1.50': {-->
        <!--                slidesPerView: 4,-->
        <!--                spaceBetween: 50,-->
        <!--              },-->
        <!--            }"-->
        <!--            :freeMode="true"-->
        <!--            :modules="modules"-->
        <!--            :pagination="{-->
        <!--              clickable: true,-->
        <!--            }"-->
        <!--            :slides-per-view="4"-->
        <!--            :space-between="50"-->
        <!--            class="mySwiper"-->
        <!--        >-->
        <!--          <swiper-slide>-->
        <PropertyCardMain v-for="(i, property) in properties" :key="property" :property="i"/>
        <!--          </swiper-slide>-->

        <!--        </swiper>-->
      </main>
      <div v-show="!properties.length" class="text-center" role="status">
        <svg aria-hidden="true" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" fill="none" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
      <!--      </div>-->
    </div>
  </main>

</template>
<script>
import PropertyCardMain from "../Property/PropertyCardMain.vue";
import {initCarousels} from 'flowbite'
import {Swiper, SwiperSlide} from 'swiper/vue';
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import {Pagination} from "swiper";

export default {
  name: 'PropertyTypesContainer',
  props: {
    page_tile: {
      type: String,
      required: true,
    },
    page_link: {
      type: String,
      required: true,
    },
    properties: {
      type: Array,
    }
  },
  data() {
    return {
      modules: [Pagination]
    }
  },
  components: {
    PropertyCardMain,
    Swiper, SwiperSlide
  },

  mounted() {
    initCarousels()
  },
  methods: {}
}
</script>
<style scoped>
.text-black-color {
  color: black;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>