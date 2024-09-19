<script setup>
import Header from './components/Header.vue'
import 'tailwindcss/tailwind.css'

</script>

<template>
  <section class="pb-10 bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
    <div class="items-center pt-5 px-8 mx-auto lg:px-16 md:px-12">
      <Header />
      <div class="justify-center w-full text-center lg:p-10 max-auto">
        <div class="justify-center w-full mx-auto">


          <div class="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
            <img class='w-64 h-64 rounded-full border border-[#E8E3F4]' src='./assets/Profile.jpg' />
          </div>

          <div>
                    <div class="text-center px-14">
                        <h2 class="text-gray-800 text-3xl font-bold">Dylan Packham</h2>
                        <a class="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/dylanpackham98/" target="BLANK()">@dylanpackham98</a>
                    </div>
                    <hr class="mt-8 " />

                </div>

          <p class="sm:mt-8 mt-3 sm:px-44 text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
            Hi, I'm 
            <span class="underline leading-8 underline-offset-8	decoration-8 decoration-[#8B5CF6]">Dylan Packham.</span>
            , Here you can check out what I'm working on.
          </p>

          <p class="sm:mt-8 mt-2.5 text-[#10172A] sm:px-72  sm:leading-loose text-lg font-normal tracking-tighter">
            I'm a <span class="font-semibold">fullstack developer</span>, 9 - 9 <span
              class="font-semibold">remote</span> worker, community builder, and a <span
              class="font-semibold">solo</span> traveller. I love to build <span class="font-semibold">apps</span>
            that solve real life problems.
          </p>
        </div>
      </div>

    </div>



    <div class="text-center space-x-4 mt-6">
      <button
        class="bg-[#8B5CF6] translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6  rounded-full inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
            clip-rule="evenodd" />
        </svg>


        &nbsp; &nbsp;<span> Add A Product </span>
      </button>
    </div>




  </section>


</template>