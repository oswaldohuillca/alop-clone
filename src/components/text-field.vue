<template>
  <div>
    <label for="search-input" class="sr-only">Label</label>
    <div class="relative flex rounded-lg shadow-sm ">
      <input type="text" id="search-input" name="search-input" v-bind="$attrs">
      <div class="icon absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4 text-primary-200">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply py-3 px-4 pe-11 block w-full ring-primary-200 ring-2 rounded-xl text-sm;

  &:focus {
    @apply z-10 ring-primary-950;

    &~.icon {
      @apply text-primary-950;
    }
  }

  &:disabled {
    @apply opacity-50 pointer-events-none;
  }

  &:focus-visible {
    @apply outline-none;
  }
}
</style>