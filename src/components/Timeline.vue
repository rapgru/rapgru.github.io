<template>
  <ul class="tl_list pl-2 sm:pl-32 py-1 relative">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'Timeline'
}
</script>

<style>

.tl_list:before {
	content: '';

  @apply top-0;
  @apply bottom-0;
  @apply w-2;
  @apply h-full;
  @apply absolute;
  @apply bg-morange-secondary;

  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0), #ffe5be 8%, #ffe5be 92%,rgba(0, 0, 0, 0));
  background-image: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0), #ffe5be 8%, #ffe5be 92%,rgba(0, 0, 0, 0));
  background-image: -moz-linear-gradient(0deg, rgba(0, 0, 0, 0), #ffe5be 8%, #ffe5be 92%,rgba(0, 0, 0, 0));
}

.tl_item::after {
  content: '';
  
  width: 12px;
  height: 12px;

  left: -2px;
  top: calc(50% - 6px);
  
  @apply absolute;
  @apply bg-morange-primary;

  @apply rounded-full;
  @apply z-10;
}

.tl_item:not(:first-child) {
	@apply mt-3;
}
</style>