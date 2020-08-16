<template>
  <div class="markdown" v-html="content"></div>
</template>

<script>
export default {
  name: 'markdown-block',
  props: ['content']
}
</script>

<style>

</style>