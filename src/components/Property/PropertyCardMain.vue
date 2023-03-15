<template>
  <router-link :to="{name: 'property_view', params:{ property_id: property?.id } }">
    <div class="property_card_wrapper border-2 m-3 w-full rounded-2xl p-1" data-carousel-item>
      <div class="property_card  overflow-hidden">
        <div class="image_card h-56 mb-3 relative">
          <img :src="property?.main_image" alt=""
               class="object-cover h-full rounded-2xl">

          <div class="top-left-container absolute top-2 left-2 flex z-10">
            <kbd class="inline-flex mr-2 items-center px-2 py-1.5 text-white bg-accent-700 hover:bg-accent-500 rounded-lg dark:bg-accent-800 dark:text-accent-100 dark:border-accent-500">
              <i class="far fa-images mr-1"></i>
              {{ property?.media_count }}
              <span class="sr-only">Arrow key up</span>
            </kbd>
            <kbd class="inline-flex mr-1 items-center px-2 py-1.5  transition-colors text-white bg-yellow-400 hover:bg-yellow-200  rounded-lg dark:bg-accent-800 dark:text-accent-100 dark:border-accent-500">
              <i class="fas fa-star"></i>
              {{ property.rating }}
              <span class="sr-only">Arrow key up</span>
            </kbd>

          </div>
          <div class="top-left-container absolute top-2 right-2 flex z-10">
            <kbd class="inline-flex mr-1 items-center px-3 py-1.5 text-white backdrop-blur rounded-lg ">
              <i class="fas fa-heart text-red-600 text-xl"></i>
              <span class="sr-only">Arrow key up</span>
            </kbd>
          </div>

          <div class="top-left-container absolute bottom-2 left-2 flex z-10">
            <kbd class="inline-flex mr-1 items-center px-3 py-2.5 text-white bg-[#000000]  rounded-lg ">
              <i class="fas fa-exchange-alt "></i>
              <span class="sr-only">Arrow key up</span>
            </kbd>
          </div>
        </div>
        <div class="property_content p-2">
          <span class="mb-2 text-base font-bold text-secondary-500 text-ellipsis overflow-hidden">KES 40k-50k</span>
          <h3 class="font-extrabold text-lg mb-1 text-ellipsis overflow-hidden">{{ property?.property_name }}</h3>
          <p class="text-sm text-gray-800 ">
            <i class="fas fa-map-marker-alt mr-1 "></i> <span class="text-ellipsis overflow-hidden">{{ property?.location?.name }}</span>
          </p>
          <div class="features-grid grid grid-cols-2 gap-2 w-full pt-3">
            <div class="feature-container">
              <i class="fas fa-th-large mr-1 text-secondary-500"></i> Units ({{ property?.unit_count }})
            </div>
            <div v-if="property?.is_building" class="feature-container">
              <i class="fas fa-wave-square mr-1 text-secondary-500"></i>
              {{ property?.property_building.area }} ft<sup>2</sup>
            </div>
            <div v-if="!property?.is_building" class="feature-container">
              <i class="fas fa-wave-square mr-1 text-secondary-500"></i> {{ property?.property_land.area }} ft<sup>2</sup>
            </div>


            <div class="feature-container">
              <i class="fas fa-building mr-1 text-secondary-500"></i> {{ property?.is_building ? 'Building' : 'Land' }}
            </div>
            <div class="feature-container">
              <i class="fas fa-eye mr-1 text-secondary-500"></i> Views {{ property?.views }}
            </div>
          </div>
          <div class="flex justify-end pt-3 px-1 ">
            <span class="text-sm text-accent-700 font-bold">{{ property?.created_at }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'PropertyCardMain',
  props: {
    property: {
      type: Object
    }
  }

}
</script>