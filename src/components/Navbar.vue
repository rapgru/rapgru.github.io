<template>
  <div class="w-full bg-ctblue text-white px-10">
    <header class="flex justify-between items-center h-16">
      <strong class="font-display text-xl">
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="ml-5" to="/">Home</g-link>
        <g-link class="ml-5" to="/blog">Blog</g-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'default-navbar'
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

</style>