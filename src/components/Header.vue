<template>
    <header class="flex justify-between items-center p-4">
      <!-- Logo -->
      <div class="text-lg font-bold border border-black px-3 py-3 rounded">DP</div>
  
      <!-- Navigation Links -->
    <nav :class="{'block': isMenuOpen, 'hidden': !isMenuOpen, 'lg:flex': true, 'lg:ml-14': true, 'lg:gap-x-20': true, 'lg:space-y-0': true, 'lg:space-x-8': true, 'max-lg:fixed': true, 'max-lg:bg-white': true, 'max-lg:w-full': true, 'max-lg:min-w-[300px]': true, 'max-lg:top-0': true, 'max-lg:left-0': true, 'max-lg:p-6': true, 'max-lg:h-full': true, 'max-lg:shadow-md': true, 'max-lg:overflow-auto': true, 'z-50': true}" class="flex flex-col lg:flex-row lg:space-x-8">
        <a href="#" class="hover:underline text-2xl font-semibold">Projects</a>
        <a href="#" class="hover:underline text-2xl font-semibold">Extras</a>
        <a href="#" class="hover:underline text-2xl font-semibold">Media</a>
      </nav>
  
      <!-- Contact Me Button -->
      <a href="#" class="border border-black px-4 py-2 rounded hover:bg-gray-100">Contact Me</a>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  