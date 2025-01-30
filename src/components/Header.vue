<template>
  <header class="flex justify-around items-center p-4 max-w-screen">
    <!-- Logo -->
    <div class="font-bold border border-textBlue px-2 py-2 rounded hover:text-primaryBlue text-2xl">
      <router-link to="/" class="text-textBlue"> DP </router-link>
    </div>

    <!-- Navigation Links -->
    <nav
      :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen, 'lg:flex': true, 'lg:ml-14': true, 'lg:gap-x-20': true, 'lg:space-y-0': true, 'lg:space-x-8': true, 'max-lg:fixed': true, 'max-lg:bg-white': true, 'max-lg:w-full': true, 'max-lg:min-w-[300px]': true, 'max-lg:top-0': true, 'max-lg:left-0': true, 'max-lg:p-6': true, 'max-lg:h-full': true, 'max-lg:shadow-md': true, 'max-lg:overflow-auto': true, 'z-50': true }"
      class="flex flex-col lg:flex-row lg:space-x-8">
      <button @click="emitScroll('section2')"
        class="hover:underline hover:text-primaryBlue text-2xl font-semibold text-textBlue">Projects</button>
      <button @click="emitScroll('section3')"
        class="hover:underline hover:text-primaryBlue text-2xl font-semibold text-textBlue">Extras</button>
      <router-link to="/adventure"
        class="hover:underline hover:text-primaryBlue text-2xl font-semibold text-textBlue">Adventure</router-link>
    </nav>

    <!-- Contact Me Button -->
    <a href="#"
      class="border border-textBlue text-textBlue px-4 py-2 rounded hover:text-primaryBlue font-semibold text-2xl">Contact
      Me</a>
  </header>
</template>

<script>
export default {
  methods: {
    emitScroll(sectionId) {
      this.$emit('scrollTo', sectionId);
    }
  }
}
</script>