  
<script setup lang="ts">

interface Props {
  variant?: 'filled' | 'outline' | 'link'
  component?: 'button' | 'a'
}

withDefaults(defineProps<Props>(), {
  variant: 'filled',
  component: 'button'
})

</script>
  
<template>
  <component :is="component" :class="[
    'btn',
    {
      'btn-filled': variant === 'filled',
      'btn-outline': variant === 'outline',
      'btn-link': variant === 'link'
    }

  ]" v-bind="$attrs">
    <slot />
  </component>
</template>

<style scoped>
.btn {
  @apply py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-primary-950 hover:bg-primary-900 disabled:opacity-50 disabled:pointer-events-none;
}

.btn-filled {
  /* Estilos para el botón lleno */
}

.btn-outline {
  /* Estilos para el botón con contorno */
}

.btn-link {
  /* Estilos para el botón como enlace */
}
</style>