<template>
  <div class="max-w-screen-md mx-auto my-0 px-5 font-sans">
    <header class="flex justify-between items-center mb-5 h-20">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="ml-5" to="/">Home</g-link>
        <g-link class="ml-5" to="/blog">Blog</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
