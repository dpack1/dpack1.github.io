<template>
    <header class="flex justify-between items-center p-4">
      <!-- Logo -->
      <div class="text-lg font-bold border border-textBlue  px-2 py-2 rounded hover:text-primaryBlue">
        <button @click="emitScroll('section1')" class="text-textBlue"> DP </button>
      </div>
  
      <!-- Navigation Links -->
    <nav :class="{'block': isMenuOpen, 'hidden': !isMenuOpen, 'lg:flex': true, 'lg:ml-14': true, 'lg:gap-x-20': true, 'lg:space-y-0': true, 'lg:space-x-8': true, 'max-lg:fixed': true, 'max-lg:bg-white': true, 'max-lg:w-full': true, 'max-lg:min-w-[300px]': true, 'max-lg:top-0': true, 'max-lg:left-0': true, 'max-lg:p-6': true, 'max-lg:h-full': true, 'max-lg:shadow-md': true, 'max-lg:overflow-auto': true, 'z-50': true}" class="flex flex-col lg:flex-row lg:space-x-8">
        <button @click="emitScroll('section2')" href="#" class="hover:underline hover:text-primaryBlue text-2xl font-semibold text-textBlue">Projects</button>
        <button @click="emitScroll('section3')" href="#" class="hover:underline hover:text-primaryBlue text-2xl font-semibold text-textBlue">Extras</button>
        <button @click="emitScroll('section4')" href="#" class="hover:underline  hover:text-primaryBlue text-2xl font-semibold text-textBlue">Adventure</button>

      </nav>
  
      <!-- Contact Me Button -->
      <a href="#" class="border border-textBlue text-textBlue px-4 py-2 rounded hover:text-primaryBlue">Contact Me</a>
    </header>
  </template>
  
<script>
  export default {
    methods: {
      emitScroll(sectionId) {
        console.log("emitted")
        this.$emit('scrollTo', sectionId); // Emit an event with the section ID
      }
    }
  }
</script>
  