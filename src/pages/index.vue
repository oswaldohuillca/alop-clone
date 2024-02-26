<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

// const appConfig = useAppConfig()
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title'
  }
})

const slides = [
  'banner-1.webp',
  'banner-2.webp',
  'banner-3.webp',
  'banner-4.webp',
  'banner-marcos.webp'
]

const pb = usePocketBase()


</script>

<template>
  <Carousel :transition="3000" :wrap-around="true">
    <Slide v-for="src in slides" :key="src" class="!p-0">
      <figure class="carousel__item h-[220px] md:h-[80vh] w-full">
        <!-- <NuxtImg :src="`/images/banner/${src}`" class="w-full h-full object-cover" /> -->

        <NuxtPicture format="webp" :src="`/images/banner/${src}`"
          class="[&_img]:w-full [&_img]:h-full [&_img]:object-cover" loading="lazy" />
      </figure>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>

  <section>
    <div class="container mx-auto py-10 md:py-20">
      <p>
        Si quieres sumarle personalidad a tus espacios ¡has llegado al lugar correcto! Hemos diseñado cientos de pósters,
        de diferentes estilos y temas, para darle vida, color y onda a tus paredes.
      </p>
      <div class="flex flex-col md:flex-row mt-20 gap-5">
        <aside class="">
          <div class=" flex flex-col gap-4 top-28 sticky">
            <UInput icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search..." size="lg" />

            <div class="overflow-x-auto pb-2">
              <ul class="flex md:flex-col gap-4  sticky top-4">
                <li>
                  <Chip href="?categoria=abstracto">
                    Abstracto
                  </Chip>
                </li>
                <li>
                  <Chip href="?categoria=abstracto">
                    Cosina
                  </Chip>
                </li>
                <li>
                  <Chip href="?categoria=abstracto">
                    Frases
                  </Chip>
                </li>
                <li>
                  <Chip href="?categoria=abstracto">
                    Gif Cards
                  </Chip>
                </li>
                <li>
                  <Chip href="?categoria=abstracto">
                    Abstracto
                  </Chip>
                </li>
                <li>
                  <Chip href="?categoria=abstracto">
                    Cosina
                  </Chip>
                </li>
                <li>
                  <Chip href="?categoria=abstracto">
                    Frases
                  </Chip>
                </li>
                <li>
                  <Chip href="?categoria=abstracto">
                    Gif Cards
                  </Chip>
                </li>
              </ul>
            </div>
          </div>

        </aside>

        <main class="grid grid-cols-2 md:grid-cols-3 gap-6">
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
          <figure>
            <img src="https://placehold.co/600x800" alt="">
          </figure>
        </main>
      </div>
    </div>
  </section>
</template>

<style>
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>