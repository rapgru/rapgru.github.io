<template>
  <li class="p-3 md:px-10">
    <div class="p-5 sm:p-8 bg-ctwhite shadow-md sm:shadow-none rounded-md text-black">
      <div class="flex flex-row flex-wrap justify-between items-center content-start mb-4">
        <div>
          <a :href="link || '#'"><p class="text-lg text-gray-600">{{school}}</p></a>
          <h2 class="mb-3 mt-1">{{title}}</h2>
          <div class="w-1/2 bg-ctorange-primary mb-3" style="height:1px;"></div>
          <p class="mb-3 text-gray-600">{{from}} &ndash; {{ until }}</p>
        </div>
        <a :href="link || '#'" v-if="image"><g-image :alt="this.school" :src="this.setImage" class="w-48 px-3 py-5 mx-auto hidden sm:block"/></a>
      </div>

      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "timeline-entry",
  props: ["from", "until", "title", "school", "image", "link"],
  computed: {
    setImage() {
      return require("~/img/employers/" + this.image);
    }
  }
}
</script>

<style>

</style>