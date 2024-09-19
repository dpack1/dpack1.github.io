<template>
    <header class="flex justify-between items-center p-4">
      <!-- Logo -->
      <div class="text-lg font-bold border border-black px-3 py-3 rounded">DP</div>
  
      <!-- Navigation Links -->
      <nav class='lg:flex lg:ml-14 lg:gap-x-20 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
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
  