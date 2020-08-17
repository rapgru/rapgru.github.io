<template>
  <div class="h-full">
    <slot name="above"/>
    <!-- <default-navbar/> -->
    <div class="px-5 sm:px-10 md:px-20 lg:px-48 text-white">
      <slot/>
    </div>
    <default-footer/>
  </div>
</template>

<script>
import DefaultNavbar from '~/components/Navbar.vue'
import DefaultFooter from '~/components/Footer.vue'

export default {
  name: 'default-layout',
  components: {
    DefaultNavbar,
    DefaultFooter,
  }
}
</script>

<style>
</style>
