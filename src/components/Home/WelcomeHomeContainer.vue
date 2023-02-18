<template>
  <main>
    <div class="h-10"></div>
    <div class="w-full bg-accent-100 h-96 mt-10 flex items-center justify-center relative">
      <h4 class="text-xl text-blue-600 font-extrabold text-5xl text-black-color">Powering Proptech Solutions</h4>
      <div class="container mx-auto absolute mx-auto bottom-[-45px] ">
        <div class=" p-0 h-28 rounded-lg overflow-hidden container bg-white shadow-lg">
          <div class="w-full inline-grid h-full grid-cols-4 gap-4">

            <div class="counter-wrapper flex items-center justify-center">
              <div class="icon-wrapper rounded-lg p-5 bg-gray-200 mr-3">
                <i class="fas fa-home text-2xl text-gray-500"></i>
              </div>
              <div class="icon-desc">
                <strong class="text-lg">1,200</strong>
                <p class="text-base">Listings</p>
              </div>
            </div>

            <div class="counter-wrapper flex items-center justify-center">
              <div class="icon-wrapper rounded-lg p-5 bg-accent-200 mr-3">
                <i class="fas fa-th-large text-2xl text-accent-500"></i>
              </div>
              <div class="icon-desc">
                <strong class="text-lg">22,585</strong>
                <p class="text-base">Units</p>
              </div>
            </div>

            <div class="counter-wrapper flex items-center justify-center">
              <div class="icon-wrapper rounded-lg p-5 bg-orange-200 mr-3">
                <i class="fas fa-user-tie text-2xl text-orange-500"></i>
              </div>
              <div class="icon-desc">
                <strong class="text-lg">935</strong>
                <p class="text-base">Owners</p>
              </div>
            </div>

            <div class="counter-wrapper flex items-center justify-center">
              <div class="icon-wrapper rounded-lg p-5 bg-secondary-200 mr-3">
                <i class="fas fa-user-tag text-2xl text-secondary-500"></i>
              </div>
              <div class="icon-desc">
                <strong class="text-lg">315</strong>
                <p class="text-base">Agents</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'WelcomeHomeContainer',

}
</script>
<style scoped>
.text-black-color {
  color: black;
}

</style>