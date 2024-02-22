<template>
  <header class="flex z-50 w-full bg-white/10 backdrop-blur-sm text-xl py-4 sticky top-0 md:fixed">
    <nav class="container mx-auto px-4 flex items-center justify-between" aria-label="Global">
      <div class="flex items-center justify-between">
        <a class="flex-none text-xl font-semibold text-primary-950 " href="#">Alop</a>
      </div>
      <div id="navbar-collapse-with-animation" class="flex gap-5">
        <div class="hidden md:flex  gap-5 mt-5 text-base sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <a class="font-bold" href="#" aria-current="page">
            Tienda
          </a>
          <a class="font-bold" href="#">
            Favoritos
          </a>
          <a class="font-bold" href="#">
            Nosotros
          </a>
          <a class="font-bold" href="#">
            Contáctanos
          </a>
        </div>
        <div>
          <Button id="carrito">
            Carrito
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
              <path fill="currentColor"
                d="M2.5 2a.5.5 0 0 0 0 1h.246a.5.5 0 0 1 .48.363l1.586 5.55A1.5 1.5 0 0 0 6.254 10h4.569a1.5 1.5 0 0 0 1.393-.943l1.474-3.686A1 1 0 0 0 12.762 4H4.448l-.261-.912A1.5 1.5 0 0 0 2.746 2zm3.274 6.637L4.734 5h8.028l-1.475 3.686a.5.5 0 0 1-.464.314H6.254a.5.5 0 0 1-.48-.363M6.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1" />
            </svg>
            <span class="bg-yellow-300 h-5 w-5 flex items-center justify-center rounded-full text-primary-950">
              0
            </span>
          </Button>
        </div>
      </div>
    </nav>
  </header>

  <main class="bg-gray-100">
    <slot />
  </main>
</template>


<style>
html {
  font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>