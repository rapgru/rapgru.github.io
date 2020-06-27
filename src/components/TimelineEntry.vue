<template>
  <li class="tl_item p-3 relative font-thin">
    <div class="ml-4 sm:ml-8 p-5 bg-white relative shadow-md rounded-md">
      <div class="flex flex-row flex-wrap justify-between items-center content-start">
        <div>
          <a :href="link | '#'"><h2 class="text-lg text-gray-600">{{school}}</h2></a>
          <h2 class="text-xl mb-2 font-normal">{{title}}</h2>
          <div class="w-1/2 bg-morange-secondary mb-3" style="height:1px;"></div>
          <h2 class="sm:hidden text-base mb-3 text-gray-600 font-normal">{{from}} &ndash; {{ to }}</h2>
        </div>
        <a :href="link | '#'" v-if="image"><g-image :alt="this.school" :src="this.setImage" class="w-48 px-3 py-5 mx-auto hidden sm:block"/></a> <!-- w-64 -->
      </div>

      <slot></slot>
    </div>
    <span class="number text-right font-bold absolute text-sm hidden sm:block">{{ from }} &ndash; {{ to }}</span>
  </li>
</template>

<script>
export default {
  name: "TimelineEntry",
  props: ["from", "to", "title", "school", "image", "link"],
  computed: {
    setImage() {
      return require("~/img/" + this.image);
    }
  }
}
</script>

<style>
.number {
  left: -100px;
  width: 80px;

	top: calc(50% - 26px);
}
</style>