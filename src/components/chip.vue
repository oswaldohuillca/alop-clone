<script setup lang="ts">
interface Props {
  component?: 'a' | 'button'
}
withDefaults(defineProps<Props>(), {
  component: 'a'
})
</script>

<template>
  <component :is="component"
    class="inline-flex items-center gap-x-1.5 py-3 px-6 rounded-xl text-base font-medium bg-white text-primary-950 hover:shadow-lg transition-shadow ease-out duration-500 text-nowrap"
    v-bind="$attrs">
    <slot />
  </component>
</template>