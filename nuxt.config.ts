// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
    '@nuxt/image'
  ],
  plugins: [
    '~/plugins/preline.client.ts',
  ],
  image: {
    format: ['webp', 'avif', 'jpg', 'png'],
    inject: true,
    quality: 80,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  }
})